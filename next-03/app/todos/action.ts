/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
export const createTodo = async (formData: FormData) => {
  const title = formData.get("title");
  return {
    success: false,
    msg: "Error with validation",
  };
};
