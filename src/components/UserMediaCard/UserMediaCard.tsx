import React from "react";
import CardHeading from "../CardHeading/CardHeading";
import Image from "next/image";
import { User } from "@prisma/client";
import prisma from "@/lib/client";
import { Post } from "@prisma/client";

const UserMediaCard = async ({ user }: { user: User }) => {
  const userPosts = await prisma.post.findMany({
    where: {
      userId: user?.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <section className="p-4 gap-4 bg-white orunded-lg shadow-md flex flex-col text-sm font-medium">
      <CardHeading title="User Media" />

      <div className="flex gap-4 justify-between flex-wrap">
        {userPosts.length > 0
          ? userPosts.map((post) => (
              <div key={post.id} className="relative w-1/5 h-24">
                <Image
                  src={post.img!}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            ))
          : "No Media Found"}
      </div>
    </section>
  );
};

export default UserMediaCard;
