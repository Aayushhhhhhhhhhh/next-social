import React, { Suspense } from "react";
import { IRightMenu } from "./RightMenuTypes";
import FriendRequest from "../FriendRequest/FriendRequest";
import Birthdays from "../Birthdays/Birthdays";
import Advertisement from "../Advertisement/Advertisement";
import UserInformationCard from "../UserInformationCard/UserInformationCard";
import UserMediaCard from "../UserMediaCard/UserMediaCard";

const RightMenu: React.FC<IRightMenu> = (props) => {
  return (
    <div className="flex flex-col gap-6">
      {props.user ? (
        <>
          <Suspense fallback="loading.....">
            <UserInformationCard user={props.user} />
          </Suspense>

          <Suspense fallback="loading.....">
            <UserMediaCard user={props.user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequest user={props.user} />
      <Birthdays />
      <Advertisement size="md" />
    </div>
  );
};

export default RightMenu;
