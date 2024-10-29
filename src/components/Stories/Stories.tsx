import React from "react";
import Image from "next/image";
import { stories } from "@/constants";

const Stories = () => {
  return (
    <section className="p-4 bg-white rounded-lg shadow-mg overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        {stories.map((story) => (
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src={story.imgUrl}
              alt=""
              className="w-20 h-20 rounded-full ring-2"
              height={80}
              width={80}
            />
            <span>{story.imgText}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
