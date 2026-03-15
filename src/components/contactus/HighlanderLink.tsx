import Image from "next/image";
import grid from "@/public/Grid.webp";
import arrow from "@/public/ContactUs/arrow.webp";
import Button from "@/components/Button";
import leaf from "@/public/Leaf.webp";

const HighlanderLink = () => {
  return (
    <div className="relative flex min-h-[40vh] w-full flex-col items-center justify-start gap-8 p-10 md:items-start">
      <Image
        src={grid}
        alt="grid"
        className="absolute inset-0 -z-10 h-full object-cover"
      />
      <div className="font-enviro-single-day text-enviro-green-200 pt-7 text-center text-5xl md:text-left md:text-6xl">
        We’re also on HighlanderLink!
      </div>

      <div className="flex w-2/3 md:ml-10 md:justify-end">
        <div className="hidden md:block">
          <Image src={arrow} alt="arrow" className="w-2/3 object-cover" />
        </div>

        <div className="mt-auto w-full md:mt-15 md:w-1/2">
          <Button width="w-1/2" text="text-2xl">
            Click Here
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-5 flex w-9/10 justify-between md:justify-end">
        <Image
          src={leaf}
          alt="leaf"
          className="w-1/5 scale-x-[-1] object-contain md:hidden"
        />
        <Image
          src={leaf}
          alt="leaf"
          className="w-1/5 object-contain md:w-1/10"
        />
      </div>
    </div>
  );
};

export default HighlanderLink;
