/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createTodo } from "./action";

const TodoAddTwo = () => {
  return (
    <form
      action={async (formData) => {
        const response = await createTodo(formData);
        console.log(response);
      }}
    >
      <input type="text" name="title" placeholder="Title..." />
      <button className="ml-6 px-2 border-2 border-white" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoAddTwo;
