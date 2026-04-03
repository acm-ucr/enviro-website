import Title from "@/components//landing/Title";
import UpcomingEvents from "@/components/UpcomingEvents";
import GetInvolved from "@/components/landing/GetInvolved";
import OurMission from "@/components/landing/OurMission";
import Interested from "@/components/landing/Interested";

const Home = () => {
  return (
    <>
      <Title />
      <OurMission />
      <UpcomingEvents />
      <Interested />
      <GetInvolved />
    </>
  );
};

export default Home;
