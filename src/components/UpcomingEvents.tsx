import Subheading from "@/components/Subheading";
import EventCard from "@/components/EventsCard";
import Button from "@/components/Button";

const UpcomingEvent = () => {
  return (
    <div className="text-enviro-gray-100 flex flex-col items-center justify-center gap-y-12 bg-[url(/GrayBG.webp)]">
      <Subheading title="Upcoming Events" bg="bg-enviro-green-100" text="" />
      <div className="flex flex-col items-center gap-y-10">
        <EventCard
          eventName="Event Name"
          location="Location"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (event description)"
          month="MONTH"
          day="DAY"
          time="00:00AM - 00:00PM"
          link="/"
        />
        <EventCard
          eventName="Event Name"
          location="Location"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (event description)"
          month="MONTH"
          day="DAY"
          time="00:00AM - 00:00PM"
          link="/"
        />
      </div>
      <div className="flex w-1/3 items-center justify-center pb-10">
        <Button>See More</Button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
