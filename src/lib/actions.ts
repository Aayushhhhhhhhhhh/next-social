"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const checkFollowingState = async (userId: string) => {
  console.log("inside toggle button");
  let doIFollow = false;
  let isFollowRequestSent = false;
  const { userId: currentUserId } = await auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  console.log("after alreadyFollowerResponse");

  try {
    const alreadyFollowerResponse = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if (alreadyFollowerResponse) {
      await prisma.follower.delete({
        where: {
          id: alreadyFollowerResponse?.id,
        },
      });
      doIFollow = true;
      return { doIFollow, isFollowRequestSent };
    }

    const followRequestSentResponse = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        recieverId: userId,
      },
    });

    if (followRequestSentResponse) {
      await prisma.followRequest.delete({
        where: {
          id: followRequestSentResponse?.id,
        },
      });
      isFollowRequestSent = true;
      return { doIFollow, isFollowRequestSent };
    }

    console.log("before createResponse");
    const createResponse = await prisma.followRequest.create({
      data: {
        senderId: currentUserId,
        recieverId: userId,
      },
    });
    return { doIFollow, isFollowRequestSent };
  } catch (error) {
    console.error(error);
    return { doIFollow: false, isFollowRequestSent: false };
  }
};

export const acceptDeclineFollowRequest = async (
  userId: string,
  accept: boolean = false
) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) throw new Error("User not authenticated");

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        recieverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest?.id,
        },
      });
    }

    if (accept) {
      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
