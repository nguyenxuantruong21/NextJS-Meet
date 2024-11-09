"use client";

import { mutate } from "swr";
import React, { FormEvent } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostAdd: React.FC = () => {
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    const response = await fetch(`${process.env.SERVER_API}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      e.currentTarget.reset();
      const data: Post = await response.json();
      mutate(
        `/posts`,
        (prevPosts: Post[] = []) => {
          return [...prevPosts, data];
        },
        {
          revalidate: true,
        }
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <input type="text" name="title" placeholder="Title..." required />
        </div>
        <div>
          <textarea name="body" placeholder="Content..."></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PostAdd;
