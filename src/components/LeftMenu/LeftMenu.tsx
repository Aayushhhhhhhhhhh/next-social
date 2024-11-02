import React from "react";
import { ILeftMenu } from "./LeftMenuTypes";
import ProfileCard from "../ProfileCard/ProfileCard";
import Link from "next/link";

const LeftMenu: React.FC<ILeftMenu> = (props) => {
  return (
    <div className="flex flex-col gap-6">
      {props.type === "home" && <ProfileCard />}
      <div className="bg-white rounded-lg shadow-md text-sm p-4 text-gray-500 flex flex-col gap-2">
        {/* <Link href={}></Link> */}
      </div>
    </div>
  );
};

export default LeftMenu;
