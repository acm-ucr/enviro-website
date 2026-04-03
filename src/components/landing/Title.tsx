"use client";
import Image from "next/image";
import Logo from "@/public/logo.webp";
import NotebookBackground from "@/public/line-paper.webp";
import Button from "../Button";
import { motion } from "motion/react";

const FadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const Title = () => {
  return (
    <div className="relative -mt-[4%] min-h-[300px] w-full sm:min-h-[400px] md:-mt-[8%] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
      <Image
        className="absolute inset-0 -top-10 -left-3 -z-1 origin-top-left scale-y-[1.05] object-fill sm:scale-y-[1.15] md:-top-15 md:-left-0 md:scale-100 lg:-top-6 xl:-top-15 xl:scale-y-[1.3]"
        src={NotebookBackground}
        alt="Notebook Background"
        fill
      />
      <div className="mx-auto w-full px-2">
        <motion.div
          variants={FadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between text-center md:flex-row md:text-left"
        >
          <div className="mt-[10%] flex w-4/6 flex-col md:-mt-30 md:ml-[10%] md:w-3/6">
            <motion.div
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-enviro-single-day text-enviro-green-300 text-3xl sm:text-6xl md:text-5xl md:whitespace-nowrap lg:text-6xl xl:text-7xl"
            >
              Environmental Science Club
            </motion.div>

            <motion.div
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-enviro-open-sans text-enviro-green-200 text-sm leading-relaxed font-semibold sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
            >
              Informing, empowering, and mobilizing students to lead
              sustainability efforts at UC Riverside.
            </motion.div>
          </div>
          <Image
            src={Logo}
            alt="Environmental Science Club @ UCR Logo"
            className="w-3/5 object-contain drop-shadow-md md:mt-[2%] md:-ml-[10%] md:w-full md:scale-60 lg:mt-[5%] lg:-ml-[5%] lg:scale-80"
          />
        </motion.div>
        <div className="z-10 mx-auto mb-[10%] w-5/12 md:-mt-[20%] md:ml-[15%] md:w-1/4 lg:w-1/5">
          <Button
            href="/contact"
            children={"Contact Us"}
            textSize="text-2xl xl:text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
