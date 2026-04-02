"use client";
import Subheading from "@/components/Subheading";
import Button from "@/components/Button";
import Tape from "@/public/tape.webp";
import eventPic1 from "@/public/Events/Event1.webp";
import eventPic2 from "@/public/Events/Event2.webp";
import Image from "next/image";
import Flower from "@/public/Home/FlowerBG.webp";
import { motion } from "motion/react";

const PastEvents = () => {
  return (
    <motion.div className="relative flex flex-col items-center justify-center gap-16 bg-[url(/Events/GreenBG.webp)] pt-16 pb-10">
      <Subheading
        title="Past Events Highlights"
        bg="bg-enviro-green-100"
        text="text-white"
      />
      <div className="flex w-full flex-col items-center justify-center gap-x-16 px-[5%] md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 w-11/12 md:mb-0 md:w-1/2"
        >
          <div className="bg-enviro-green-50 rounded-4xl py-8 md:px-4">
            <div className="bg-enviro-gray-100 mx-6 pb-10 shadow-lg md:mx-5">
              <Image
                src={eventPic1}
                alt="Group Picture"
                className="border-enviro-green-400 relative top-2 h-80 w-full scale-[0.93] border object-cover object-center lg:h-120"
              />
              <div className="font-enviro-single-day pt-5 text-center text-3xl md:text-5xl">
                Event Name
              </div>
              <div className="font-enviro-single-day text-center text-xl md:text-3xl">
                Month Year
              </div>
            </div>
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt="Tape"
            className="absolute top-5 left-1/2 w-1/2 -translate-x-1/2 opacity-80"
          />
          {/*Flower*/}
          <Image
            src={Flower}
            alt="Flower"
            className="absolute -top-0 left-0 w-1/4 -translate-x-0"
          />
          <Image
            src={Flower}
            alt="Flower"
            className="absolute right-0 bottom-15 w-1/8 -translate-x-3"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-11/12 md:w-1/2"
        >
          <div className="bg-enviro-green-50 rounded-4xl pt-8 pb-8">
            <div className="bg-enviro-gray-100 mx-5 pb-10 shadow-lg">
              <Image
                src={eventPic2}
                alt="Group Picture"
                className="border-enviro-green-400 relative top-2 h-80 scale-[0.93] border object-cover lg:h-120"
              />
              <div className="font-enviro-single-day pt-5 text-center text-3xl md:text-5xl">
                Event Name
              </div>
              <div className="font-enviro-single-day text-center text-xl md:text-3xl">
                Month Year
              </div>
            </div>
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt=""
            className="absolute top-5 left-1/2 w-1/2 -translate-x-1/2 opacity-80"
          />
          {/*Flower*/}
          <Image
            src={Flower}
            alt=""
            className="absolute -top-0 right-0 w-1/4"
          />
          <Image
            src={Flower}
            alt=""
            className="absolute bottom-15 left-0 w-1/8 translate-x-3"
          />
        </motion.div>
      </div>
      <div className="w-1/2 md:w-1/5">
        <Button href="" textSize="text-3xl">
          See More
        </Button>
      </div>
    </motion.div>
  );
};

export default PastEvents;
