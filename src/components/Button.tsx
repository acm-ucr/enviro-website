"use client";
import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  textSize?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Button = ({ children, href, textSize, target }: ButtonProps) => {
  return (
    <Link href={href} target={target}>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.9 }}
        className={`bg-enviro-green-50 mx-auto px-2 py-2 shadow-md`}
      >
        <div className="relative">
          <Image
            src={Border}
            alt=""
            className="pointer-events-none h-auto w-full rounded-xs"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className={`text-enviro-green-200 font-enviro-open-sans hover:cursor-pointer ${textSize}`}
            >
              {children}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Button;
