import FeaturedList from "./_components/featured-list";
import Information from "./_components/infomation";
import PostLists from "./_components/post-list";

const HomePage = () => {
  return (
    <>
      <Information />
      <PostLists />
      <FeaturedList />
    </>
  );
};

export default HomePage;
