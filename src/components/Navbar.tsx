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
    <div className="font-enviro-single-day relative h-40 w-full text-black">
      <Image
        className="overflow-hidden object-cover object-top"
        src={navbarBg}
        alt="navbar background"
        fill
      />

      <div className="absolute inset-0 z-10 flex px-6">
        <Image
          className="-ml-5 shrink-0 scale-85"
          src={enviroLogo}
          alt="Enviromental Science Club Logo"
          width={170}
        />

        <div className="ml-auto flex items-center justify-end gap-20 text-4xl">
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
