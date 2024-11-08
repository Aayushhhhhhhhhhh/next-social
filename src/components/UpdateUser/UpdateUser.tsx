"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IUpdateUser } from "./UpdateUserTypes";
import { updateProfile } from "@/lib/actions";
import { CldUploadWidget } from "next-cloudinary";

const UpdateUser: React.FC<IUpdateUser> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Update
      </span>

      {isOpen && (
        <div className="absolute bg-black bg-opacity-65 h-screen w-screen top-0 left-0 z-50 flex items-center justify-center">
          <form
            action={updateProfile}
            className="relative p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3"
          >
            <h1>Update Profile</h1>
            <div className="mt-4 text-gray-400 text-xs">
              Use the navbar profile to change tha navabar or username
            </div>

            {/* Uploading Cover Image */}
            <CldUploadWidget uploadPreset="<Your Upload Preset>">
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={props.user?.cover || "/noCover.png"}
                        width={48}
                        height={32}
                        alt="cover picture"
                        className="h-8 w-12 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-400">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* Wrapper Div for all the input fields */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              {/* INPUT Fields for the form */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-x text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder={props.user?.name || "Aayush"}
                  className="ring-1 ring-ray-300 rounded-md text-sm p-2"
                  name="name"
                />
              </div>

              {/* INPUT Fields for the form */}

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-x text-gray-500">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder={props.user?.surname || "Ojha"}
                  className="ring-1 ring-ray-300 rounded-md text-sm p-2"
                  name="surname"
                />
              </div>

              {/* INPUT Fields for the form */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-x text-gray-500">
                  Description
                </label>
                <input
                  type="text"
                  placeholder={
                    props.user?.description ||
                    "Hello I am aayush, trying everyday"
                  }
                  className="ring-1 ring-ray-300 rounded-md text-sm p-2"
                  name="description"
                />
              </div>

              {/* INPUT Fields for the form */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-x text-gray-500">
                  Work
                </label>
                <input
                  type="text"
                  placeholder={props.user?.work || "Web Developer"}
                  className="ring-1 ring-ray-300 rounded-md text-sm p-2"
                  name="work"
                />
              </div>

              {/* INPUT Fields for the form */}
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-x text-gray-500">
                  Website
                </label>
                <input
                  type="text"
                  placeholder={props.user?.website || "https://www.google.com"}
                  className="ring-1 ring-ray-300 rounded-md text-sm p-2"
                  name="webiste"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-x text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  placeholder={props.user?.website || "https://www.google.com"}
                  className="ring-1 ring-ray-300 rounded-md text-sm p-2"
                  name="city"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 mt-2"
            >
              Update
            </button>
            <div
              className="absolute right-2 top-3 cursor-pointer text-xl"
              onClick={handleClose}
            >
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
