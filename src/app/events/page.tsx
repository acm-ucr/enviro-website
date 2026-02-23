import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/events/PastEvents";

import Calendar from "@/components/calendar/Calendar";

const Events = () => {
  return (
    <div>
      <Calendar />
      <UpcomingEvents />

      <PastEvents />
    </div>
  );
};

export default Events;
