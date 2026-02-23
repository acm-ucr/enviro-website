import UpcomingEvents from "@/components/UpcomingEvents";
import Image from "next/image";
import GreenMiddle from "@/public/Events/GreenMiddle.webp";
import PastEvents from "@/components/events/PastEvents";

import Calendar from "@/components/calendar/Calendar";

const Events = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <UpcomingEvents />
      <Image
        src={GreenMiddle}
        alt="Green Middle Rip"
        className="absolute inset-0 top-[109vh] z-10 w-full"
      />
      <div className="z-10">
        <PastEvents />
      </div>
    </div>
  );
};

export default Events;
