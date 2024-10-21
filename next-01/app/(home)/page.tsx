import FeaturedList from "./components/featured-list";
import Infomation from "./components/infomation";
import PostLists from "./components/post-list";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Infomation />
      <PostLists />
      <FeaturedList />
    </div>
  );
};

export default HomePage;
