import AddPost from "@/components/AddPost";
import LeftMenu from "@/components/LeftMenu";
import PostFeed from "@/components/PostFeed";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

const Homepage = () => {
  return (
    <section className="flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
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
