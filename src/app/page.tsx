import AddPost from "@/components/AddPost/AddPost";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import PostFeed from "@/components/PostFeed/PostFeed";
import RightMenu from "@/components/RightMenu/RightMenu";
import Stories from "@/components/Stories/Stories";

const Homepage = () => {
  return (
    <section className="flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost placeholder={"What's on your mind"} postOptions={true} />
          <PostFeed />
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </section>
  );
};

export default Homepage;
