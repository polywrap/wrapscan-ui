"use client";

import { PropsWithChildren, useState } from "react";

export default function MobileReadMore(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-6">
      <div
        className="cursor-pointer hover:underline text-polywrap-gray-200"
        onClick={handleClick}
      >
        {isOpen ? <span>View less</span> : <span>View more</span>}
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>{props.children}</div>
    </div>
  );
}
