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

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-enviro-single-day fixed top-0 left-0 right-0 z-50 w-full text-black">
      <div className="relative w-full overflow-hidden md:hidden">
            <Image
              src={isOpen ? navbarOpen : navbarClose}
              alt="Navbar background open"
              className={["block w-full h-auto origin-top transform-gpu", isOpen ? "scale-x-[1.04] scale-y-[1.02]" : "scale-x-[1.10] scale-y-[1.03]",].join (" ")}
                priority
            />

        <div className="absolute inset-0 z-10">
          <Link href="/" className="absolute left-4 items-center">
            <Image
              src={enviroLogo}
              alt="Environmental Science Club Logo"
              width={70}
              height={70}
              className="shrink-0"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 right-4 flex flex-col gap-2 p-2"
          >
            <span className="block h-0.5 w-7 bg-black"></span>
            <span className="block h-0.5 w-7 bg-black"></span>
            <span className="block h-0.5 w-7 bg-black"></span>
          </button>

          {isOpen && (
            <div className="pt-20">
              <div className="flex justify-center px-3">
                <Image
                  src={navbarLine}
                  alt=""
                  className="h-[1.5px] w-[90%] max-w-sm"
                />
              </div>

              <div className="mt-3 flex flex-col items-center gap-4 text-2xl">
                {navigations.map(({ link, name }, index) => (
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

        <div className="absolute inset-0 z-10 flex px-6">
          <Image
            className="-ml-5 shrink-0 scale-90"
            src={enviroLogo}
            alt="Environmental Science Club Logo"
            width={180}
          />

          <div className="ml-auto flex items-center justify-end gap-15 text-4xl">
            {navigations.map(({ link, name }, index) => (
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;