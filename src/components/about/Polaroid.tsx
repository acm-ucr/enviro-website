import Image from "next/image";
import Tape from "@/public/tape.webp";
import { StaticImageData } from "next/image";

interface PolaroidProp {
  picture: StaticImageData;
}

const Polaroid = ({ picture }: PolaroidProp) => {
  return (
    <div className="h-96 w-80 justify-center md:h-64 md:w-96 lg:h-96">
      <div className="bg-enviro-gray-100 border-enviro-green-200 relative h-full border-2 p-4 pb-15 shadow-[2px_4px_0px_rgba(0,0,0,0.3)]">
        <Image
          src={Tape}
          alt="tape"
          className="absolute -top-4 left-1/2 -translate-x-1/2 object-cover opacity-85"
        />
        <Image
          src={picture}
          alt="Group Photo"
          className="border-enviro-green-200 h-9/10 w-full border-2 object-cover"
        />
      </div>
    </div>
  );
};

export default Polaroid;
