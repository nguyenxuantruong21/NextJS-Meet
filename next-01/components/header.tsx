"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <header className="px-72">
      <ul className="flex items-center justify-end gap-8 text-xl font-bold">
        <Link
          href="/"
          className={cn(
            "hover:text-zinc-600",
            currentPath === "/" && "text-red-400"
          )}
        >
          <IoHome />
        </Link>
        <Link
          href="/blogs"
          className={cn(
            "hover:text-zinc-600",
            currentPath === "/blogs" && "text-red-400"
          )}
        >
          Blogs
        </Link>
        <Link
          href="/works"
          className={cn(
            "hover:text-zinc-600",
            currentPath === "/works" && "text-red-400"
          )}
        >
          Works
        </Link>
        <Link
          href="/contact"
          className={cn(
            "hover:text-zinc-600",
            currentPath === "/contact" && "text-red-400"
          )}
        >
          Contact
        </Link>
      </ul>
    </header>
  );
};

export default Header;
