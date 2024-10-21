interface PostItemProps {
  name: string;
  created: string;
  title: string;
  content: string;
}
const PostItem = ({ content, created, name, title }: PostItemProps) => {
  return (
    <div className="w-96 bg-white p-6 shadow-md rounded-md cursor-pointer">
      <span className="text-xl font-bold">{name}</span>
      <div className="flex gap-7 mt-3">
        <div>{created}</div>
        <div className="w-[2px] h-6 bg-zinc-600" />
        <div>{title}</div>
      </div>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default PostItem;
