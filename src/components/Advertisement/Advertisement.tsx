import React from "react";
import Image from "next/image";
import { IAdvertisement } from "./AdvertisementTypes";

const Advertisement = (props: IAdvertisement) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}
      <div className="flex flex-col gap-4 justify-center text-gray-500 font-medium">
        <div className="flex justify-between">
          <span>Sponsor Ads</span>
          <Image src="/more.png" alt="lighhouse" height={16} width={16} />
        </div>

        <div
          className={`flex flex-col mt-4 ${
            props.size === "sm" ? "gap-2" : "gap-4"
          }`}
        >
          <div
            className={`relative w-full ${
              props.size === "sm"
                ? "h-24"
                : props.size === "md"
                ? "h-36"
                : "h-48"
            }`}
          >
            <Image
              src="https://images.pexels.com/photos/28665515/pexels-photo-28665515/free-photo-of-hamburg-urban-train-station-architectural-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Sponsored Ad"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center gap-4 justify-start">
            <Image
              src="https://images.pexels.com/photos/28665515/pexels-photo-28665515/free-photo-of-hamburg-urban-train-station-architectural-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Sponsored Ad"
              height={24}
              width={24}
              className="rounded-full w-6 h-6 object-cover"
            />
            <span className="font-medium text-blue-500">Company name</span>
          </div>

          <p className={`${props.size === "sm" ? "text-xs" : "text-sm"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
            consectetur, quibusdam molestiae autem blanditiis enim unde culpa,
            explicabo adipisci hic delectus, numquam fugit. Provident fugiat
            dicta voluptatibus repellat? Sed.
          </p>

          <button className="bg-gray-200 text-xs text-gray-500 rounded-lg p-2 w-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
