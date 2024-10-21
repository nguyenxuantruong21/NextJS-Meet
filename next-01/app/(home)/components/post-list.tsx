import PostItem from "./post-item";

const POSTS = [
  {
    id: 1,
    name: "Making a design system from scratch",
    created: "12 Feb 2020",
    title: "Design, Patten",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ad
        nostrum minima enim odit cupiditate ea delectus, sed facere vero officia
        nihil eum dolorem explicabo cumque! Eveniet deserunt tenetur pariatur!`,
  },
  {
    id: 2,
    name: "Making a design system from scratch",
    created: "12 Feb 2020",
    title: "Design, Patten",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ad
        nostrum minima enim odit cupiditate ea delectus, sed facere vero officia
        nihil eum dolorem explicabo cumque! Eveniet deserunt tenetur pariatur!`,
  },
];

const PostLists = () => {
  return (
    <div className="w-full bg-cyan-50 px-72 py-6">
      <div className="flex items-center justify-between">
        <button className="text-zinc-700 text-lg font-medium">
          Recent posts
        </button>
        <button className="text-cyan-700">View all</button>
      </div>
      <div className="grid grid-cols-2 gap-6 justify-center items-center max-w-screen-lg mx-auto">
        {POSTS.map((post) => (
          <PostItem
            key={post.id}
            content={post.content}
            created={post.created}
            name={post.name}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default PostLists;
