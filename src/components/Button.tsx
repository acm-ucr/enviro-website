"use client";
import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  textClassName?: string;
}

const Button = ({ children, href, className, textClassName }: ButtonProps) => {
  return (
    <Link href={href}>
      <motion.div
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className={`bg-enviro-green-50 mx-auto px-2 py-2 shadow-md ${className}`}
      >
        <div className="relative">
          <Image src={Border} alt="" className="h-auto w-full rounded-xs" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className={`text-enviro-green-200 font-enviro-open-sans hover:cursor-pointer ${textClassName}`}
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
