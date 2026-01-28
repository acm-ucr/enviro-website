import Button from "@/components/Button";
import Image from "next/image";
import MissionStatement from "@/public/Home/MissionStatement.webp";
import Tape from "@/public/tape.webp";
import Flower from "@/public/Flower.webp";
import Gradient from "@/public/Gradient.webp";
import Line from "@/public/Home/SquigglyLine.svg";

const OurMission = () => {
  return (
    <div className="relative h-[600px] w-screen">
      {/* Background */}
      <Image
        src={Gradient}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-around">
        {/* Left side */}
        <div className="relative h-8/12 w-5/12">
          <div className="bg-enviro-gray-100 h-full w-full">
            <Image
              src={MissionStatement}
              alt=""
              className="border-enviro-green-400 h-9/10 w-full scale-[0.9] border object-cover"
            />
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt=""
            className="absolute -top-4 left-1/2 w-80 -translate-x-1/2 opacity-50"
          />
          {/* Flower */}
          <Image
            src={Flower}
            alt=""
            className="absolute -bottom-72 left-0.5 -translate-x-1/2 scale-[0.8]"
          />
        </div>
        {/* Right side */}
        <div className="relative flex h-96 w-4/10 flex-col items-center justify-between text-center text-white">
          <div className="font-enviro-single-day text-3xl">
            Our Mission Statement
          </div>
          <Image src={Line} alt="" className="h-auto w-1/2 -translate-y-6" />
          <div className="w-1/2 -translate-y-4 text-lg">
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
