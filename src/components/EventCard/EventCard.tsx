"use client";
import { IEventCard, RequestWithUser } from "./EventCardTypes";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { acceptDeclineFollowRequest } from "@/lib/actions";
const EventCard: React.FC<IEventCard> = (props) => {
  const handleAcceptDeclineClick = async (
    requests: RequestWithUser[] | undefined,
    index: number,
    accept: boolean
  ) => {
    await acceptDeclineFollowRequest(
      (requests ?? [])[index]?.sender.id,
      accept
    );
  };
  return (
    <div className="text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">{props.eventName}</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div>

      {/* bottom meaning user*/}
      {props.requests && props.requests?.length > 0 ? (
        props.requests?.map((request, index) => (
          <div key={request.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={request.sender.avatar || "/noCover.png"}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <span className="font-semibold">{request.sender.username}</span>
            </div>

            {/* <EventCardInteraction eventName={props.eventName} /> */}

            {props.eventName === "Friend Requests" ? (
              <div className="flex gap-3 justify-end">
                <Image
                  src="/accept.png"
                  alt="accept request"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  width={20}
                  height={20}
                  onClick={() =>
                    handleAcceptDeclineClick(props?.requests, index, true)
                  }
                />
                <Image
                  src="/reject.png"
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  width={10}
                  height={10}
                  onClick={() =>
                    handleAcceptDeclineClick(props?.requests, index, false)
                  }
                />
              </div>
            ) : (
              <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                Celebrate
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No Pending requests</p>
      )}
    </div>
  );
};

export default EventCard;
