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
      <div className="mx-auto w-6xl px-2">
        <div className="p-l-5 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="ml-5 pt-10">
            <div className="font-enviro-single-day text-enviro-green-300 text-4xl whitespace-nowrap md:text-6xl">
              Environmental Science Club
            </div>

            <div className="font-enviro-open-sans text-1xl text-enviro-green-200 my-6 max-w-lg leading-relaxed font-semibold md:text-3xl">
              Informing, empowering, and mobilizing students to lead
              sustainability efforts at UC Riverside.
            </div>

            <div className="mt-2 md:mt-10">
              <Button children={"Contact Us"} />
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
      </div>
    </div>
  );
};

export default Title;
