import React from "react";
import UserImage from "./user-images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Infomation = () => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse items-center justify-center gap-4 pt-8",
        "sm:px-72 sm:flex sm:items-center sm:justify-between w-full sm:pt-32 pb-10"
      )}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">Hi, I am Johm</span>
        <span className="text-4xl font-bold mt-5 px-4 text-center">
          Creative Teachnologist
        </span>
        <span className="mt-5 max-w-[700px] px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
          impedit accusamus iure natus eligendi dignissimos! Voluptatum sapiente
          officia eaque sunt. Nihil repudiandae necessitatibus quidem dolore
          animi commodi minima corporis?
        </span>
        <Button className="bg-red-400 w-52 h-10 text-lg mt-6">
          Download Resume
        </Button>
      </div>
      <div>
        <UserImage />
      </div>
    </div>
  );
};

export default Infomation;
