"use client";
import React from "react";
import EventCard from "@/components/events/EventsCard";
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

const childVariant = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Cards = ({ events, isLoading, isError }: EventProps) => {
  const displayEvents = events;
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

  if (events.length === 0)
    return (
      <p className="font-enviro-open-sans text-enviro-green-300 my-5 flex items-center justify-center text-xl italic md:text-3xl">
        No Upcoming Events
      </p>
    );
  return (
    <motion.div
      className="mx-auto mb-10 grid w-11/12 gap-y-15 md:w-9/12"
      variants={{
        hidden: { opacity: 0, y: -20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
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
          <motion.div
            key={index}
            variants={childVariant}
            className={[
              index >= 1 ? "hidden sm:block" : "",
              index >= 2 ? "sm:hidden md:block" : "",
            ].join(" ")}
          >
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
