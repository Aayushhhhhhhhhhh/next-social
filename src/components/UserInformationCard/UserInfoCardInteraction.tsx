"use client";
import React, { useState } from "react";
import { IUserInfoCardInteractions } from "./UserInfoCardInteractionTypes";
import { checkFollowingState } from "@/lib/actions";

const UserInfoCardInteraction: React.FC<IUserInfoCardInteractions> = (
  props
) => {
  const handleFormSubmit = async () => {
    console.log("formsubmit called");
    try {
      await checkFollowingState(props.userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequest: !prev.following && !prev.followRequest ? true : false,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const [userState, setUserState] = useState({
    following: props.doIFollow,
    blocked: false,
    followRequest: props.isFollowRequestSent,
  });

  console.log("userState", userState);

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
