import * as React from "react";
import type { FC } from "react";
import clsx from "clsx";
import { groupBy } from "lodash";

import type { TypeDefProps } from "./TypeDef";
import TypeDef from "./TypeDef";
import { Link } from "@docusaurus/router";

type InheritedFromProps = {
  displayName: string;
  to?: string;
};

const InheritedFrom: FC<InheritedFromProps> = ({ displayName, to }) => {
  if (displayName === "SELF") {
    return <span className="font-bold">Own Props</span>;
  } else {
    return (
      <span className="font-bold">
        From <Link to={to}>{displayName}</Link>
      </span>
    );
  }
};

type ListProps = {
  items: Array<ListItemProps>;
};

type ListItemProps = {
  displayName: string;
  isRequired: boolean;
  typeDef: TypeDefProps;
  inheritedFrom: InheritedFromProps;
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

function groupByInheritedFrom(
  el: Array<ListItemProps>
): [Record<string, string>, Record<string, Array<ListItemProps>>] {
  const links: Record<string, string> = {};
  const grouped = el.reduce((acc, val) => {
    console.log(val);
    if (acc[val.inheritedFrom.displayName]) {
      acc[val.inheritedFrom.displayName].push(val);
    } else {
      acc[val.inheritedFrom.displayName] = [val];
      links[val.inheritedFrom.displayName] = val.inheritedFrom.to;
    }
    return acc;
  }, {});

  return [links, grouped];
}

const PropertiesList: FC<ListProps> = ({ items }) => {
  const [links, els] = groupByInheritedFrom(items);
  const [showGrouped, setShowGrouped] = React.useState(false);
  return (
    <div className="px-4 py-5 sm:p-0">
      <div className="mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200">
        <span>Group by Inheritance</span>
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={showGrouped}
          onChange={() => setShowGrouped((prev) => !prev)}
        />
      </div>
      <div className="sm:divide-y sm:divide-gray-200">
        {showGrouped
          ? Object.keys(els).map((val) => {
              const items = els[val];
              return (
                <div className="py-2" key={val}>
                  <InheritedFrom displayName={val} to={links[val]} />
                  {items.map((item) => (
                    <PropertiesListItem key={item.displayName} {...item} />
                  ))}
                </div>
              );
            })
          : items.map((item) => (
              <PropertiesListItem key={item.displayName} {...item} />
            ))}
      </div>
    </div>
  );
};

export default PropertiesList;
