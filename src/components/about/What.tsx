"use client";
import Image from "next/image";
import Leaf from "@/public/Leaf.webp";
import { motion } from "motion/react";

const TitleAnimation = {
  initial: { y: -20 },
  whileInView: { y: 0, transition: { duration: 0.5 } },
};

const What = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        variants={TitleAnimation}
        initial="initial"
        whileInView="whileInView"
        className="bg-enviro-blue-100 font-enviro-single-day border-enviro-green-200 mt-14 flex w-3/5 items-center justify-center rounded-full border text-3xl md:mt-22 md:py-4 md:text-6xl lg:w-4/12"
      >
        What Do We Do?
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="relative my-12 flex w-11/12"
      >
        <Image
          src={Leaf}
          alt="Leaf"
          className="absolute -top-28 -left-3 z-0 w-32 scale-x-[-1] md:-top-64 md:-left-5 md:w-48 lg:-top-96 lg:w-60"
        />

        <div className="bg-enviro-blue-100 relative z-1 mb-10 flex justify-center overflow-hidden py-3 shadow-[0_-6px_2px_rgba(0,0,0,0.3)] md:py-8">
          <div className="bg-enviro-gray-100 flex w-11/12 justify-center py-3 md:py-8">
            <div className="border-enviro-blue-100 flex w-11/12 justify-center border-3 border-dashed p-3 md:p-8">
              <div className="font-enviro-open-sans text-center text-base md:text-3xl">
                We bring together students who share a passion for the
                environment through a variety of engaging events-social
                gatherings, nature trips, expert talks, and volunteer projects.
                These activities give our members opportunities to connect,
                explore, and make a tangible impact on local and global
                environmental challenges.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={TitleAnimation}
        initial="initial"
        whileInView="whileInView"
        className="bg-enviro-green-100 font-enviro-single-day border-enviro-green-200 -mt-6 mb-5 flex w-9/10 items-center justify-center rounded-full border py-4 text-center text-3xl text-white md:text-6xl lg:w-8/12"
      >
        What if I'm not an environmental science major? Can I still join?
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative my-16 flex w-11/12"
      >
        <Image
          src={Leaf}
          alt="Leaf"
          className="absolute -top-32 -right-3 z-2 w-32 scale-[0.9] md:-top-56 md:-right-10 md:w-48 lg:-top-96 lg:w-60"
        />

        <div className="bg-enviro-green-200 relative z-3 flex justify-center overflow-hidden py-3 shadow-[0_-6px_2px_rgba(0,0,0,0.3)] md:py-8">
          <div className="bg-enviro-gray-100 flex w-11/12 justify-center py-3 md:py-8">
            <div className="border-enviro-green-200 font-enviro-open-sans flex w-11/12 justify-center border-3 border-dashed p-3 md:p-8">
              <div className="text-center text-base md:text-3xl">
                Our club is open to all students, regardless of major. By
                approaching challenges from a multidisciplinary perspective, we
                believe we can create more innovative and creative solutions. No
                matter your background, if you're passionate about the planet,
                there's a place for you in our community.
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-enviro-green-100 absolute -top-12 -left-3 z-4 flex w-2/5 -rotate-5 items-center justify-center py-2 shadow-[0_-6px_2px_rgba(0,0,0,0.3)] md:-left-8 lg:w-1/4"
        >
          <div className="bg-enviro-gray-100 flex w-11/12 justify-center py-2">
            <div className="border-enviro-green-100 text-enviro-green-100 flex w-11/12 justify-center border-3 border-dashed p-1 text-center text-sm font-semibold md:py-4 md:text-3xl">
              ABSOLUTELY!
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default What;
