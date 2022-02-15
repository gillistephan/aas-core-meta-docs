import * as React from "react";
import type { FC } from "react";
import { Link } from "@docusaurus/router";

type ListProps = {
  items: Array<ListItemProps>;
};

type ListItemProps = {
  displayName: string;
  to: string;
  props: Array<string>;
};

const UsageList: FC<ListProps> = ({ items }) => (
  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
    <div className=" sm:divide-y sm:divide-gray-200">
      {items.map((item) => (
        <div
          key={item.displayName}
          className="py-2 sm:grid sm:grid-cols-3 sm:gap-4"
        >
          <Link to={item.to}>
            <span>{item.displayName}</span>
          </Link>
          <div className="sm:col-span-2">
            {item.props.map((prop, idx) => (
              <span>
                {prop}
                {idx === item.props.length - 1 ? "" : ", "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UsageList;
