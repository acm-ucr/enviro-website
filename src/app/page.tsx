import Button from "@/components/Button";
import EventCard from "@/components/EventsCard";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>Hello</div>
      <Button>Learn More</Button>
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
  );
};

export default Home;
