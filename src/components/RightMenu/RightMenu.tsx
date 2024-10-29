import React from "react";
import { IRightMenu } from "./RightMenuTypes";
import FriendRequest from "../FriendRequest/FriendRequest";
import Birthdays from "../Birthdays/Birthdays";
import Advertisement from "../Advertisement/Advertisement";

const RightMenu: React.FC<IRightMenu> = (props) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequest />
      <Birthdays />
      <Advertisement size={"md"} />
    </div>
  );
};

export default RightMenu;
