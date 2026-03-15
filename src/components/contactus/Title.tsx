import Image from "next/image";
import grid from "@/public/Grid.webp";
import line from "@/public/ContactUs/contactheader.svg";

const Title = () => {
  return (
    <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center md:min-h-screen">
      <Image
        src={grid}
        alt="grid"
        className="absolute -z-10 h-full object-cover"
      />

      <div className="font-enviro-single-day text-enviro-green-300 mt-5 text-center text-5xl md:mt-0 md:text-9xl">
        Contact Us
      </div>

      <Image src={line} alt="line" className="w-2/3 md:mt-4 md:w-1/2" />
    </div>
  );
};

export default Title;
