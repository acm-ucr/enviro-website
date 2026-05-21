import Earth from "@/public/Earth.webp";
import Image from "next/image";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="relative">
      <Image
        src={Earth}
        alt="Earth"
        className="absolute top-1/2 left-1/2 -z-10 w-11/12 -translate-x-1/2 -translate-y-1/2 opacity-10 sm:w-8/12 lg:w-6/12 xl:w-5/12"
      />
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-4 text-center sm:gap-y-8">
        <div className="font-enviro-single-day z-0 -mb-8 text-7xl sm:-mb-10 sm:text-8xl lg:-mb-12 lg:text-9xl">
          404
        </div>
        <div className="font-enviro-open-sans text-2xl sm:text-3xl lg:text-4xl">
          page not found
        </div>
        <div className="w-6/12 sm:w-5/12 lg:w-4/12 xl:w-3/12">
          <Button href="/" textSize="text-lg sm:text-2xl xl:text-3xl">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
