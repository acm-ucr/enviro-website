"use client";

import Link from "next/link";
import Image from "next/image";
import enviroLogo from "@/public/logo.webp";
import navbarBg from "@/public/Navbar.webp";
import navigations from "@/data/NavBarLinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="font-enviro-single-day grid w-full text-black">
      <Image
        className="z-0 col-start-1 row-start-1 w-full"
        src={navbarBg}
        alt="NavBar Background"
      />

      <div className="z-10 col-start-1 row-start-1 mx-6 flex">
        <Image
          className="-mt-[2%] -ml-5 w-1/10 object-contain"
          src={enviroLogo}
          alt="Environmental Science Club Logo"
        />

        <div className="ml-auto flex items-center justify-end gap-10 text-lg md:text-3xl lg:gap-15 lg:text-5xl">
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
  );
};

export default Navbar;
