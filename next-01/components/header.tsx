"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { useEffect, useState } from "react";
import ToggleMenu from "./toggle-menu";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <header className="w-full pt-2 px-6 sm:px-72">
      <ul
        className={cn(
          "sm:flex items-center justify-end gap-8 text-xl font-bold",
          "hidden"
        )}
      >
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
      <ToggleMenu />
    </header>
  );
};

export default Header;
