/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { revalidateTag } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title");
  if (!title) {
    return {
      success: false,
      msg: "Vui lòng điền đầy đủ các trường",
    };
  }
  const response = await fetch(`${process.env.SERVER_API}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    return {
      success: false,
      msg: response.statusText,
    };
  }
  revalidateTag("todo-list");
  return {
    success: true,
  };
};

export const deleteTodo = async (formData: FormData) => {
  const id = formData.get("id");
  const response = await fetch(`${process.env.SERVER_API}/todos/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    revalidateTag("todo-list");
    revalidateTag(`todo-${id}`);
    return {
      success: true,
    };
  }
  return {
    success: false,
    message: response.statusText,
  };
};
