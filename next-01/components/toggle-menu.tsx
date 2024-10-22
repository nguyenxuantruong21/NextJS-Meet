import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IoHome } from "react-icons/io5";

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sm:hidden flex flex-col relative">
      <div
        onClick={handleToggle}
        className="flex items-center justify-end mt-2 "
      >
        <AlignJustify />
      </div>
      {open && (
        <div
          className={cn(
            "absolute w-52 bg-slate-200 top-10 right-0 z-20 rounded-lg py-2 px-",
            "flex flex-col items-center justify-center gap-3"
          )}
        >
          <Link href="/" className={cn("hover:text-red-500")}>
            <IoHome />
          </Link>
          <Link href="/blogs" className={cn("hover:text-red-500")}>
            Blogs
          </Link>
          <Link href="/works" className={cn("hover:text-red-500")}>
            Works
          </Link>
          <Link href="/contact" className={cn("hover:text-red-500")}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
