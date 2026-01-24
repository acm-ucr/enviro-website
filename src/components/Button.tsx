import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
import { ReactNode } from "react";

interface TitleProp {
  children: ReactNode;
}

const Button = ({ children }: TitleProp) => {
  return (
    <div className="bg-enviro-green-100 w-48 px-2 py-2">
      <div className="relative">
        <Image src={Border} alt="" className="h-auto w-full rounded-xs" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-enviro-green-300">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
