"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "@/components/calendar/Calendar";
import { CalendarTop } from "@/components/calendar/CalendarParts";
import "react-day-picker/dist/style.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({ className, classNames }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());

  return (
    <div className="mb-10 h-full w-2/3">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <div className="bg-enviro-blue-100 h-full rounded-3xl px-6 pb-5">
        <DayPicker
          month={currentDate}
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          showOutsideDays={true}
          onMonthChange={setCurrentDate}
          disableNavigation
          formatters={{
            formatWeekdayName: (date) => {
              const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
              return days[date.getDay()];
            },
            formatCaption: () => "",
          }}
          className={`${className ?? ""}`}
          classNames={{
            months: "",
            month: "flex flex-col w-full h-full",
            today: "",

            month_grid: "h-full",

            weekdays:
              "grid grid-cols-7 bg-enviro-green-200 text-white text-4xl font-enviro-open-sans",

            week: "grid grid-cols-7",

            nav: "hidden",

            day: "border border-width-2 border-enviro-green-100 bg-enviro-gray-100 h-35 flex justify-end font-enviro-open-sans text-4xl",
            range_end: "",
            selected: "opacity-60",
            outside: "text-gray-500",
            disabled: "",
            range_middle: "",

            ...classNames,
          }}
        />
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
