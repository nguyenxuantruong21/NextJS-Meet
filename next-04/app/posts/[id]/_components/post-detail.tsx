"use client";

import useSWR from "swr";

interface PostDetailProps {
  id: number;
}

const getPost = async (id: number) => {
  const response = await fetch(`${process.env.SERVER_API}/posts/${id}`);
  if (!response.ok) {
    throw new Error("Fetch to faied /posts/" + id);
  }
  return response.json();
};

const PostDetail = ({ id }: PostDetailProps) => {
  const {
    data: postDetail,
    error,
    isLoading,
  } = useSWR(`/post/${id}`, () => getPost(id));

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h1>{postDetail.title}</h1>
          <p>{postDetail.body}</p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
