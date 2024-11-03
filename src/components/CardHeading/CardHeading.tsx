import React from "react";
import { ICardHeading } from "./CardHeadingTypes";
import Link from "next/link";

const CardHeading: React.FC<ICardHeading> = (props) => {
  return (
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">{props.title}</span>
      <Link href="/" className="text-blue-500 text-sx">
        See All
      </Link>
    </div>
  );
};

export default CardHeading;
