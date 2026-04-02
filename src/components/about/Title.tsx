"use client";
import TitlePhoto from "@/public/About/AboutBG.webp";
import Image from "next/image";
import { motion } from "motion/react";
const Title = () => {
  return (
    <div className="bg-enviro-gray-100 relative -z-10 -mt-12 flex h-52 flex-col items-center justify-center md:h-100 md:flex-row lg:h-screen">
      <Image
        src={TitlePhoto}
        alt="Title Photo"
        className="absolute -z-5 w-[95%] justify-self-center border border-black object-cover opacity-80 md:-top-10 md:w-[98%]"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-enviro-single-day h-full pt-10 text-center text-5xl text-white md:text-7xl lg:text-9xl"
      >
        {" "}
        [ About Us ]{" "}
      </motion.div>
    </div>
  );
};

export default Title;
