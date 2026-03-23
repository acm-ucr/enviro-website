"use client";
import BoardCard, { GalleryImage } from "@/components/board/Card";
import { motion } from "motion/react";
interface GridProps {
  images: GalleryImage[];
}

const GridMotion = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Grid = ({ images }: GridProps) => {
  const colClass =
    images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3";

  const grid = (
    <div
      className={`grid ${colClass} -mb-6 justify-items-center gap-x-10 gap-y-8 md:-mb-20 md:gap-x-10 md:gap-y-10`}
    >
      {images.map((img, i) => {
        const isLastOddItem =
          images.length % 2 === 1 && i === images.length - 1;

        return (
          <motion.div
            key={i}
            variants={GridMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={[
              "w-full max-w-[150px] sm:max-w-[250px] md:max-w-none",
              isLastOddItem
                ? "col-span-2 justify-self-center md:col-span-1"
                : "",
            ].join(" ")}
          >
            <BoardCard img={img} />
          </motion.div>
        );
      })}
    </div>
  );

  return images.length === 2 ? (
    <div className="mx-auto hidden w-2/3 md:block">{grid}</div>
  ) : (
    grid
  );
};

export default Grid;
