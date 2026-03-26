"use client";
import React from "react";
import EventCard from "@/components/EventsCard";
import { motion } from "motion/react";
import type { DayPicker } from "react-day-picker";
import { GoogleEventProps } from "@/components/calendar/Calendar";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

type EventProps = CalendarProps & {
  isError: boolean;
  isLoading: boolean;
};
const mockEvents: GoogleEventProps[] = [
  {
    summary: "test event",
    start: { dateTime: new Date(Date.now() + 86400000).toISOString() },
    end: { dateTime: new Date(Date.now() + 90000000).toISOString() },
    location: "test location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (event description)",
  },
  {
    summary: "Test event",
    start: { dateTime: new Date(Date.now() + 172800000).toISOString() },
    end: { dateTime: new Date(Date.now() + 180000000).toISOString() },
    location: "test location",
    description: "testing testing 123",
  },
];

const eventsVariant = {
  variants: {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.7,
      },
    },
  },
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true },
};
const childVariant = {
  variants: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  },
};

const Cards = ({ events, isLoading, isError }: EventProps) => {
  const displayEvents = events.length === 0 ? mockEvents : events;
  if (isLoading)
    return (
      <p className="font-enviro-open-sans text-enviro-green-300 my-5 flex items-center justify-center text-xl md:text-3xl">
        Loading events...
      </p>
    );

  if (isError)
    return (
      <p className="font-enviro-open-sans text-enviro-green-300 my-5 flex items-center justify-center text-xl md:text-3xl">
        Error fetching events
      </p>
    );

  //   if (events.length === 0)
  //     return (
  //       <p className="my-5 flex items-center justify-center text-xl md:text-3xl font-enviro-open-sans text-enviro-green-300 italic">
  //         No Upcoming Events
  //       </p>
  //     );
  return (
    <motion.div
      className="mx-auto mb-10 grid w-11/12 gap-y-15 md:w-7/12"
      {...eventsVariant}
    >
      {displayEvents.map((event, index) => {
        const dateObj = new Date(
          event.start.dateTime || event.start.date || "",
        );

        const month = dateObj.toLocaleString("en-US", { month: "short" });
        const day = dateObj.toLocaleString("en-US", { day: "numeric" });

        const formattedTime = dateObj.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        });

        return (
          <motion.div key={index} variants={childVariant}>
            <EventCard
              eventName={event.summary}
              month={month}
              day={day}
              location={event.location || "No location"}
              time={formattedTime}
              desc={event.description || ""}
              link="/"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Cards;
