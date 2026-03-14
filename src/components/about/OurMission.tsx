import Image from "next/image";
import Squiggle from "@/public/Home/WhiteSquigglyLine.webp";
import MissionBG from "@/public/About/AboutMissionBG.webp";
const OurMission = () => {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center gap-2 text-white md:min-h-100 md:gap-4">
      <Image
        src={MissionBG}
        alt="Mission Background"
        fill
        className="absolute -z-10 object-cover"
      />
      <div className="font-enviro-single-day text-3xl md:text-6xl">
        Our Mission Statement
      </div>
      <div className="font-enviro-open-sans flex w-3/4 text-center text-sm md:w-8/12 md:text-3xl">
        We are the Environmental Science Club, a vibrant community of students
        committed to understanding and protecting the environment. Our mission
        is to raise global awareness about ecological issues and inspire action
        through education, advocacy, and hands-on involvement.
      </div>
      <Image
        src={Squiggle}
        alt="Squiggly Border"
        className="absolute h-7/8 w-9/10 md:h-5/6"
      />
    </div>
  );
};

export default OurMission;
