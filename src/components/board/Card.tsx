"use client";
import Image, { StaticImageData } from "next/image";
import photoFrame from "@/public/Board/BoardBG.webp";
import { motion } from "motion/react";
import { useState } from "react";

export interface GalleryImage {
  image: StaticImageData;
  name: string;
  title: string;
}

interface BoardCardProps {
  img: GalleryImage;
}

const BoardCard = ({ img }: BoardCardProps) => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className="w-full text-center">
      <div
        onMouseEnter={() => setAnimation(true)}
        onMouseLeave={() => setAnimation(false)}
        className="relative aspect-square"
      >
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: animation ? 360 : 0 }}
          transition={{ duration: animation ? 10 : 0 }}
        >
          <Image
            className="object-contain"
            src={photoFrame}
            fill
            alt="Photo frame"
          />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative aspect-square w-3/5">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                className="border-enviro-green-200 rounded-full border-2 object-cover object-center md:border-4"
                src={img.image}
                alt={`Picture of ${img.name}`}
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col items-center justify-start leading-tight md:mt-6 md:h-24">
        <div className="font-enviro-single-day text-enviro-green-200 text-2xl sm:text-3xl md:text-4xl lg:text-4xl lg:leading-none xl:text-5xl">
          {img.title}
        </div>
        <div className="text-enviro-green-200 font-open-sans text-sm sm:text-xl md:mt-2 md:leading-none md:whitespace-nowrap lg:text-2xl xl:text-3xl">
          {img.name}
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
