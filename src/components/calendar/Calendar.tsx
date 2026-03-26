"use client";
import Image from "next/image";
import Earth from "@/public/Earth.webp";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar as UICalendar } from "@/components/calendar/uicalendar";
import UpcomingEvents from "@/components/UpcomingEvents";
import { useQuery } from "@tanstack/react-query";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: GoogleEventProps;
};

const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data } = useQuery<{
    allEvents: GoogleEventProps[];
    futureEvents: GoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
      ).then((res) => res.json());

      const allEvents: GoogleEventProps[] = response.items || [];

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 3);

      return { allEvents, futureEvents };
    },
  });

  return (
    <div className="flex max-w-screen flex-col items-center bg-[url(/GrayBG.webp)]">
      <Image
        src={Earth}
        alt="Earth"
        className="w-1/2 justify-self-center opacity-15 md:-mt-50"
      />
      <div className="font-enviro-single-day py-5 text-4xl md:mt-5 md:py-20 md:text-7xl">
        Events
      </div>
      <UICalendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full"
        events={[
          ...(data?.allEvents ?? []),
          {
            summary: "Test Event",
            start: { dateTime: new Date().toISOString() },
            end: { dateTime: new Date(Date.now() + 3600000).toISOString() },
            location: "Room 302",
            description: "Testing testing 123.",
          },
        ]}
      />
      <UpcomingEvents />
    </div>
  );
};

export default Calendar;
