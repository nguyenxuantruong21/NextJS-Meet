"use client";

import { useRouter } from "next/navigation";

const TodoAdd = () => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const body = { title };

    if (!title) {
      alert("Vui long nhap title");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (response.ok) {
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        className="text-black"
      />
      <button className="ml-6 px-2 border-2 border-white" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoAdd;
