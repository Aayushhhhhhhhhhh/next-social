import { IEventCard } from "./EventCardTypes";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { requestsProfile } from "@/constants";

const EventCard: React.FC<IEventCard> = (props) => {
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
      {requestsProfile.map((profile) => (
        <div key={profile.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={profile.requestProfileImg}
              alt="user"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            <span className="font-semibold">{profile.requestProfileName}</span>
          </div>

          {props.eventName === "Friend Requests" ? (
            <div className="flex gap-3 justify-end">
              <Image
                src="/accept.png"
                alt="accept request"
                className="w-10 h-10 rounded-full object-cover"
                width={20}
                height={20}
              />
              <Image
                src="/reject.png"
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
                width={10}
                height={10}
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
