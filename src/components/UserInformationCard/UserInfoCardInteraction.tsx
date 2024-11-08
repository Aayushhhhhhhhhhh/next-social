"use client";
import React, { useOptimistic, useState } from "react";
import { IUserInfoCardInteractions } from "./UserInfoCardInteractionTypes";
import { checkFollowingState } from "@/lib/actions";

const UserInfoCardInteraction: React.FC<IUserInfoCardInteractions> = (
  props
) => {
  const handleFormSubmit = async () => {
    setOptimisticState("");
    try {
      await checkFollowingState(props.userId, true);
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

  const [optimisticState, setOptimisticState] = useOptimistic(
    userState,
    (state) => ({
      ...state,
      following: state.following && false,
      followRequest: !state.following && !state.followRequest ? true : false,
    })
  );

  return (
    <>
      <form action={handleFormSubmit}>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full rounded-md p-2 text-sm"
        >
          {optimisticState.following
            ? "Following"
            : optimisticState.followRequest
            ? "Request sent"
            : "Follow"}
        </button>
      </form>

      <form action="">
        {!optimisticState.blocked && (
          <span className="text-red-400 self-end text-xs cursor-pointer">
            Block User
          </span>
        )}
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
