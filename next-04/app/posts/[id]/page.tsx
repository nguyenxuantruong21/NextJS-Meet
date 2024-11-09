import PostDetail from "./_components/post-detail";

const PostDetailPage = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  return (
    <div>
      <PostDetail id={id} />
    </div>
  );
};

export default PostDetailPage;
