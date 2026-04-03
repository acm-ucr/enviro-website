"use client";
import { motion } from "motion/react";
interface SubheadingProps {
  title: string;
  bg: string;
  text: string;
}

const Subheading = ({ title, bg, text }: SubheadingProps) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${bg} border-enviro-green-300 w-2/3 rounded-2xl border-1 py-2 md:rounded-4xl md:py-4 lg:w-1/2`}
    >
      <div
        className={`font-enviro-single-day text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${text}`}
      >
        {title}
      </div>
    </motion.div>
  );
};

export default Subheading;
