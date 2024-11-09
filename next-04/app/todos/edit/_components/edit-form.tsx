"use client";

import { updateTodo } from "../[id]/action";

interface EditFormProps {
  todo: { id: number; title: string };
}

const EditForm = ({ todo }: EditFormProps) => {
  return (
    <form
      action={async (formData: FormData) => {
        formData.append("id", String(todo.id));
        const response = await updateTodo(formData);
        console.log(response);
      }}
    >
      <input type="text" name="title" defaultValue={todo.title} />
      <button>Edit</button>
    </form>
  );
};

export default EditForm;
