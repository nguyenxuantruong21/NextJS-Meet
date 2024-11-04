import React from "react";
import UserImage from "./user-images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Information = () => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse items-center justify-center gap-4 pt-8",
        "sm:px-72 sm:flex-row sm:items-center sm:justify-between w-full sm:pt-20 pb-10"
      )}
    >
      <div className="w-full flex flex-col px-5">
        <span className="text-4xl font-bold text-center sm:text-left">
          Hi, I am Johm
        </span>
        <span className="text-4xl font-bold sm:mt-5 text-center sm:text-left">
          Creative Teachnologist
        </span>
        <span className="mt-5 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
          impedit accusamus iure natus eligendi dignissimos! Voluptatum sapiente
          officia eaque sunt. Nihil repudiandae necessitatibus quidem dolore
          animi commodi minima corporis?
        </span>
        <Button className="bg-red-400 w-52 h-10 text-lg mt-6 mx-auto sm:mx-0">
          Download Resume
        </Button>
      </div>
      <div>
        <UserImage />
      </div>
    </div>
  );
};

export default Information;
