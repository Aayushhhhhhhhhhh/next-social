import Link from "next/link";
import Image from "next/image";
import React from "react";
import CardHeading from "../CardHeading/CardHeading";
import { User } from "@prisma/client";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
const UserInformationCard = async ({ user }: { user: User }) => {
  const date = new Date(user?.createdAt);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <section className="p-4 gap-4 bg-white orunded-lg shadow-md flex flex-col text-sm font-medium">
      <CardHeading title={"UserInformation"} />

      <div className="flex items-center gap-2">
        <span className="text-xl text-black">
          {user?.name && user?.surname
            ? user.name + " " + user?.surname
            : user?.username}{" "}
        </span>
        <span className="text-sm">@{user.username}</span>
      </div>

      {user?.description && <p className="text-sm">{user?.description}</p>}

      {user?.city && (
        <div className="flex gap-2 justify-start items-center">
          <Image src="/city.png" alt="image" height={16} width={16} />
          <span className="text-gray-500">{user?.city}</span>
        </div>
      )}

      {user?.work && (
        <div className="flex gap-2 justify-start items-center">
          <Image src="/work.png" alt="image" height={16} width={16} />
          <span className="text-gray-500">{user?.work}</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        {user?.website && (
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="https://aayush" className="text-blue-500 font-medium">
              {user?.name ? user?.name : user?.username}
            </Link>
          </div>
        )}

        {user?.createdAt && (
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>{formattedDate}</span>
          </div>
        )}
      </div>

      <UserInfoCardInteraction userId={user.id} />
    </section>
  );
};

export default UserInformationCard;
