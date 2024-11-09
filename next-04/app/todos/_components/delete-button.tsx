"use client";

import { deleteTodo } from "../action";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <form
      style={{ display: "inline-block" }}
      action={async (formData: FormData) => {
        formData.append("id", String(id));
        const { success } = await deleteTodo(formData);
        if (success) {
        }
      }}
    >
      <button>delete</button>
    </form>
  );
};

export default DeleteButton;
