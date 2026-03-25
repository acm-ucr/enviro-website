import Image from "next/image";
import Logo from "@/public/logo.webp";
import NotebookBackground from "@/public/line-paper.webp";
import Button from "../Button";

const Title = () => {
  return (
    <div className="relative h-screen w-full">
      <div>
        <Image
          className="absolute -top-15 -z-1 w-full"
          src={NotebookBackground}
          alt="Notebook Background"
        />
      </div>
      <div className="mx-auto w-full px-2">
        <div className="p-l-5 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="mt-[12%] ml-[22%]">
            <div className="font-enviro-single-day text-enviro-green-300 text-2xl whitespace-nowrap md:text-4xl lg:text-7xl">
              Environmental Science Club
            </div>

            <div className="font-enviro-open-sans text-enviro-green-200 max-w-lg text-sm leading-relaxed font-semibold md:text-lg lg:text-4xl">
              Informing, empowering, and mobilizing students to lead
              sustainability efforts at UC Riverside.
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex w-full md:justify-end">
            <Image
              src={Logo}
              alt="Environmental Science Club @ UCR Logo"
              className="h-auto w-3/5 drop-shadow-md md:w-full"
            />
          </div>
        </div>
        <div className="z-10 -mt-[20%] ml-[10%] w-1/4">
          <Button
            href=""
            children={"Contact Us"}
            textSize="text-2xl lg:text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
