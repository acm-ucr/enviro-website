"use client";
import Image from "next/image";
import Earth from "@/public/Earth.webp";
import React from "react";
import { useState, useEffect } from "react";
import { Calendar as UICalendar } from "@/components/calendar/uicalendar";
import UpcomingEvents from "@/components/UpcomingEvents";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

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

const MotionImage = motion(Image);
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
    <motion.div
      className="flex max-w-screen flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <MotionImage
        src={Earth}
        alt="Earth"
        className="-z-10 w-1/2 justify-self-center md:-mt-[25%]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 0.15,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <div className="font-enviro-single-day py-5 text-4xl md:mt-5 md:py-20 md:text-7xl lg:text-8xl xl:text-9xl">
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
    </motion.div>
  );
};

export default Calendar;
