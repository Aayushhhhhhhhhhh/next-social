import React from "react";
import EventCard from "../EventCard/EventCard";
import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <EventCard eventName="Birthdays" />

      {/* upcoming birthday waali cheez */}
      <div className="rounded-lg flex items-center gap-4 bg-slate-100 shadow-md p-4">
        <Image src="/gift.png" alt="gift" width={24} height={24} />

        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500 whitespace-normal">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
