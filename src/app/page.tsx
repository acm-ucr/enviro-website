import UpcomingEvents from "@/components/UpcomingEvents";
import OurMission from "@/components/about/OurMission";
import Jagged from "@/public/Jagged.webp";
import Image from "next/image";
import Flower from "@/public/Flower.webp";

const Home = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="z-0">
        <OurMission />
      </div>
      {/* Flower */}
      <Image
        src={Flower}
        alt=""
        className="absolute top-[65vh] -left-31 z-40"
      />
      <Image
        src={Jagged}
        alt="Jagged BG"
        className="absolute inset-0 top-[65vh] z-10 w-full"
      />
      <div className="z-10">
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Home;
