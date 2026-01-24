"use client";

import Link from "next/link";
import Image from "next/image";
import enviroLogo from "@/public/logo.webp";
import navigations from "@/data/NavBarLinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-enviro-blue-100 font-enviro-single-day flex h-36 items-center justify-between text-black">
      <div className="ml-4">
        <Image
          src={enviroLogo}
          alt="Enviromental Science Club Logo"
          width={150}
        />
      </div>

      <div className="mr-10 flex items-center justify-center gap-16 text-4xl">
        {navigations.map(({ link, name }, index) => (
          <div key={index}>
            <Link
              href={link}
              className={pathName === link ? "text-white" : "text-black"}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
