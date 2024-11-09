"use client";

import { useRouter } from "next/navigation";

interface ViewButtonProps {
  id: number;
}

const ViewButton = ({ id }: ViewButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/todos/${id}`);
  };
  return <button onClick={handleClick}>View</button>;
};

export default ViewButton;
