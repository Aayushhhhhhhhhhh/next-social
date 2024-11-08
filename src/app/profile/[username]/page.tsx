import LeftMenu from "@/components/LeftMenu/LeftMenu";
import PostFeed from "@/components/PostFeed/PostFeed";
import RightMenu from "@/components/RightMenu/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  console.log("username????", username);
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          post: true,
        },
      },
    },
  });

  console.log("user in profile page", user);

  if (!user) {
    return notFound();
  }

  const { userId: currentUserId } = await auth();

  let isBlocked;
  if (currentUserId) {
    const result = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: user?.id,
      },
    });
    if (result) isBlocked = true;
    else isBlocked = false;
  }

  if (isBlocked) return notFound();
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={user?.cover || "/noCover.png"}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={user?.avatar || "/noAvatar.png"}
                alt=""
                width={128}
                height={128}
                className="rounded-full object-cover w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
              />
            </div>
            <h1 className="text-2xl font-medium mt-20 mb-4">
              {user?.name && user?.surname
                ? user.name + " " + user?.surname
                : user?.username}{" "}
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span>{user?._count.post}</span>
                <span>Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{user?._count.followers}</span>
                <span>Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{user?._count.following}</span>
                <span>Following</span>
              </div>
            </div>
          </div>
          <PostFeed />
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
