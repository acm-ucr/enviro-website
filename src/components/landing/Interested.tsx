import Image from "next/image";
import Join1 from "@/public/Home/Join1.webp";
import Join2 from "@/public/Home/Join2.webp";
import Tape from "@/public/tape.webp";
import Button from "@/components/Button";
import SquigglyLine2 from "@/public/Home/SquigglyLine2.webp";
import RippedPaperBlue from "@/public/Home/RippedPaperBlue.webp";
import RippedPaperBlueMobile from "@/public/Home/RippedPaperBlueMobile.webp";

const Interested = () => {
  return (
    <div className="relative grid w-full -mb-[5%]">
      <Image
        src={RippedPaperBlue}
        alt="Ripped Paper Background"
        className="z-0 col-start-1 row-start-1 -mb-5 hidden w-full md:block"
      />
      <Image
        src={RippedPaperBlueMobile}
        alt="Ripped Paper Background"
        className="z-0 col-start-1 row-start-1 block w-full md:hidden"
      />
      <div className="z-10 col-start-1 row-start-1 mx-auto mt-40 flex w-11/12 flex-col md:mx-0 md:mt-[22%] md:w-full md:flex-row">
        <div className="text-enviro-green-300 flex w-full flex-col gap-y-[10%] md:ml-10 md:w-4/10">
          <div className="flex flex-col items-center">
            <p className="font-enviro-single-day mt-3 text-3xl lg:text-5xl xl:text-6xl">
              Interested in joining?
            </p>
            <Image
              src={SquigglyLine2}
              alt="squiggly line"
              className="w-auto pt-[3%]"
            />
          </div>
          <p className="font-enviro-open-sans text-md w-fit items-center text-center font-bold md:text-left md:text-sm lg:text-2xl xl:text-3xl">
            Join our community of students passionate about sustainability! Get
            access to speaker events, volunteer opportunities, and hands-on
            climate resilience initiatives!
          </p>
          <div className="mx-auto w-2/3 md:mx-0">
            <Button href="" textSize="text-lg md:text-2xl lg:text-4xl xl:text-5xl">
              Join Here
            </Button>
          </div>
        </div>
        <div className="my-auto flex w-full flex-row md:w-6/10">
          <div className="z-20 w-full -rotate-3 pl-[3%]">
            <div className="bg-enviro-gray-100 border-enviro-green-200 relative border-2 p-[4%] pb-[20%] shadow-md shadow-gray-500">
              <Image
                src={Tape}
                alt="tape"
                className="absolute -top-4 left-1/2 -translate-x-1/2 scale-50 opacity-85 md:scale-75 lg:scale-100"
              />
              <Image
                src={Join1}
                alt="club booth"
                className="border-enviro-green-200 border-2"
              />
            </div>
          </div>
          <div className="z-10 -ml-[5%] w-full rotate-8 pt-[6%] pr-[5%]">
            <div className="bg-enviro-gray-100 border-enviro-green-200 relative border-2 p-[4%] pb-[20%] shadow-md shadow-gray-500">
              <Image
                src={Tape}
                alt="tape"
                className="absolute -top-4 left-1/2 -translate-x-1/2 scale-50 opacity-85 md:scale-75 lg:scale-100"
              />
              <Image
                src={Join2}
                alt="club booth 2"
                className="border-enviro-green-200 border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
