"use client";
import Image from "next/image";
import Squiggle from "@/public/Home/WhiteSquigglyLine.webp";
import MissionBG from "@/public/About/AboutMissionBG.webp";
import GreenBottom from "@/public/About/GreenBottom.webp";
import { motion } from "motion/react";

const OurMission = () => {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center gap-2 text-white sm:my-16 md:-my-8 md:min-h-100 md:gap-4">
      <Image
        src={MissionBG}
        alt="Mission Background"
        fill
        className="absolute -z-10 object-cover"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-enviro-single-day text-3xl md:text-6xl"
      >
        Our Mission Statement
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-enviro-open-sans flex w-3/4 text-center text-sm md:text-xl lg:w-8/12 lg:text-3xl"
      >
        We are the Environmental Science Club, a vibrant community of students
        committed to understanding and protecting the environment. Our mission
        is to raise global awareness about ecological issues and inspire action
        through education, advocacy, and hands-on involvement.
      </motion.div>
      <Image
        src={Squiggle}
        alt="Squiggly Border"
        className="absolute h-7/8 w-9/10 md:h-5/6"
      />
      <Image
        src={GreenBottom}
        alt="Background Bottom"
        className="absolute -bottom-5 -z-20 w-full md:-bottom-10"
      />
    </div>
  );
};

export default OurMission;
