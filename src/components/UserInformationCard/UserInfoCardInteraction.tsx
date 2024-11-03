"use client";
import React, { useEffect, useState } from "react";
import { IUserInfoCardInteractions } from "./UserInfoCardInteractionTypes";
import { toggleFollowButton } from "@/lib/actions";

const UserInfoCardInteraction: React.FC<IUserInfoCardInteractions> = (
  props
) => {
  const handleFormSubmit = async () => {
    setUserState((prev) => ({
      ...prev,
      following: prev.following && false,
      followRequest: !prev.following && !prev.followRequest ? true : false,
    }));

    await toggleFollowButton(props.userId);
  };

  const [userState, setUserState] = useState({
    following: false,
    blocked: false,
    followRequest: false,
  });

  return (
    <>
      <form action={handleFormSubmit}>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-md p-2 text-sm"
        >
          {userState.blocked
            ? "Unblock User"
            : userState.following
            ? "Following"
            : userState.followRequest
            ? "Request sent"
            : "Follow"}
        </button>
      </form>

      <form action="">
        {!userState.blocked && (
          <span className="text-red-400 self-end text-xs cursor-pointer">
            Block User
          </span>
        )}
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
