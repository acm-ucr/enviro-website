"use client";
import Polaroid from "./Polaroid";
import Image from "next/image";
import Rip from "@/public/webp (1).webp";
import About1 from "@/public/About/About1.webp";
import About2 from "@/public/About/About2.webp";
import About3 from "@/public/About/About3.webp";
import { motion } from "motion/react";

const images = [About1, About2, About3];

const Gallery = () => {
  return (
    <div className="bg-enviro-green-200 relative py-20">
      <Image
        src={Rip}
        alt="Paper Rip"
        className="absolute -top-6 w-full rotate-180 object-fill md:-top-8 lg:-top-15"
      />
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:px-10 lg:px-5">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Polaroid key={index} picture={img} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
