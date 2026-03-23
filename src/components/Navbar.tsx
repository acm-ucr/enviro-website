"use client";

import Link from "next/link";
import Image from "next/image";
import enviroLogo from "@/public/logo.webp";
import navbarBg from "@/public/Navbar.webp";
import navbarClose from "@/public/navbarMobile.webp";
import navbarOpen from "@/public/navbarMobileOpen.webp";
import navbarLine from "@/public/navbarLine.webp";
import navigations from "@/data/NavBarLinks";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-enviro-single-day fixed top-0 right-0 left-0 z-50 w-full text-black">
      <div className="relative w-full overflow-hidden md:hidden">
        <Image
          src={isOpen ? navbarOpen : navbarClose}
          alt="Navbar background open"
          className={[
            "block h-auto w-full origin-top transform-gpu",
            isOpen
              ? "scale-x-[1.04] scale-y-[1.01] sm:scale-y-[0.76]"
              : "scale-x-[1.10] scale-y-[1.02] sm:scale-y-[0.72]",
          ].join(" ")}
          priority
        />

        <div className="absolute inset-0 z-10">
          <Link href="/" className="absolute top-1 left-4 items-center">
            <Image
              src={enviroLogo}
              alt="Environmental Science Club Logo"
              className="h-2/12 w-2/12 shrink-0"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 right-4 flex flex-col gap-2 p-2 hover:cursor-pointer sm:top-7"
          >
            <span className="block h-0.5 w-7 bg-black"></span>
            <span className="block h-0.5 w-7 bg-black"></span>
            <span className="block h-0.5 w-7 bg-black"></span>
          </button>

          {isOpen && (
            <div className="pt-16 sm:pt-20">
              <div className="flex justify-center px-3 sm:pt-2">
                <Image src={navbarLine} alt="" className="h-[1.5px] w-full" />
              </div>

              <div className="mt-3 flex flex-col items-center gap-2 text-2xl sm:gap-4 sm:text-3xl">
                {navigations.map(({ link, name }, index) => (
                  <motion.div initial={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      key={index}
                      href={link}
                      onClick={() => setIsOpen(false)}
                      className={[
                        "rounded-full text-center transition",
                        pathName === link
                          ? "bg-enviro-green-100 px-3 text-white"
                          : "text-black",
                      ].join(" ")}
                    >
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative hidden h-45 w-full md:block">
        <Image
          className="overflow-hidden object-cover object-top"
          src={navbarBg}
          alt="NavBar Background"
          fill
        />

        <div className="absolute inset-0 -top-5 z-10 flex lg:-top-7 lg:px-6">
          <Link href="/">
            <Image
              className="mt-5 -ml-5 shrink-0 scale-80 hover:cursor-pointer lg:scale-90 xl:-ml-3 xl:scale-100"
              src={enviroLogo}
              alt="Environmental Science Club Logo"
              width={180}
            />
          </Link>

          <div className="mr-7 -mb-2 ml-auto flex items-center justify-end gap-6 text-3xl hover:cursor-pointer lg:gap-10 lg:text-4xl 2xl:text-5xl">
            {navigations.map(({ link, name }, index) => (
              <motion.div
                key={index}
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={link}
                  className={[
                    "flex items-center rounded-full transition",
                    pathName === link
                      ? "bg-enviro-green-100 px-6 text-white"
                      : "text-black",
                  ].join(" ")}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
