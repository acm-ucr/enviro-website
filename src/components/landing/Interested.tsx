import Image from "next/image";
import Join1 from "@/public/Home/Join1.webp";
import Join2 from "@/public/Home/Join2.webp";
import Tape from "@/public/tape.webp";
import Button from "@/components/Button";
import SquigglyLine2 from "@/public/Home/SquigglyLine2.webp";
import RippedPaperBlue from "@/public/RippedPaperBlue.webp";

const Interested = () => {
  return (
    <div className="relative grid">
      <Image
        src={RippedPaperBlue}
        alt="Ripped Paper Background"
        className="z-0 col-start-1 row-start-1 w-full"
      />
      <div className="z-10 col-start-1 row-start-1 mt-80 flex flex-row">
        <div className="text-enviro-green-300 ml-10 flex w-4/10 flex-col gap-y-10">
          <div className="flex flex-col items-center">
            <p className="font-enviro-single-day text-6xl">
              Interested in joining?
            </p>
            <Image
              src={SquigglyLine2}
              alt="squiggly line"
              className="w-auto pt-3"
            />
          </div>
          <p className="font-enviro-open-sans w-fit items-center text-3xl font-bold">
            Join our community of students passionate about sustainability! Get
            access to speaker events, volunteer opportunities, and hands-on
            climate resilience initiatives!
          </p>
          <div className="w-2/3">
            <Button href="" textSize="text-4xl">
              Join Here
            </Button>
          </div>
        </div>
        <div className="absolute right-96 z-10 -rotate-3">
          <div className="bg-enviro-gray-100 border-enviro-green-200 relative border-2 p-4 pb-20 shadow-md shadow-gray-500">
            <Image
              src={Tape}
              alt="tape"
              className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-85"
            />
            <Image
              src={Join1}
              alt="club booth"
              className="border-enviro-green-200 w-sm border-2"
            />
          </div>
        </div>
        <div className="mt-20 ml-100 rotate-6">
          <div className="bg-enviro-gray-100 border-enviro-green-200 relative border-2 p-4 pb-20 shadow-md shadow-gray-500">
            <Image
              src={Tape}
              alt="tape"
              className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-85"
            />
            <Image
              src={Join2}
              alt="club booth 2"
              className="border-enviro-green-200 w-sm border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
