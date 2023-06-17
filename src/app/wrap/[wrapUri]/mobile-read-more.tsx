"use client";

import { PropsWithChildren, useState } from "react";
import CaretDown from "@/assets/icons/caret-down.svg";
import CaretUp from "@/assets/icons/caret-up.svg";

export default function MobileReadMore(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-6">
      <div
        className="cursor-pointer text-polywrap-gray-200 hover:underline"
        onClick={handleClick}
      >
        {isOpen ? (
          <div className="flex items-center gap-2">
            <span>View less</span>
            <CaretUp className="h-4 w-4"></CaretUp>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span>View more</span>
            <CaretDown className="h-4 w-4"></CaretDown>
          </div>
        )}
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>{props.children}</div>
    </div>
  );
}
