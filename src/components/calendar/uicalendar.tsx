"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "@/components/calendar/Calendar";
import { CalendarTop } from "@/components/calendar/CalendarTop";
import CalendarDay from "@/components/calendar/CalendarDay";
import { Day as DefaultDay } from "react-day-picker";
import "react-day-picker/dist/style.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({ className, classNames, events, ...props }: CalendarProps) {
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
    <div className="mb-10 h-full w-11/12 justify-center md:w-2/3">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <div className="bg-enviro-blue-100 h-full justify-center rounded-3xl px-3 pb-5 md:px-6">
        <DayPicker
          month={currentDate}
          mode="single"
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
            month: "flex flex-col w-full",
            today: "",

            month_grid: "-mt-6 md:-mt-4 h-full",

            weekdays:
              "grid grid-cols-7 bg-enviro-green-200 text-white text-xl md:text-4xl font-enviro-open-sans",

            week: "grid grid-cols-7",

            nav: "hidden",

            day: "border border-width-2 border-enviro-green-100 bg-enviro-gray-100 h-15 md:h-35 flex justify-end font-enviro-open-sans text-xl md:text-4xl",
            range_end: "",
            selected: "",
            outside: "text-gray-500",
            disabled: "",
            range_middle: "",

            ...classNames,
          }}
          components={{
            Day: (props) => {
              return (
                <DefaultDay {...props}>
                  <CalendarDay
                    date={props.day.date}
                    displayMonth={currentDate}
                    events={events}
                  />
                </DefaultDay>
              );
            },
          }}
          {...props}
        />
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
