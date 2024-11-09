"use server";

import { revalidateTag } from "next/cache";

export const updateTodo = async (formData: FormData) => {
  const title = formData.get("title");
  const id = formData.get("id");

  if (!title) {
    return {
      success: false,
      msg: "Vui lòng điền đầy đủ các trường",
    };
  }

  const response = await fetch(`${process.env.SERVER_API}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    return {
      success: false,
      message: response.statusText,
    };
  }
  revalidateTag("todo-list");
  revalidateTag(`todo-${id}`);
  return true;
};
