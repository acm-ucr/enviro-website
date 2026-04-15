"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Subheading from "@/components/Subheading";
import Cards from "@/components/events/Cards";

export type GoogleEventProps = {
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
  location?: string;
  description?: string;
  summary: string;
};

const UpcomingEvent = () => {
  // Fetch Google Calendar events
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
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
      ).then((res) => res.json());

      const allEvents: GoogleEventProps[] = response.items || [];

      const futureEvents = allEvents.filter((item) => {
        const startString = item.start?.dateTime || item.start?.date;
        return startString && new Date(startString) >= now;
      });

      return { allEvents, futureEvents };
    },
  });

  const sourceEvents = data?.futureEvents || [];

  // Cap at 2 events
  const eventsToShow = sourceEvents.slice(0, 2);

  return (
    <div className="text-enviro-gray-100 flex w-full flex-col items-center justify-center gap-y-12">
      <Subheading
        title="Upcoming Events"
        bg="bg-enviro-green-100"
        text="text-3xl"
      />

      <Cards events={eventsToShow} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default UpcomingEvent;
