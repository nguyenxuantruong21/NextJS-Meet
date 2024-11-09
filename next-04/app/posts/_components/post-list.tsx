/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import useSWR from "swr";

const getPost = async () => {
  const response = await fetch(`${process.env.SERVER_API}/posts`);
  if (!response.ok) {
    throw new Error("Fetch to faied /posts");
  }
  return response.json();
};

const PostList = () => {
  const {
    data: postList,
    error,
    isLoading,
  } = useSWR("/posts", getPost, {
    fallbackData: [],
  });

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        postList.map((post: any) => (
          <h3 key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
        ))
      )}
    </div>
  );
};

export default PostList;
