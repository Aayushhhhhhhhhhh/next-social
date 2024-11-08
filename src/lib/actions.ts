"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";

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

export const updateProfile = async (formData: FormData) => {
  const fields = Object.fromEntries(formData);

  const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([key, value]) => value !== "")
  );
  console.log(fields);
  const Profile = z.object({
    cover: z.string().max(60).optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
    city: z.string().max(60).optional(),
  });

  const validateResult = Profile.safeParse(filteredFields);

  if (!validateResult.success) {
    return "validation of input fields failed";
  }

  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    return "user to be updated does not exists";
  }

  try {
    await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: validateResult.data,
    });
  } catch (error) {
    console.log(error);
  }
};
