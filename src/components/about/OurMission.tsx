import Button from "@/components/Button";
import Image from "next/image";
import MissionStatement from "@/public/Home/MissionStatement.webp";
import Tape from "@/public/tape.webp";
import Flower from "@/public/Flower.webp";
import Line from "@/public/Home/SquigglyLine.svg";

const OurMission = () => {
  return (
    <div className="h-full w-full bg-[url(/Home/Gradient.webp)]">
      {/* Content */}
      <div className="z-10 flex h-full items-center justify-around">
        {/* Left side */}
        <div className="relative h-8/12 w-5/12">
          <div className="bg-enviro-gray-100 h-full w-full shadow-lg">
            <Image
              src={MissionStatement}
              alt=""
              className="relative top-1 border-enviro-green-400 h-9/10 scale-[0.93] border object-cover"
            />
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt=""
            className="absolute -top-5 left-1/2 w-80 -translate-x-1/2 opacity-70"
          />
          {/* Flower */}
          <Image
            src={Flower}
            alt=""
            className="absolute -bottom-70 left-0.5 -translate-x-1/2 scale-[0.8]"
          />
        </div>
        {/* Right side */}
        <div className="flex h-8/12 w-4/10 flex-col items-center gap-2 text-center text-white">
          <div className="font-enviro-single-day text-6xl">
            Our Mission Statement
          </div>
          <Image src={Line} alt="Squiggly Line" className="w-full pb-5"/>
          <div className="text-3xl pb-10">
            We are the Environmental Science Club, a vibrant community of
            students committed to understanding and protecting the environment.
            Our mission is to raise global awareness about ecological issues and
            inspire action through education, advocacy, and hands-on
            involvement.
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
