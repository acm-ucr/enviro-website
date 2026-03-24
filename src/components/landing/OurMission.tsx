import Button from "@/components/Button";
import Image from "next/image";
import MissionStatement from "@/public/Home/MissionStatement.webp";
import Tape from "@/public/tape.webp";
import Line from "@/public/Home/SquigglyLine.svg";
import Gradient from "@/public/Gradient.webp";
import Jagged from "@/public/Jagged.webp";
import Flower from "@/public/Flower.webp";

const OurMission = () => {
  return (
    <div className="grid">
      <Image
        src={Gradient}
        alt="Gradient Background"
        className="z-0 col-start-1 row-start-1 h-10/12 w-full"
      />
      {/* Content */}
      <div className="z-10 col-start-1 row-start-1 -mt-30 flex items-center justify-around">
        {/* Left side */}
        <div className="relative -mt-50 w-1/2">
          <div className="bg-enviro-gray-100 mx-5 pb-10 shadow-lg">
            <Image
              src={MissionStatement}
              alt="Group Picture"
              className="border-enviro-green-400 relative top-2 scale-[0.93] border object-cover"
            />
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt=""
            className="absolute -top-5 left-1/2 w-80 -translate-x-1/2 opacity-70"
          />
        </div>
        {/* Right side */}
        <div className="flex h-8/12 w-4/10 flex-col items-center gap-2 text-center text-white">
          <div className="font-enviro-single-day text-6xl">
            Our Mission Statement
          </div>
          <Image
            src={Line}
            alt="Squiggly Line"
            className="pointer-events-none w-full pb-5"
          />
          <div className="pb-10 text-3xl">
            We are the Environmental Science Club, a vibrant community of
            students committed to understanding and protecting the environment.
            Our mission is to raise global awareness about ecological issues and
            inspire action through education, advocacy, and hands-on
            involvement.
          </div>
          <div className="w-1/2">
            <Button href="" textSize="text-3xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={Jagged}
        alt="Jagged Edge"
        className="z-0 col-start-1 row-start-1 mt-130 w-full"
      />
      <Image src={Flower} alt="" className="z-20 -mt-115 -ml-30" />
    </div>
  );
};

export default OurMission;
