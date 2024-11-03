"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const toggleFollowButton = async (userId: string) => {
  const { userId: currentUserId } = await auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

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
    return;
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
    return;
  }

  await prisma.followRequest.create({
    data: {
      senderId: currentUserId,
      recieverId: userId,
    },
  });

  // if (doIFollow) {
  //   await prisma.follower.delete({
  //     where: {
  //       id: followingResponse?.id,
  //     },
  //   });
  // } else {
  //   if (isRequestSent) {
  //     await prisma.followRequest.delete({
  //       where: {
  //         id: followRequestResponse?.id,
  //       },
  //     });
  //   } else {
  //     const created = await prisma.followRequest.create({
  //       data: {
  //         senderId: currentUserId,
  //         recieverId: userId,
  //       },
  //     });

  //     console.log("created", created);
  //   }
  // }
};
