import Title from "@/components//landing/Title";
import UpcomingEvents from "@/components/UpcomingEvents";
import GetInvolved from "@/components/GetInvolved";
import OurMission from "@/components/landing/OurMission";
import Interested from "@/components/landing/Interested";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Title />
      <OurMission />
      <UpcomingEvents />
      <Interested />
      <GetInvolved />
    </div>
  );
};

export default Home;
