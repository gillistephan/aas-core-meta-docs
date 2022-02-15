import * as React from "react";
import type { FC } from "react";
import clsx from "clsx";

import type { TypeDefProps } from "./TypeDef";
import TypeDef from "./TypeDef";

type ListProps = {
  items: Array<ListItemProps>;
};

type ListItemProps = {
  displayName: string;
  isRequired: boolean;
  typeDef: TypeDefProps;
  inheritedFrom?: React.ReactNode;
};

const PropertiesListItem: FC<ListItemProps> = ({
  displayName,
  isRequired,
  typeDef,
}) => {
  return (
    <div className="py-2 sm:grid sm:grid-cols-4 sm:gap-4">
      <span>{displayName}</span>
      <div>
        <span
          className={clsx(
            isRequired
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800",
            "inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium"
          )}
        >
          {isRequired ? "Required" : "Optional"}
        </span>
      </div>

      <dd className="mt-1  sm:mt-0">
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
      <div className="sm:divide-y sm:divide-gray-200">
        {items.map((item) => (
          <PropertiesListItem key={item.displayName} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;
