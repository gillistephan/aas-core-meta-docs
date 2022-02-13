import * as React from "react";
import type { FC } from "react";
import clsx from "clsx";

import type { TypeDefProps } from "./TypeDef";
import TypeDef from "./TypeDef";

type ListProps = {
  items: Array<ListItemProps>;
};

type ListItemProps = {
  name: string;
  isRequired: boolean;
  typeDef: TypeDefProps;
  inheritedFrom?: React.ReactNode;
};

const PropertiesListItem: FC<ListItemProps> = ({
  name,
  isRequired,
  typeDef,
}) => {
  return (
    <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="flex w-full items-center space-x-4">
        <span className="w-56">{name}</span>
        <span
          className={clsx(
            isRequired
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800",
            "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium"
          )}
        >
          {isRequired ? "Required" : "Optional"}
        </span>
      </dt>
      <dd className="mt-1 sm:col-span-2 sm:mt-0">
        <div className="flex flex-col items-start justify-start">
          <TypeDef {...typeDef} />
        </div>
      </dd>
    </div>
  );
};

const PropertiesList: FC<ListProps> = ({ items }) => {
  return (
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl className="sm:divide-y sm:divide-gray-200">
        {items.map((item) => (
          <PropertiesListItem {...item} />
        ))}
      </dl>
    </div>
  );
};

export default PropertiesList;
