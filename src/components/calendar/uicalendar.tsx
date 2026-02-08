"use client";

import * as React from "react";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "../calendar/Calendar";
import "react-day-picker/dist/style.css";
//import CalendarDay from "@/components/calendar/month/calendarday";
//import CalendarTop from "@/components/calendar/month/calendartop";
//import UpcomingEvents from "../calendar/upcomingevents/upcomingevents";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
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

  return (
    <div className="flex flex-col">
      {/* <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      /> */}
      <DayPicker
  month={currentDate}
  showOutsideDays={showOutsideDays}
  onMonthChange={setCurrentDate}
  formatters={{
    formatWeekdayName: (date) => {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[date.getDay()];
    },
    formatCaption: () => "",
  }}
  className={`${className} pb-8`}
  classNames={{
    months: "",
    month: "",
    caption: "",
    caption_label: "",
    nav: "space-x-8",
    nav_button: "",
    nav_button_previous: "hidden",
    nav_button_next: "hidden",
    table: "w-full space-y-1",
    head_row:
      "border border-enviro-blue-100 flex mt-20 w-full rounded-t-xl text-center items-center justify-center grid grid-cols-7",
    head_cell:
      "text-white bg-enviro-blue-100 text-5xl",
    row: "grid grid-cols-7",
    cell:
      "bg-enviro-green-50 border border-enviro-blue-100 h-[15vh] md:h-[20vh]",
    day: "",
    day_range_end: "",
    day_selected: "",
    day_outside: "",
    day_disabled: "",
    day_range_middle: "",
    day_hidden: "",
    ...classNames,
  }}
  components={{
    Chevron: ({ orientation }) =>
      orientation === "left" ? (
        <button type="button" onClick={prevMonth}>
          <RiArrowLeftFill />
        </button>
      ) : (
        <button type="button" onClick={nextMonth}>
          <RiArrowRightFill />
        </button>
      ),
  }}
  {...props}
/>

    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };