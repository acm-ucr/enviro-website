import Button from "@/components/Button";
import Image from "next/image";
import MissionStatement from "@/public/Home/MissionStatement.webp";
import Tape from "@/public/tape.webp";
import Flower from "@/public/Flower.webp";

const OurMission = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-around">
      <div className="relative h-96 w-4/10">
        <div className="bg-enviro-gray-100 h-full w-full">
          <Image
            src={MissionStatement}
            alt=""
            className="border-enviro-green-400 h-9/10 w-full scale-[0.9] border object-cover"
          />
        </div>
        <Image
          src={Tape}
          alt=""
          className="absolute -top-4 left-1/2 w-60 -translate-x-1/2 opacity-50"
        />
        <Image
          src={Flower}
          alt=""
          className="absolute -bottom-72 left-0.5 h-auto w-auto -translate-x-1/2 scale-[0.8]"
        />
      </div>
      <div className="relative flex h-96 w-4/10 flex-col items-center justify-between">
        <div className="font-enviro-single-day text-5xl">
          Our Mission Statement
        </div>
        <div className="text-lg">
          <p className="px-4 text-center">
            We are the Environmental Science Club, a vibrant community of
            students committed to understanding and protecting the environment.
            Our mission is to raise global awareness about ecological issues and
            inspire action through education, advocacy, and hands-on
            involvement.
          </p>
        </div>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default OurMission;
