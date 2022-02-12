import * as React from "react";
import type { FC } from "react";
import { Link } from "@docusaurus/router";
import { Collapsible } from "@docusaurus/theme-common/lib/components/Collapsible";
import clsx from "clsx";

type ListProps = {
  listName: string;
  items: Array<ListItemProps>;
};

type ListItemProps = {
  name: string;
  isRequired: boolean;
  typeDef: React.ReactNode;
  inheritedFrom?: React.ReactNode;
};

const PropertiesListItem: FC<ListItemProps> = ({
  name,
  isRequired,
  typeDef,
  inheritedFrom,
}) => {
  return (
    <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="flex w-full items-center space-x-4">
        <span className=" w-52">{name}</span>
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
        <div className="flex flex-col items-start justify-start">{typeDef}</div>
      </dd>
    </div>
  );
};

const PropertiesList: FC<ListProps> = ({ listName, items }) => {
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
