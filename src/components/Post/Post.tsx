import React from "react";
import Image from "next/image";
import { postInteraction } from "@/constants";
import { IPost } from "./PostTypes";

const Post: React.FC<IPost> = (props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={props.profileImgUrl}
            alt="lighhouse"
            height={40}
            width={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{props.userName}</span>
        </div>
        <Image src="/more.png" alt="lighhouse" height={16} width={16} />
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        {/* <div className="w-full min-h-96 relative"> */}
        {props.showImage && (
          <Image
            src={props.postImgUrl}
            alt="lighhouse"
            height={384}
            width={384}
            className="w-full min-h-96 object-cover rounded-md"
          />
        )}

        <p>{props.description}</p>
        {/* </div> */}
      </div>
      {/* interaction */}
      {props.showPostInteraction && (
        <div className="flex justify-between items-center text-sm my-4">
          {/* left */}
          <div className="flex gap-2">
            {postInteraction
              .filter((interaction) => interaction.interactionText != "Share")
              .map((action) => (
                <div
                  key={action.interactionText}
                  className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl"
                >
                  <Image
                    src={action.interactionUrl}
                    alt="lighhouse"
                    height={16}
                    width={16}
                    className="cursor-pointer"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-300">
                    {action.interactionCount}
                    <span className="hidden md:inline">
                      {action.interactionText}
                    </span>
                  </span>
                </div>
              ))}
          </div>

          {/* right */}
          {postInteraction
            .filter((interaction) => interaction.interactionText === "Share")
            .map((action) => (
              <div
                key={action.interactionText}
                className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl"
              >
                <Image
                  src={action.interactionUrl}
                  alt="lighhouse"
                  height={16}
                  width={16}
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-300">
                  {action.interactionCount}
                  <span className="hidden md:inline">
                    {action.interactionText}
                  </span>
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Post;
