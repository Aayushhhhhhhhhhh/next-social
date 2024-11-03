import React from "react";
import CardHeading from "../CardHeading/CardHeading";
import Image from "next/image";
import { User } from "@prisma/client";

const UserMediaCard = ({ user }: { user: User }) => {
  return (
    <section className="p-4 gap-4 bg-white orunded-lg shadow-md flex flex-col text-sm font-medium">
      <CardHeading title="User Media" />

      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/3699654/pexels-photo-3699654.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* Add more divs here */}
      </div>
    </section>
  );
};

export default UserMediaCard;
