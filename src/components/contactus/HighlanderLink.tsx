"use client";
import Image from "next/image";
import grid from "@/public/Grid.webp";
import arrow from "@/public/ContactUs/arrow.webp";
import Button from "@/components/Button";
import leaf from "@/public/Leaf.webp";
import { motion } from "motion/react";

const HighlanderLink = () => {
  return (
    <div className="relative flex min-h-[40vh] w-full flex-col items-center justify-start gap-8 p-10 md:items-start">
      <Image
        src={grid}
        alt="grid"
        className="absolute inset-0 -z-10 h-full object-cover"
      />
      <motion.div
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-enviro-single-day text-enviro-green-200 pt-7 text-center text-5xl sm:w-2/3 md:text-left md:text-6xl"
      >
        We’re also on HighlanderLink!
      </motion.div>

      <div className="flex w-1/2 md:ml-10 md:w-2/3 md:justify-end">
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block"
        >
          <Image src={arrow} alt="arrow" className="w-2/3 object-cover" />
        </motion.div>

        <div className="z-30 mt-auto w-full md:mt-15 md:w-2/5">
          <Button href="/" textSize="text-lg sm:text-xl md:text-4xl">
            Click Here
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-0 left-5 flex w-9/10 justify-between md:justify-end"
      >
        <Image
          src={leaf}
          alt="leaf"
          className="w-1/5 scale-x-[-1] object-contain md:hidden"
        />
        <Image
          src={leaf}
          alt="leaf"
          className="w-1/5 object-contain md:w-1/10"
        />
      </motion.div>
    </div>
  );
};

export default HighlanderLink;
