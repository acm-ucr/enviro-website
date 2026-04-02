"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Subheading from "@/components/Subheading";
import Button from "@/components/Button";
import Cards from "@/components/Cards";

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

export interface EventCardProps {
  date: string;
  month: string;
  time: string;
  title: string;
  location: string;
  description: string;
}

const UpcomingEvent = () => {
  const { data, isLoading, isError } = useQuery<{
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
    <div className="text-enviro-gray-100 flex w-full flex-col items-center justify-center gap-y-12 pb-16">
      <Subheading title="Upcoming Events" bg="bg-enviro-green-100" text="" />

      <Cards
        events={data?.futureEvents ?? []}
        isLoading={isLoading}
        isError={isError}
      />

      <div className="w-1/2 lg:w-3/12">
        <Button
          href=""
          textSize="text-lg md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
