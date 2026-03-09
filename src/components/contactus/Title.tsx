import Image from "next/image";
import grid from "@/public/Grid.webp";
const Title = () => {
  return (
  <div className="relative min-h-screen w-full flex justify-center items-start md:items-center">
    <Image
          className="top-35 lg:top-0 absolute -z-10 w-full object-cover"
          src={grid}
          alt="grid"
        />
      <div className="pt-50 md:pt-0 text-5xl md:text-9xl font-enviro-single-day text-enviro-green-300">
        Contact Us
        </div>

  </div>);
};

export default Title;
