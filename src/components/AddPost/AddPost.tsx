import React from "react";
import Image from "next/image";
import { posts } from "@/constants";
import { IAddPost } from "./AddPostTypes";

const AddPost: React.FC<IAddPost> = (props) => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/28973930/pexels-photo-28973930/free-photo-of-historic-saigon-central-post-office-architecture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex flex-col flex-1">
        {/* TEXTAREA */}
        <form className="flex gap-4 ">
          <textarea
            placeholder={props.placeholder}
            name=""
            id=""
            className="rounded-lg bg-slate-100 flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="avatar"
            width={20}
            height={20}
            className="w-12 h-12 object-cover rounded-full cursor-pointer self-end"
          />
        </form>

        {/* POST OPTIONS */}
        {props.postOptions && (
          <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            {posts.map((post) => (
              <div
                key={post.postText}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Image src={post.postUrl} alt="avatar" width={20} height={20} />
                <span>{post.postText}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPost;
