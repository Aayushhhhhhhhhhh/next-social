import React from "react";
import UpdateUser from "../UpdateUser/UpdateUser";
import { User } from "@prisma/client";

const CardHeading = ({
  title,
  user,
  currentUserId,
}: {
  title: string;
  user: User;
  currentUserId: string | null;
}) => {
  return (
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">{title}</span>
      <span className="text-blue-500 text-sx">
        {title === "UserInformation" && currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          "See All"
        )}
      </span>
    </div>
  );
};

export default CardHeading;
