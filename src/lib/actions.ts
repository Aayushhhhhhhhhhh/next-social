"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const checkFollowingState = async (userId: string, clicked: boolean) => {
  let doIFollow = false;
  let isFollowRequestSent = false;
  const { userId: currentUserId } = await auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const alreadyFollowerResponse = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    if (alreadyFollowerResponse) {
      clicked &&
        (await prisma.follower.delete({
          where: {
            id: alreadyFollowerResponse?.id,
          },
        }));
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
      console.log("????????????");
      clicked &&
        (await prisma.followRequest.delete({
          where: {
            id: followRequestSentResponse?.id,
          },
        }));
      isFollowRequestSent = true;
      return { doIFollow, isFollowRequestSent };
    }
    clicked &&
      (await prisma.followRequest.create({
        data: {
          senderId: currentUserId,
          recieverId: userId,
        },
      }));
    return { doIFollow, isFollowRequestSent };
  } catch (error) {
    console.error(error);
    throw new Error("Somethign went wrng");
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
