"use client";

import { useState, useEffect } from "react";
import CalendarEventPopover from "./CalendarPopover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/calendar/popover";

import { GoogleEventProps } from "@/components/calendar/Calendar";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const CalendarDay = ({ date, displayMonth, events }: DayProps) => {
  const today = new Date();

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isPastDay = date < new Date(new Date().setHours(0, 0, 0, 0));

  const isOutsideMonth =
    date.getMonth() !== displayMonth.getMonth();

  const filteredEvents = events.filter((event) => {
    let start: Date | null = null;
    let end: Date | null = null;

    if (event.start?.dateTime) start = new Date(event.start.dateTime);
    else if (event.start?.date) start = new Date(event.start.date);

    if (event.end?.dateTime) end = new Date(event.end.dateTime);
    else if (event.end?.date) end = new Date(event.end.date);

    start?.setHours(0, 0, 0, 0);
    end?.setHours(23, 59, 59, 999);

    return start && end && date >= start && date <= end;
  });

  const [visibleEventCount, setVisibleEventCount] = useState(2);

  useEffect(() => {
    const update = () => {
      if (window.innerHeight > 1400) setVisibleEventCount(4);
      else if (window.innerHeight > 1000) setVisibleEventCount(3);
      else setVisibleEventCount(2);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const displayCount =
    filteredEvents.length > visibleEventCount
      ? visibleEventCount - 1
      : visibleEventCount;

  return (
    <div
      className={`relative h-full w-full ${
        isOutsideMonth ? "opacity-40" : ""
      }`}
    >
      <div
        className={`absolute right-1.5 top-1.5 text-lg md:text-3xl font-enviro-open-sans ${
          isToday
            ? "bg-enviro-green-100 text-white rounded-full w-6 h-6 md:w-12 md:h-12 flex items-center justify-center"
            : "text-enviro-200"
        }`}
      >
        {date.getDate().toString().padStart(2, "0")}
      </div>

      <div
        className={`mt-15 flex flex-col gap-1 px-1 ${
          isPastDay ? "text-gray-400" : ""
        }`}
      >
        {filteredEvents
          .slice(0, displayCount)
          .map((event, i) => (
            <CalendarEventPopover
              key={i}
              startDate={event.start}
              endDate={event.end}
              title={event.summary}
              description={event.description}
              date={date}
              location={event.location || "TBD"}
            />
          ))}

        {filteredEvents.length > visibleEventCount && (
          <Popover>
            <PopoverTrigger className="hover:opacity-70">
              +{filteredEvents.length - displayCount} more
            </PopoverTrigger>
            <PopoverContent>
              {filteredEvents.slice(displayCount).map((event, i) => (
                <CalendarEventPopover
                  key={i}
                  startDate={event.start}
                  title={event.summary}
                  date={date}
                  description={event.description}
                  location={event.location || "TBD"}
                />
              ))}
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;