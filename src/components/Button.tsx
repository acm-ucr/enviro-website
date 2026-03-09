import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  width?: string;
  text?: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div
      className={`bg-enviro-green-50 lg:6/12 xl:4/12 px-2 py-2 shadow-md sm:w-10/12 md:w-8/12`}
    >
      <div className="relative">
        <Image src={Border} alt="" className="h-auto w-full rounded-xs" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className={`text-enviro-green-200 font-enviro-open-sans sm:text-xl md:text-xl lg:text-2xl xl:text-3xl`}
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;
