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
    <div className="relative grid">
      <Image
        src={Gradient}
        alt="Gradient Background"
        className="z-0 col-start-1 row-start-1 -mt-8 h-10/12 w-full sm:-mt-10 2xl:w-screen"
      />
      {/* Content */}
      <div className="z-10 col-start-1 row-start-1 flex flex-col items-center justify-around md:absolute md:mt-[5%] md:mb-[10%] md:flex-row">
        {/* Left side */}
        <div className="relative w-full sm:mt-15 md:w-1/2">
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
            className="absolute -top-5 left-1/2 w-50 -translate-x-1/2 opacity-80 md:w-55"
          />
        </div>
        {/* Right side */}
        <div className="flex h-8/12 w-full flex-col items-center gap-2 text-center text-white md:w-4/10">
          <div className="font-enviro-single-day mt-2 text-3xl sm:text-4xl md:mt-0 md:text-4xl md:whitespace-nowrap lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Our Mission Statement
          </div>
          <Image
            src={Line}
            alt="Squiggly Line"
            className="pointer-events-none w-9/12 pb-5 sm:pb-2 md:w-full"
          />
          <div className="text-md w-10/12 pb-5 sm:pb-2 sm:text-lg md:w-full lg:text-2xl xl:text-3xl 2xl:text-4xl">
            We are the Environmental Science Club, a vibrant community of
            students committed to understanding and protecting the environment.
            Our mission is to raise global awareness about ecological issues and
            inspire action through education, advocacy, and hands-on
            involvement.
          </div>
          <div className="w-5/12 sm:w-1/3 md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <Button
              href=""
              textSize="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={Jagged}
        alt="Jagged Edge"
        className="z-0 col-start-1 row-start-1 mt-130 hidden w-full scale-y-130 md:mt-[52%] md:block 2xl:mt-150"
      />
      <Image
        src={JaggedMobile}
        alt="Jagged Edge Mobile"
        className="z-0 col-start-1 row-start-1 mt-150 block w-full scale-x-[1.01] md:hidden"
      />
      <Image
        src={Flower}
        alt="Green Flower"
        className="absolute right-[46%] bottom-[3vh] z-20 scale-35 sm:bottom-[25vh] sm:-left-[25%] sm:scale-45 md:-bottom-[4vh] md:-left-[20%] lg:bottom-[5vh] lg:-left-[13vw] lg:scale-70 xl:bottom-[12vh] xl:scale-90 2xl:top-[45vh] 2xl:-left-[10vw] 2xl:scale-100"
      />
    </div>
  );
};

export default OurMission;
