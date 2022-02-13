import * as React from "react";
import type { FC } from "react";
import { Link } from "@docusaurus/router";

export type TypeUnion =
  | "Primitive"
  | "Class"
  | "Enumeration"
  | "ConstrainedPrimitive";

export interface TypeDefProps {
  type: TypeUnion;
  // indicates if the cardinality is 0...N or not
  isList: boolean;
  displayName: string;
  to?: string;
}

const TypeDef: FC<TypeDefProps> = ({ type, isList, displayName, to }) => {
  let Comp: React.ReactNode;
  if (type === "Class" && to) {
    Comp = <Link to={to}>{displayName}</Link>;
  } else {
    Comp = displayName;
  }

  return isList ? <code>List [ {Comp} ]</code> : <code>{Comp}</code>;
};

export default TypeDef;
