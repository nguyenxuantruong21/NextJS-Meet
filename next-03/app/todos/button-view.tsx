"use client";

import { useRouter } from "next/navigation";

export default function ButtonView({ id }: { id: number }) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/todos/${id}`);
  };
  return (
    <button onClick={handleRedirect} className="px-1 border-2 border-white">
      View
    </button>
  );
}
