import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureItemProps {
  image: string;
  name: string;
  created: number;
  category: string;
  contents: string;
}

const FeatureItem = ({
  category,
  contents,
  created,
  image,
  name,
}: FeatureItemProps) => {
  return (
    <div className="w-full">
      <div className={cn("sm:flex sm:gap-4")}>
        <div className="w-fit relative rounded-md">
          <Image
            className="object-cover rounded-md"
            src={image}
            alt="avatar"
            height={300}
            width={400}
          />
        </div>
        <div className="pt-2">
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

export default FeatureItem;
