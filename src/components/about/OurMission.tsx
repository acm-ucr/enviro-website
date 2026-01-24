import Button from "@/components/Button";
import Image from "next/image";
import MissionStatement from "@/public/Home/MissionStatement.webp";
import Tape from "@/public/tape.webp";
import Flower from "@/public/Flower.webp";

const OurMission = () => {
  return (
  <div className="flex h-screen w-screen items-center justify-around">
    <div className="relative w-4/10 h-96">
      <div className="w-full h-full bg-enviro-gray-100">
        <Image src={MissionStatement} alt="" className="w-full h-9/10 object-cover scale-[0.9] border border-enviro-green-400"/>
      </div>
      <Image src={Tape} alt="" className="absolute -top-4 left-1/2 -translate-x-1/2 w-60 opacity-50"/>
      <Image src={Flower} alt="" className="absolute w-auto h-auto scale-[0.8] -bottom-72 left-0.5 -translate-x-1/2"/>
    </div>
    <div className="flex flex-col relative w-4/10 h-96 items-center justify-between">
      <div className="font-enviro-single-day text-5xl">
        Our Mission Statement
      </div>
      <div className="text-lg">
        <p className="px-4 text-center">We are the Environmental Science Club, a vibrant community of students committed to understanding and protecting the environment. Our mission is to raise global awareness about ecological issues and inspire action through education, advocacy, and hands-on involvement.</p>
      </div>
      <Button>Learn More</Button>
    </div>
  </div>
  

  );
};

export default OurMission;
