import pathlib
import sys
import argparse
import os
import io
from typing import TextIO, Tuple, Optional, List, Dict
from aas_core_codegen import parse, run, intermediate, main
from aas_core_codegen.common import (
    LinenoColumner,
    Stripped,
    Error,
    Identifier,
    assert_never,
)
import docutils.nodes
import re
from description import generate_description

# region helpers ###############################################
def _to_kebap_case(identifier: Identifier) -> str:
    parts = identifier.split("_")
    return "{}".format("-".join(part.lower() for part in parts))


def _to_capital_camel_case(identifier: Identifier) -> str:
    parts = identifier.split("_")
    return "{}".format("".join(part.capitalize() for part in parts))


def _to_camel_case(identifier: Identifier) -> str:
    parts = []  # type: List[str]
    for idx, part in enumerate(identifier.split("_")):
        if idx == 0:
            parts.append(part)
        else:
            parts.append(part.capitalize())
    return "{}".format("".join(parts))


def _document_id(docs_ctx: "DocsContext", identifier: Identifier) -> Stripped:
    base = _to_kebap_case(identifier=identifier)
    return Stripped(f"{base}-{docs_ctx.model_version}")


def _document_name(identifier: Identifier) -> Stripped:
    return _to_capital_camel_case(identifier=identifier)


def _write_md_document_header(
    document_id: str, document_name: str, tags: Optional[List[str]] = None
) -> str:
    writer = io.StringIO()

    writer.write("--- \n")
    writer.write(f"id: {document_id} \n")
    writer.write(f"title: {document_name} \n")
    writer.write(f"sidebar_label: {document_name} \n")

    if tags is not None:
        writer.write("tags: \n")
        for tag in tags:
            writer.write(f"{SPACE}- {tag} \n")
    writer.write("---")

    return writer.getvalue()


# end region helpers ###############################################

PRIMITIVE_TYPE_MAP = {
    intermediate.PrimitiveType.BOOL: Stripped("boolean"),
    intermediate.PrimitiveType.INT: Stripped("int"),
    intermediate.PrimitiveType.FLOAT: Stripped("float"),
    intermediate.PrimitiveType.STR: Stripped("string"),
    intermediate.PrimitiveType.BYTEARRAY: Stripped("Array of byte"),
}

SPACE = "  "
DOUBLE_SPACE = SPACE * 2
AASD_CONSTRAINT_RE = re.compile(r"Constraint AASd-\d{3}:")
AASD_CONSTRAINT_REF_RE = re.compile(r"See Constraint AASd-\d{3}")


class AASdConstraint:
    def __init__(self, identifier: Identifier, name: str, description: str) -> None:
        self.identifier = identifier
        self.name = name
        self.description = description

    def stringify(self, docs_ctx: "DocsContext") -> Stripped:
        return f"""## {self.name} \n\n {self.description}"""


class DocsElementPropTypeDef:
    type = None  # type: str
    is_list = None  # type: bool
    display_name = None  # type: str
    to = None  # type: Optional[str]

    def __init__(self, prop: intermediate.Property) -> None:
        self.prop_name = prop.name
        self._init(prop.type_annotation)

    def _init(self, value: intermediate.TypeAnnotationUnion) -> str:
        if isinstance(value, intermediate.PrimitiveTypeAnnotation):
            self.display_name = PRIMITIVE_TYPE_MAP[value.a_type]
            self.type = "Primitive"

        elif isinstance(value, intermediate.OurTypeAnnotation):
            symbol = value.symbol
            self.display_name = _to_capital_camel_case(symbol.name)
            self.to = _to_kebap_case(symbol.name)

            if isinstance(symbol, intermediate.Enumeration):
                self.type = "Enumeration"
            elif isinstance(symbol, intermediate.ConstrainedPrimitive):
                self.type = "ConstrainedPrimitive"
            elif isinstance(symbol, intermediate.Class):
                self.type = "Class"

        elif isinstance(value, intermediate.ListTypeAnnotation):
            self.is_list = True
            return self._init(value.items)
        elif isinstance(value, intermediate.OptionalTypeAnnotation):
            return self._init(value.value)

        else:
            assert_never(value)

    def stringify(self, docs_ctx: "DocsContext") -> Stripped:
        to = None
        if self.type != "Primitive":
            to = _document_id(docs_ctx=docs_ctx, identifier=self.to)

        return f"""{{ type: "{self.type}", isList: {"true" if self.is_list is True else "false"}, displayName: "{self.display_name}", to: {f'"{to}"' if to is not None else "null"} }}"""


class DocsElementProp:
    def __init__(self, prop: intermediate.Property) -> None:
        self.is_required = self._is_required(prop)
        self.display_name = self._display_name(prop)
        self.type_def = DocsElementPropTypeDef(prop)

    def _is_required(self, prop: intermediate.Property) -> bool:
        if isinstance(prop.type_annotation, intermediate.OptionalTypeAnnotation):
            return True
        else:
            return False

    def _display_name(self, prop: intermediate.Property) -> str:
        return _to_capital_camel_case(prop.name)

    def stringify(self, docs_ctx: "DocsContext") -> Stripped:
        type_def = self.type_def.stringify(docs_ctx=docs_ctx)
        return f"""{{ displayName: "{self.display_name}", isRequired: {"true" if self.is_required is True else "false"}, typeDef: {type_def} }}"""


class DocsElement:
    props = None  # type: List[DocsElementProp]

    def __init__(
        self,
        identifier: Identifier,
        document_id: str,
        document_name: str,
    ) -> None:
        self.props = []
        self.identifier = identifier
        self.document_id = document_id
        self.document_name = document_name

    def add_prop(self, prop: intermediate.Property) -> None:
        new_prop = DocsElementProp(prop)
        self.props.append(new_prop)

    def _stringify_props(self, docs_ctx: "DocsContext") -> str:
        if len(self.props) > 0:
            writer = io.StringIO()
            # import the component
            writer.write(
                "import PropertiesList from '@site/src/components/PropertiesList' \n\n"
            )
            # write the headline
            writer.write("## Properties \n\n")
            # open the component
            writer.write("<PropertiesList items={[ ")
            for i, prop in enumerate(self.props):
                writer.write(prop.stringify(docs_ctx=docs_ctx))
                if len(self.props) != i:
                    writer.write(", ")
            writer.write("]} /> \n\n")
            return writer.getvalue()
        else:
            return ""

    def _stringify_element_header(
        self, docs_ctx: "DocsContext", tags: Optional[List[str]] = None
    ) -> str:
        return _write_md_document_header(self.document_id, self.document_name)

    def stringify(self, docs_ctx: "DocsContext") -> str:
        writer = io.StringIO()
        # Header
        writer.write(self._stringify_element_header(docs_ctx=docs_ctx))
        writer.write("\n\n")

        # Properties
        writer.write(self._stringify_props(docs_ctx=docs_ctx))

        return writer.getvalue()


def _identifier_from_symbol(symbol: intermediate.Symbol) -> Identifier:
    if isinstance(symbol, intermediate.AbstractClass):
        return symbol.interface.name
    else:
        return symbol.name


class DocsContext:
    aasd_constraints = dict()  # type: Dict[str, AASdConstraint]
    docs_elements = dict()  # type: Dict[Identifier, DocsElement]
    sidebar_items = dict()  # type: Dict[str, List[str]]
    backwards_ref = dict()  # type: Dict[Identifier, Dict[Identifier, List[Identifier]]]

    def __init__(
        self,
        project_dir: pathlib.Path,
        input_dir: pathlib.Path,
        output_dir: pathlib.Path,
        model_version: Optional[str] = None,
    ) -> None:
        self.project_dir = project_dir
        self.input_dir = input_dir
        self.output_dir = output_dir
        self.model_version = model_version

    def abs_content_path(self) -> pathlib.Path:
        return self.output_dir / self.model_version / "content"

    def rel_content_path_as_str(self) -> str:
        return f"{self.model_version}/content"

    def abs_sidebar_path(self) -> pathlib.Path:
        return self.project_dir / "sidebars" / f"{self.model_version}.js"

    def add_maybe_assd_constraint(self, description: intermediate.Description) -> None:
        if len(description.document.children) == 0:
            return None

        for child in description.document.children:
            if isinstance(child, docutils.nodes.paragraph):
                for element in child:
                    if element is not None and isinstance(element, docutils.nodes.Text):
                        match = AASD_CONSTRAINT_RE.match(element)
                        if match is not None:
                            name = element[match.start() : match.end() - 1]
                            constraint = AASdConstraint(
                                identifier=_to_camel_case(name),
                                name=name,
                                description=child.astext()[match.end() + 1 :],
                            )
                            self.aasd_constraints[constraint.identifier] = constraint

    def has_aasd_constraint(self, identifier: str) -> bool:
        if identifier in self.aasd_constraints:
            return True
        else:
            return False

    def _add_sidebar_item(self, category: str, document_id: str) -> None:
        exists = self.sidebar_items.get(category, None)
        if exists is None:
            self.sidebar_items[category] = [document_id]
        else:
            exists.append(document_id)
            self.sidebar_items[category] = exists

    def _add_sidebar_item_if_needed(
        self, docs_element: DocsElement, symbol: intermediate.Symbol
    ) -> None:
        if isinstance(symbol, intermediate.ConcreteClass):
            self._add_sidebar_item(
                category="Concrete Classes", document_id=docs_element.document_id
            )
        elif isinstance(symbol, intermediate.AbstractClass):
            self._add_sidebar_item(
                category="Abstract Classes", document_id=docs_element.document_id
            )

        elif isinstance(symbol, intermediate.ConstrainedPrimitive):
            self._add_sidebar_item(
                category="Constrained Primitives", document_id=docs_element.document_id
            )
        elif isinstance(symbol, intermediate.Enumeration):
            self._add_sidebar_item(
                category="Enumerations", document_id=docs_element.document_id
            )

    def _stringify_sidebar_category(self, label: str, items: List[str]) -> str:
        writer = io.StringIO()
        writer.write(
            f"""{{ type: "category", label: "{label}", collapsed: true, items: [ """
        )
        for i, item in enumerate(sorted(items)):
            item_name = f'"{self.rel_content_path_as_str()}/{item}"'
            writer.write(item_name)
            if len(items) - 1 > i:
                writer.write(", ")
        writer.write("]} \n")

        return writer.getvalue()

    def _stringify_sidebar(self) -> str:
        writer = io.StringIO()
        writer.write("module.exports = [ ")
        writer.write(f'"{self.model_version}/overview-{self.model_version}", ')
        writer.write(f'"{self.model_version}/constraints-{self.model_version}", ')

        for i, key in enumerate(sorted(self.sidebar_items)):
            items = self.sidebar_items.get(key)
            writer.write(self._stringify_sidebar_category(label=key, items=items))
            if len(self.sidebar_items) - 1 > i:
                writer.write(", ")
        writer.write("] \n")
        return writer.getvalue()

    def _init_docs_element(self, symbol: intermediate.Symbol) -> DocsElement:
        identifier = _identifier_from_symbol(symbol=symbol)
        document_id = _document_id(self, identifier)
        document_name = _document_name(identifier)

        return DocsElement(
            identifier=identifier,
            document_id=document_id,
            document_name=document_name,
        )

    def add_docs_element(self, symbol: intermediate.Symbol) -> None:
        identifier = _identifier_from_symbol(symbol)
        docs_element = self.docs_elements.get(identifier, None)

        if docs_element is None:
            docs_element = self._init_docs_element(symbol)

        if isinstance(symbol, intermediate.Class):
            if symbol.description is not None:
                self.add_maybe_assd_constraint(symbol.description)

            for prop in symbol.properties:
                docs_element.add_prop(prop)
                if prop.description is not None:
                    self.add_maybe_assd_constraint(prop.description)

                self._maybe_add_backwards_ref(identifier, prop)

        self._add_sidebar_item_if_needed(docs_element=docs_element, symbol=symbol)
        self.docs_elements[docs_element.identifier] = docs_element

    def write_file(self, output_path: pathlib.Path, docs: str) -> Error:
        output_path.parent.mkdir(exist_ok=True)
        try:
            output_path.write_text(docs)
        except Exception as exception:
            return Error(
                None, f"Faild to write docs to {output_path}", [str(exception)]
            )

        return None

    def _add_backwards_ref(
        self, ref_identifier: Identifier, document_id: str, prop_name: Identifier
    ):
        exists = self.backwards_ref.get(document_id)
        if exists is None:
            d = dict()
            d[ref_identifier] = [prop_name]
            self.backwards_ref[document_id] = d
        else:
            inner_exists = exists.get(ref_identifier)
            if inner_exists is None:
                exists[ref_identifier] = [prop_name]
            else:
                inner_exists.append(prop_name)
                exists[ref_identifier] = inner_exists

            self.backwards_ref[document_id] = exists

    def _maybe_add_backwards_ref(
        self, ref_identifier: Identifier, prop: intermediate.Property
    ) -> None:
        if isinstance(prop.type_annotation, intermediate.OptionalTypeAnnotation):
            if isinstance(prop.type_annotation.value, intermediate.OurTypeAnnotation):
                document_id = _document_id(self, prop.type_annotation.value.symbol.name)
                self._add_backwards_ref(ref_identifier, document_id, prop.name)

        elif isinstance(prop.type_annotation, intermediate.ListTypeAnnotation):
            if isinstance(prop.type_annotation.items, intermediate.OurTypeAnnotation):
                document_id = _document_id(self, prop.type_annotation.items.symbol.name)
                self._add_backwards_ref(ref_identifier, document_id, prop.name)

        elif isinstance(prop.type_annotation, intermediate.OurTypeAnnotation):
            document_id = _document_id(self, prop.type_annotation.symbol.name)
            self._add_backwards_ref(ref_identifier, document_id, prop.name)

        return

    def _stringify_backwards_ref(
        self, entry: Dict[Identifier, List[Identifier]]
    ) -> str:
        writer = io.StringIO()
        # import the component
        writer.write("import UsageList from '@site/src/components/UsageList' \n\n")
        # write the headline
        writer.write("## Usages \n\n")
        # open the component
        writer.write("<UsageList items={[ ")
        for i, key in enumerate(entry):
            items = entry.get(key)
            writer.write(
                f'{{ displayName: "{_to_capital_camel_case(key)}", to: "{_document_id(self, key)}", props: [ '
            )
            for j, item in enumerate(items):
                writer.write(f'"{_to_capital_camel_case(item)}"')
                if len(items) - 1 > j:
                    writer.write(", ")
            writer.write("]}")
            if len(entry) - 1 > i:
                writer.write(", ")
        writer.write("]} /> \n \n")

        return writer.getvalue()

    def write_files(self, stdout: TextIO, stderr: TextIO) -> int:
        # write doc elements
        for key in self.docs_elements:
            writer = io.StringIO()

            element = self.docs_elements.get(key)
            writer.write(element.stringify(self))
            writer.write("\n\n")

            backwards_ref = self.backwards_ref.get(element.document_id, None)
            if backwards_ref is not None:
                writer.write(self._stringify_backwards_ref(backwards_ref))

            output_path = self.abs_content_path() / f"{key}.mdx"
            error = self.write_file(output_path, writer.getvalue())
            if error is not None:
                return 1

        # write sidebar
        output_path = self.abs_sidebar_path()
        error = self.write_file(output_path, self._stringify_sidebar())
        if error is not None:
            return 1

        # constraints
        output_path = self.output_dir / self.model_version / f"constraints.mdx"
        constraints_writer = io.StringIO()
        header = _write_md_document_header(
            f"constraints-{self.model_version}", document_name="Constraints"
        )
        constraints_writer.write(header)

        constraints_writer.write("\n\n")
        for i, key in enumerate(sorted(self.aasd_constraints)):
            constraint = self.aasd_constraints.get(key)
            constraints_writer.write(constraint.stringify(docs_ctx=self))

            if len(self.aasd_constraints) > i:
                constraints_writer.write("\n\n")
        error = self.write_file(output_path, constraints_writer.getvalue())
        if error is not None:
            return 1

        return 0


def _generate(
    context: run.Context, docs_ctx: DocsContext, stdout: TextIO, stderr: TextIO
) -> int:
    for symbol in context.symbol_table.symbols:
        docs_ctx.add_docs_element(symbol=symbol)

    return docs_ctx.write_files(stdout=stdout, stderr=stderr)


def execute(docs_ctx: DocsContext, stdout: TextIO, stderr: TextIO) -> int:
    if not docs_ctx.input_dir.exists():
        stderr.write(f"The --input_dir does not exist: {docs_ctx.input_dir}\n")
        return 1

    model_file_path = (
        docs_ctx.input_dir / f"{docs_ctx.model_version}" / f"meta_model.py"
    )
    if not model_file_path.is_file():
        stderr.write(
            f"The version {docs_ctx.model_version} does not contain a meta_model.py file \n"
        )
        return 1

    if not docs_ctx.output_dir.exists():
        stderr.write(
            f"The --output_dir does not point to a directory: "
            f"{docs_ctx.output_dir}\n"
        )
        return 1

    version_output_dir = docs_ctx.output_dir / f"{docs_ctx.model_version}"
    # ensure the directory exists
    version_output_dir.parent.mkdir(exist_ok=True)

    text = model_file_path.read_text(encoding="utf-8")
    atok, parse_execution = parse.source_to_atok(source=text)

    if parse_execution:
        if isinstance(parse_execution, SyntaxError):
            stderr.write(
                f"Failed to parse the meta-model {model_file_path}: "
                f"invalid syntax at line {parse_execution.lineno}\n"
            )
        else:
            stderr.write(
                f"Failed to parse the meta-model {model_file_path}: "
                f"{parse_execution}\n"
            )

        return 1

    import_errors = parse.check_expected_imports(atok=atok)
    if import_errors:
        run.write_error_report(
            message="One or more unexpected imports in the meta-model",
            errors=import_errors,
            stderr=stderr,
        )

        return 1

    lineno_columner = LinenoColumner(atok=atok)

    parsed_symbol_table, error = parse.atok_to_symbol_table(atok=atok)
    if error is not None:
        run.write_error_report(
            message=f"Failed to construct the symbol table from {model_file_path}",
            errors=[lineno_columner.error_message(error)],
            stderr=stderr,
        )

        return 1

    assert parsed_symbol_table is not None

    ir_symbol_table, error = intermediate.translate(
        parsed_symbol_table=parsed_symbol_table,
        atok=atok,
    )
    if error is not None:
        run.write_error_report(
            message=f"Failed to translate the parsed symbol table "
            f"to intermediate symbol table "
            f"based on {model_file_path}",
            errors=[lineno_columner.error_message(error)],
            stderr=stderr,
        )

        return 1

    assert ir_symbol_table is not None

    run_context = run.Context(
        model_path=model_file_path,
        symbol_table=ir_symbol_table,
        spec_impls=None,
        lineno_columner=lineno_columner,
        output_dir=version_output_dir,
    )

    return _generate(
        context=run_context,
        docs_ctx=docs_ctx,
        stdout=stdout,
        stderr=stderr,
    )


def main(prog: str) -> int:
    parser = argparse.ArgumentParser(prog=prog, description=__doc__)
    parser.add_argument("--input_dir", help="path to the meta-model", required=True)
    parser.add_argument(
        "--output_dir", help="path to the generated docs", required=True
    )
    parser.add_argument(
        "--project_dir", help="path where the project lives", required=True
    )
    parser.add_argument(
        "--model_version",
        help="version of the meta-model to generate the docs",
        required=True,
    )

    args = parser.parse_args()

    docs_ctx = DocsContext(
        project_dir=pathlib.Path(args.project_dir),
        input_dir=pathlib.Path(args.input_dir),
        output_dir=pathlib.Path(args.output_dir),
        model_version=args.model_version,
    )

    return execute(docs_ctx=docs_ctx, stdout=sys.stdout, stderr=sys.stderr)


def entry_point() -> int:
    return main(prog="meta-docs-gen")


if __name__ == "__main__":
    sys.exit(main(prog="meta-docs-gen"))
