"use client";

import { createTodo } from "../action";

const TodoAdd = () => {
  return (
    <form
      action={async (formData: FormData) => {
        const response = await createTodo(formData);
        console.log(response);
      }}
    >
      <input type="text" name="title" placeholder="add todo..." />
      <button>Add</button>
    </form>
  );
};

export default TodoAdd;
