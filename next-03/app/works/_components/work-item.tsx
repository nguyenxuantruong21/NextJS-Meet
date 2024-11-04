"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface WorkItemProps {
  id: number;
  name: string;
  created: string;
  category: string;
  contents: string;
  image: string;
}

const WorkItem = ({
  category,
  contents,
  created,
  image,
  name,
  id,
}: WorkItemProps) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/works/${id}`);
  };

  return (
    <div
      className="w-full cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => handleClick(id)}
    >
      <div className="sm:flex gap-4">
        <div className="w-fit relative rounded-md">
          <Image
            className="object-cover rounded-md"
            src={image}
            alt="avatar"
            height={300}
            width={400}
          />
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold">{name}</span>
          <div className="mt-4 flex gap-3">
            <span className="px-4 bg-black text-white rounded-xl">
              {created}
            </span>
            <span className="text-zinc-500">{category}</span>
          </div>
          <div className="mt-4">{contents}</div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-zinc-300 mt-6" />
    </div>
  );
};

export default WorkItem;
