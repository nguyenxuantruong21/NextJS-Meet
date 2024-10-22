import { cn } from "@/lib/utils";
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
    <div className={cn("w-full bg-cyan-50 sm:px-72 sm:py-6 py-2")}>
      <div
        className={cn(
          "flex items-center justify-center pb-2 sm:justify-between"
        )}
      >
        <button className={cn("text-zinc-700 text-lg font-medium")}>
          Recent posts
        </button>
        <button className="hidden sm:block text-cyan-700">View all</button>
      </div>
      <div
        className={cn(
          "flex flex-col gap-3",
          "sm:grid sm:grid-cols-2 gap-6 justify-center items-center max-w-screen-lg mx-auto"
        )}
      >
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
