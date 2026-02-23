import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  width?: string;
  text?: string;
}

const Button = ({ children, width, text }: ButtonProps) => {
  return (
    <div className={`bg-enviro-green-50 ${width} px-2 py-2 shadow-md`}>
      <div className="relative">
        <Image src={Border} alt="" className="h-auto w-full rounded-xs" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className={`text-enviro-green-200 ${text} font-enviro-open-sans`}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;
