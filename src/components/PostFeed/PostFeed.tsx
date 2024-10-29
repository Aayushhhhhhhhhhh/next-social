import React from "react";
import Post from "../Post/Post";
import Comments from "../Comments/Comments";

const PostFeed = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col gap-12">
      <Post
        showImage={true}
        postImgUrl={
          "https://images.pexels.com/photos/28158791/pexels-photo-28158791/free-photo-of-a-snowy-mountain-road-with-a-village-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        profileImgUrl={
          "https://images.pexels.com/photos/28960478/pexels-photo-28960478/free-photo-of-scenic-lighthouse-on-rocky-coastal-path.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
        userName={"Aayush"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi consequatur ratione voluptatem fugit assumenda hic enim ad obcaecati voluptas, recusandae quidem sapiente harum necessitatibus voluptatibus quam at, iste eos."
        }
        showPostInteraction={true}
      />
      <Comments />
    </div>
  );
};

export default PostFeed;
