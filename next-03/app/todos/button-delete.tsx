"use client";

import { clearCacheByPath } from "@/utils/cache";
import { useRouter } from "next/navigation";

export default function ButtonDelete({ id }: { id: number }) {
  const router = useRouter();
  const handleRemove = async () => {
    if (window.confirm("Chac chua")) {
      const respose = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (respose.ok) {
        router.refresh();
        clearCacheByPath("/todos");
      }
    }
  };
  return (
    <button onClick={handleRemove} className="px-1 border-2 border-white">
      Delete
    </button>
  );
}
