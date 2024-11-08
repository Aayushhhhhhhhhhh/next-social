"use client";
import { IEventCard, RequestWithUser } from "./EventCardTypes";
import React, { useOptimistic, useState } from "react";
import Image from "next/image";
import { acceptDeclineFollowRequest } from "@/lib/actions";
import CardHeading from "../CardHeading/CardHeading";
const EventCard: React.FC<IEventCard> = (props) => {
  const handleAcceptDeclineClick = async (
    requestId: number,
    requests: RequestWithUser[] | undefined,
    index: number,
    accept: boolean
  ) => {
    setOptimisticRequestList(requestId);
    try {
      await acceptDeclineFollowRequest(
        (requests ?? [])[index]?.sender.id,
        accept
      );
      setRequestList((prev) => prev?.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [requestList, setRequestList] = useState(props.requests);
  const [optimisticRequestList, setOptimisticRequestList] = useOptimistic(
    requestList,
    (state, value: number) =>
      state?.filter((friendReq) => friendReq?.id !== value)
  );
  return (
    <div className="text-sm flex flex-col gap-4">
      {/* top */}
      {/* <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">{props.eventName}</span>
        <Link href="/" className="text-blue-500 text-sm">
          See all
        </Link>
      </div> */}

      <CardHeading
        currentUserId={props.currentUserId}
        user={props.user}
        title={props.eventName}
      />

      {/* bottom meaning user*/}
      {optimisticRequestList?.map((request, index) => (
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
                  handleAcceptDeclineClick(
                    props.requests?.[index].id as number,
                    props?.requests,
                    index,
                    true
                  )
                }
              />
              <Image
                src="/reject.png"
                alt="user"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                width={10}
                height={10}
                onClick={() =>
                  handleAcceptDeclineClick(
                    props.requests?.[index].id as number,
                    props?.requests,
                    index,
                    false
                  )
                }
              />
            </div>
          ) : (
            <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
              Celebrate
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventCard;
