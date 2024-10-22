interface BlogItemProps {
  name: string;
  created: string;
  category: string;
  contents: string;
}

const BlogItem = ({ category, contents, created, name }: BlogItemProps) => {
  return (
    <div className="bg-zinc-100 p-10 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="text-2xl font-bold">{name}</div>
      <div className="mt-4 flex gap-3">
        <span>{created}</span>
        <div className="w-[1px] h-6 bg-zinc-600"></div>
        <span className="text-zinc-500">{category}</span>
      </div>
      <div className="mt-4">{contents}</div>
    </div>
  );
};

export default BlogItem;
