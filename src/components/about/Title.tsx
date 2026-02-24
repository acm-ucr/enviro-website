import AboutBG from "@/public/About/AboutBG.webp";
import Image from "next/image";

const Title = () => {
  return (
    <div className="relative w-full items-center">
      <Image src={AboutBG} alt="About Background" className="z-0 w-full px-5" />
      <div className="font-enviro-single-day absolute z-10 items-center justify-center text-9xl text-white">
        [ About US ]
      </div>
    </div>
  );
};

export default Title;
