import FeaturedList from "./_components/featured-list";
import Infomation from "./_components/infomation";
import PostLists from "./_components/post-list";

const HomePage = () => {
  return (
    <>
      <Infomation />
      <PostLists />
      <FeaturedList />
    </>
  );
};

export default HomePage;
