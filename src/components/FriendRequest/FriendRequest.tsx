import React from "react";
import EventCard from "../EventCard/EventCard";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

const FriendRequest = async () => {
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

  console.log("requests", requests);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <EventCard requests={requests} eventName="Friend Requests" />
    </div>
  );
};

export default FriendRequest;
