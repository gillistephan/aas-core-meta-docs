from ast import Param
from importlib.resources import path
from ntpath import join
import pathlib
import sys
import argparse
import os
import io
from typing import TextIO, Tuple, Optional, List
from aas_core_codegen import parse, run, intermediate, main
from aas_core_codegen.common import (
    LinenoColumner,
    Stripped,
    Error,
    Identifier,
    assert_never,
)
from numpy import block
from description import generate_description

PRIMITIVE_TYPE_MAP = {
    intermediate.PrimitiveType.BOOL: Stripped("boolean"),
    intermediate.PrimitiveType.INT: Stripped("int"),
    intermediate.PrimitiveType.FLOAT: Stripped("float"),
    intermediate.PrimitiveType.STR: Stripped("string"),
    intermediate.PrimitiveType.BYTEARRAY: Stripped("Array of byte"),
}

SPACE = "  "
DOUBLE_SPACE = SPACE * 2


class DocsCtx:
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


def _document_id(docs_ctx: DocsCtx, identifier: Identifier) -> Stripped:
    base = _to_kebap_case(identifier=identifier)
    return Stripped(f"{base}-{docs_ctx.model_version}")


def _document_name(identifier: Identifier) -> Stripped:
    return _to_capital_camel_case(identifier=identifier)


def _write_document_header(
    document_id: str, document_name: str, tags: Optional[List[str]] = None
) -> Tuple[Optional[str], Optional[Error]]:
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

    return Stripped(writer.getvalue()), None


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


def _write_type_def_object(
    type: str, is_list: bool, display_name: str, to: Optional[str] = None
) -> Tuple[Optional[str], Optional[Error]]:
    return (
        f"""
    {{
        type: "{type}",
        isList: {"true" if is_list is True else "false"},
        displayName: "{display_name}",
        to: {f'"{to}"' if to is not None else "null"},
    }}
    """,
        None,
    )


def _generate_type_def_props(
    docs_ctx: DocsCtx, value: intermediate.TypeAnnotationUnion, is_list: bool = False
) -> Tuple[Optional[str], Optional[Error]]:
    """
    _generate_type_def_props generates a JS-Object with the following structure:
    {
        type: Primitive | Class | Enumeration | ConstrainedPrimitive,
        isList: false | true,
        displayName: <myName>,
        to: <Link to the document>
    }
    """

    block = None  # type: str
    error = None  # type: Error

    if isinstance(value, intermediate.PrimitiveTypeAnnotation):
        block, error = _write_type_def_object(
            type="Primitive", is_list=is_list, display_name=value.a_type
        )

    elif isinstance(value, intermediate.OurTypeAnnotation):
        symbol = value.symbol
        document_id = _document_id(docs_ctx=docs_ctx, identifier=symbol.name)
        type = None

        if isinstance(symbol, intermediate.Enumeration):
            type = "Enumeration"
        elif isinstance(symbol, intermediate.ConstrainedPrimitive):
            type = "ConstrainedPrimitive"
        elif isinstance(symbol, intermediate.Class):
            type = "Class"

        block, error = _write_type_def_object(
            type=type,
            is_list=is_list,
            display_name=_to_capital_camel_case(symbol.name),
            to=f"{document_id}",
        )

    elif isinstance(value, intermediate.ListTypeAnnotation):
        block, error = _generate_type_def_props(
            docs_ctx=docs_ctx, value=value.items, is_list=True
        )

    elif isinstance(value, intermediate.OptionalTypeAnnotation):
        block, error = _generate_type_def_props(docs_ctx=docs_ctx, value=value.value)
    else:
        assert_never(value)

    return block, error


def _generate_properties_list_for_class(
    docs_ctx: DocsCtx, value: intermediate.Class
) -> Tuple[Optional[str], Optional[List[Error]]]:
    # regin properties_list #######################################
    writer = io.StringIO()
    # import the component
    writer.write(
        "import PropertiesList from '../../../src/components/PropertiesList' \n\n"
    )
    # write the headline
    writer.write("## Properties \n\n")
    # open the component
    writer.write("<PropertiesList items={[ \n")

    errors = []  # type: List[Error]
    blocks = []  # type: List[str]

    for prop in value.properties:
        if isinstance(prop.type_annotation, intermediate.OptionalTypeAnnotation):
            type_def, error = _generate_type_def_props(
                docs_ctx=docs_ctx, value=prop.type_annotation.value
            )
            if error is not None:
                errors.append(error)
            else:
                blocks.append(
                    f"""{{
                        name: "{_to_capital_camel_case(prop.name)}",
                        isRequired: false,
                        typeDef: {type_def}
                    }}"""
                )

        else:
            type_def, error = _generate_type_def_props(
                docs_ctx=docs_ctx, value=prop.type_annotation
            )

            if error is not None:
                errors.append(error)
            else:
                blocks.append(
                    f"""{{
                    name: "{_to_capital_camel_case(prop.name)}",
                    isRequired: true,
                    typeDef: {type_def}
                }}"""
                )

    if len(errors) > 0:
        return None, errors

    writer.write(",".join(blocks))
    writer.write("]} /> \n \n")

    return writer.getvalue(), None


def _generate_for_abstract_class(
    docs_ctx: DocsCtx,
    abstract_class: intermediate.AbstractClass,
    document_id=str,
    document_name=str,
) -> Tuple[Optional[str], Optional[Error]]:
    writer = io.StringIO()

    header, error = _write_document_header(
        document_id=document_id, document_name=document_name
    )
    if error is not None:
        return None, error

    writer.write(header)
    writer.write("\n\n")

    if abstract_class.description is not None:
        description, error = generate_description(abstract_class.description)
        if error is not None:
            return None, error
        writer.write(description)
        writer.write("\n\n")

    properties, error = _generate_properties_list_for_class(
        docs_ctx=docs_ctx, value=abstract_class
    )
    if error is not None:
        return None, error

    writer.write(properties)

    return writer.getvalue(), None


def _generate_for_concrete_class(
    docs_ctx: DocsCtx,
    concrete_class: intermediate.ConcreteClass,
    document_id=str,
    document_name=str,
) -> Tuple[Optional[str], Optional[Error]]:
    writer = io.StringIO()

    header, error = _write_document_header(
        document_id=document_id,
        document_name=document_name,
    )
    if error is not None:
        return None, error

    writer.write(header)

    if concrete_class.description is not None:
        description, error = generate_description(concrete_class.description)
        writer.write(description)
        writer.write("\n\n")

    properties, error = _generate_properties_list_for_class(
        docs_ctx=docs_ctx, value=concrete_class
    )
    if error is not None:
        return None, error

    writer.write(properties)

    return writer.getvalue(), None


def _generate_for_enum(
    enum: intermediate.Enumeration, document_id=str, document_name=str
) -> Tuple[Optional[str], Optional[Error]]:
    writer = io.StringIO()

    header, error = _write_document_header(
        document_id=document_id, document_name=document_name
    )
    if error is not None:
        return None, error

    writer.write(header)

    return writer.getvalue(), None


def _generate_for_constrained_primitive(
    primitive: intermediate.ConstrainedPrimitive,
    document_id=str,
    document_name=str,
) -> Tuple[Optional[str], Optional[List[Error]]]:
    writer = io.StringIO()

    header, error = _write_document_header(
        document_id=document_id,
        document_name=document_name,
    )

    writer.write(header)

    return writer.getvalue(), None


def _write_element_to_md_file(
    output_path: pathlib.Path, element_name: Identifier, docs: Stripped
) -> Error:
    pth = output_path / f"{element_name}.md"
    pth.parent.mkdir(exist_ok=True)

    try:
        pth.write_text(docs)
    except Exception as exception:
        return Error(
            None, f"Failed to write docs for {element_name} to {pth}", [str(exception)]
        )
    return None


def _write_to_sidebar_file(docs_ctx: DocsCtx, docs: Stripped) -> Error:
    """
    _wirte_to_sidebar_file generates the sidebar elements for the specified version
    of the meta-model. The file name is <model_version>.js
    """
    pth = docs_ctx.abs_sidebar_path()
    pth.parent.mkdir(exist_ok=True)

    try:
        pth.write_text(docs)
    except Exception as exception:
        return Error(None, f"Failed to write sidebar to {pth}", [str(exception)])

    return None


def _write_sidebar_category(
    docs_ctx: DocsCtx, label: str, items: List[str], collapsed: bool = False
) -> Stripped:
    """
    _write_sidebar_category generates a json object according to the docusaurus sidebar_item spec.

    {
        "type": "category",
        "label": "<mylabel>",
        "collapsed": false,
        items: [<my-items>]
    }
    """
    writer = io.StringIO()
    writer.write("{ \n")
    writer.write(f'{SPACE}type: "category", \n')
    writer.write(f'{SPACE}label: "{label}", \n')

    if collapsed:
        writer.write(f"{SPACE}collapsed: false, \n")
    else:
        writer.write(f"{SPACE}collapsed: true, \n")

    writer.write(f"{SPACE} items: [")
    for i, item in enumerate(sorted(items)):
        item_name = f'"{docs_ctx.rel_content_path_as_str()}/{item}"'
        writer.write(item_name)
        if len(items) - 1 != i:
            writer.write(", \n")

    writer.write("] \n")

    writer.write("}")

    return Stripped(writer.getvalue())


def _generate(
    context: run.Context, docs_ctx: DocsCtx, stdout: TextIO, stderr: TextIO
) -> int:
    content_dir = docs_ctx.abs_content_path()

    abstract_class_sidebar_items = []  # type: List[str]
    concrete_class_sidebar_items = []  # type: List[str]
    enumeration_sidebar_items = []  # type: List[str]
    constrained_primitive_items = []  # type: List[str]

    for symbol in context.symbol_table.symbols:
        if isinstance(symbol, intermediate.AbstractClass):
            name = symbol.interface.name
            # document
            document_id = _document_id(docs_ctx, name)
            document_name = _document_name(name)
            # add to sidebar
            abstract_class_sidebar_items.append(document_id)
            # generate docs
            docs, error = _generate_for_abstract_class(
                docs_ctx=docs_ctx,
                abstract_class=symbol.interface,
                document_id=document_id,
                document_name=document_name,
            )
            if error is not None:
                return 1

            error = _write_element_to_md_file(content_dir, document_name, docs)
            if error is not None:
                return 1

        elif isinstance(symbol, intermediate.ConcreteClass):
            name = symbol.name
            # document
            document_id = _document_id(docs_ctx, name)
            document_name = _document_name(name)
            # add to sidebar
            concrete_class_sidebar_items.append(document_id)
            # generate docs
            docs, error = _generate_for_concrete_class(
                docs_ctx=docs_ctx,
                concrete_class=symbol,
                document_id=document_id,
                document_name=document_name,
            )
            if error is not None:
                return 1

            error = _write_element_to_md_file(content_dir, document_name, docs)
            if error is not None:
                return 1

        elif isinstance(symbol, intermediate.ConstrainedPrimitive):
            name = symbol.name
            # document
            document_id = _document_id(docs_ctx, name)
            document_name = _document_name(name)
            # add to sidebar
            constrained_primitive_items.append(document_id)
            # generate docs
            docs, error = _generate_for_constrained_primitive(
                symbol, document_id=document_id, document_name=document_name
            )
            if error is not None:
                return 1

            error = _write_element_to_md_file(content_dir, document_name, docs)
            if error is not None:
                return 1

        elif isinstance(symbol, intermediate.Enumeration):
            name = symbol.name
            # document
            document_id = _document_id(docs_ctx, name)
            document_name = _document_name(name)
            # add to sidebar
            enumeration_sidebar_items.append(document_id)
            # generate docs
            docs, error = _generate_for_enum(
                symbol, document_id=document_id, document_name=document_name
            )
            if error is not None:
                return 1

            error = _write_element_to_md_file(content_dir, document_name, docs)
            if error is not None:
                return 1

        else:
            assert_never(symbol)

    stdout.write(f"Markdown docs generated to: {content_dir}\n")

    # generate sidebar
    sidebar_writer = io.StringIO()
    sidebar_writer.write("module.exports = [ \n")
    sidebar_writer.write(
        f'{SPACE}"{docs_ctx.model_version}/overview-{docs_ctx.model_version}", \n'
    )
    # write abstract_class_sidebar_items
    abstract_class_category = _write_sidebar_category(
        docs_ctx=docs_ctx,
        label="Abstract Classes",
        items=abstract_class_sidebar_items,
    )
    sidebar_writer.write(f"{SPACE}{abstract_class_category}")
    sidebar_writer.write(", \n")
    # write concrete_class_sidebar_items
    concrete_class_category = _write_sidebar_category(
        docs_ctx=docs_ctx,
        label="Concrete Classes",
        items=concrete_class_sidebar_items,
    )
    sidebar_writer.write(f"{SPACE}{concrete_class_category}")
    sidebar_writer.write(", \n")
    # write enumeration_sidebar_items
    enumeration_category = _write_sidebar_category(
        docs_ctx=docs_ctx, label="Enumerations", items=enumeration_sidebar_items
    )
    sidebar_writer.write(f"{SPACE}{enumeration_category}")
    sidebar_writer.write(", \n")
    # write constrained_primitive_sidebar_items
    constrained_primitive_category = _write_sidebar_category(
        docs_ctx=docs_ctx,
        label="Constrained Primitives",
        items=constrained_primitive_items,
    )
    sidebar_writer.write(f"{SPACE}{constrained_primitive_category}")

    sidebar_writer.write("]\n")
    # write to file
    error = _write_to_sidebar_file(docs_ctx, sidebar_writer.getvalue())
    if error is not None:
        return 1

    stdout.write(
        f"Sidebar generated to: {docs_ctx.abs_sidebar_path()}. Add it to the index.js file for display."
    )

    return 0


def _execute_for_version(docs_ctx: DocsCtx, stdout: TextIO, stderr: TextIO) -> int:
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


def execute(docs_ctx: DocsCtx, stdout: TextIO, stderr: TextIO) -> int:
    if not docs_ctx.input_dir.exists():
        stderr.write(f"The --input_dir does not exist: {docs_ctx.input_dir}\n")
        return 1
    # list the directory containing the models for different version
    dir = os.listdir(docs_ctx.input_dir)
    for model_version in dir:
        # check if docs should be generated for a specific version
        if docs_ctx.model_version is not None:
            if model_version == docs_ctx.model_version:
                return _execute_for_version(
                    docs_ctx=docs_ctx, stdout=stdout, stderr=stderr
                )
        # if not iterate through all the found versions and generate them
        else:
            docs_ctx.model_version = model_version

            code = _execute_for_version(docs_ctx=docs_ctx, stdout=stdout, stderr=stderr)

            if code == 1:
                return code

    return 0


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
        "--model_version", help="version of the meta-model to generate the docs"
    )

    args = parser.parse_args()

    docs_ctx = DocsCtx(
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
