"use client";

import { useRouter } from "next/navigation";

interface EditButtonProps {
  id: number;
}

const EditButton = ({ id }: EditButtonProps) => {
  const router = useRouter();
  const handleEditTodo = () => {
    router.push(`/todos/edit/${id}`);
  };
  return <button onClick={handleEditTodo}>Edit</button>;
};

export default EditButton;
