import Image from "next/image";
import Title from "@/components/about/Title";
import What from "@/components/about/What";
import OurMission from "@/components/about/OurMission";
import GreenBottom from "@/public/About/GreenBottom.webp";
import GrayBG from "@/public/About/WhatGrayBG.webp";

const About = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <Title />
      <Image
        src={GrayBG}
        alt="Gray Background"
        fill
        className="absolute inset-0 -z-10"
      />
      <div className="z-30">
        <OurMission />
      </div>
      <Image
        src={GreenBottom}
        alt="Background Bottom"
        className="absolute inset-0 top-[45vh] z-20"
      />
      <div className="z-40 mt-10">
        <What />
      </div>
    </div>
  );
};

export default About;
