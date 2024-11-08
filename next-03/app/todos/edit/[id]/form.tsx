"use client";

import { useRouter } from "next/navigation";
import { TodoType } from "../../[id]/page";
import { clearCacheByTags } from "@/utils/cache";

interface FormUpdateProps {
  todo?: TodoType;
}

const FormUpdate = ({ todo }: FormUpdateProps) => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const body = { title };

    if (!title) {
      alert("Vui long nhap");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${todo?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (response.ok) {
      router.refresh();
      clearCacheByTags(`todo-detail-${todo?.id}`);
      clearCacheByTags(`todo-list`);
      alert("cap nhat thanh cong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        className="text-black"
        defaultValue={todo?.title}
      />
      <button className="ml-6 px-2 border-2 border-white" type="submit">
        Update
      </button>
    </form>
  );
};

export default FormUpdate;
