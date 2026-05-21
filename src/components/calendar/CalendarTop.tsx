"use client";

import LeftArrow from "@/public/Events/LeftArrow.webp";
import RightArrow from "@/public/Events/RightArrow.webp";
import Image from "next/image";

export function CalendarTop({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) {
  return (
    <div className="mb-6 flex items-center justify-center space-x-5">
      <button
        type="button"
        onClick={onPrevMonth}
        className="cursor-pointer hover:opacity-80"
      >
        <Image src={LeftArrow} alt="Prev month" className="w-5 md:w-10" />
      </button>

      <div className="font-enviro-open-sans text-xl uppercase md:text-4xl">
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </div>

      <button
        type="button"
        onClick={onNextMonth}
        className="cursor-pointer hover:opacity-80"
      >
        <Image src={RightArrow} alt="Next month" className="w-5 md:w-10" />
      </button>
    </div>
  );
}
