import React from "react";
import EventCard from "../EventCard/EventCard";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import { User } from "@prisma/client";

const FriendRequest = async ({ user }: { user: User }) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      recieverId: currentUserId,
    },
    include: {
      sender: true,
    },
  });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <EventCard
        currentUserId={currentUserId}
        user={user}
        requests={requests}
        eventName="Friend Requests"
      />
    </div>
  );
};

export default FriendRequest;
