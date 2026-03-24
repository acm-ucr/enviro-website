import Button from "@/components/Button";
import Image from "next/image";
import MissionStatement from "@/public/Home/MissionStatement.webp";
import Tape from "@/public/tape.webp";
import Line from "@/public/Home/SquigglyLine.svg";
import Gradient from "@/public/Gradient.webp";
import Jagged from "@/public/Jagged.webp";
import JaggedMobile from "@/public/Home/JaggedMobile.webp";
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
      <div className="z-10 col-start-1 row-start-1 flex flex-col items-center justify-around md:-mt-30 md:flex-row">
        {/* Left side */}
        <div className="relative mt-15 w-full md:-mt-50 md:w-1/2">
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
            className="absolute -top-5 left-1/2 w-50 -translate-x-1/2 opacity-80 md:w-80"
          />
        </div>
        {/* Right side */}
        <div className="flex h-8/12 w-full flex-col items-center gap-2 text-center text-white md:w-4/10">
          <div className="font-enviro-single-day mt-2 text-3xl md:mt-0 md:text-4xl lg:text-5xl xl:text-6xl">
            Our Mission Statement
          </div>
          <Image
            src={Line}
            alt="Squiggly Line"
            className="pointer-events-none w-9/12 pb-5 md:w-full"
          />
          <div className="text-md w-10/12 pb-10 lg:text-xl xl:text-3xl">
            We are the Environmental Science Club, a vibrant community of
            students committed to understanding and protecting the environment.
            Our mission is to raise global awareness about ecological issues and
            inspire action through education, advocacy, and hands-on
            involvement.
          </div>
          <div className="w-1/2">
            <Button href="" textSize="text-xl lg:text-2xl xl:text-3xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={Jagged}
        alt="Jagged Edge"
        className="z-0 col-start-1 row-start-1 mt-130 hidden w-full md:block"
      />
      <Image
        src={JaggedMobile}
        alt="Jagged Edge Mobile"
        className="z-0 col-start-1 row-start-1 mt-150 block w-full md:hidden"
      />
      <Image
        src={Flower}
        alt="Green Flower"
        className="z-20 -mt-92 -ml-38 hidden scale-40 md:-mt-115 md:-ml-30 md:scale-100 lg:block"
      />
    </div>
  );
};

export default OurMission;
