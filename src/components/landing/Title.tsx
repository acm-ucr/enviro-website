import Image from "next/image";
import Logo from "@/public/logo.webp";
import NotebookBackground from "@/public/line-paper.webp";
import Button from "../Button";

const Title = () => {
  return (
    <div className="w-full">
      <Image
        className="absolute -top-6 -left-3 -z-1 w-screen origin-top-left scale-200 md:-top-15 md:-top-[1.75%] md:-left-0 lg:-top-6 lg:scale-100 xl:-top-14"
        src={NotebookBackground}
        alt="Notebook Background"
      />
      <div className="mx-auto w-full px-2">
        <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-left">
          <div className="mt-[7%] flex w-4/6 flex-col md:-mt-50 md:ml-[10%] md:w-3/6">
            <div className="font-enviro-single-day text-enviro-green-300 text-3xl md:text-4xl md:whitespace-nowrap lg:text-5xl xl:text-7xl">
              Environmental Science Club
            </div>

            <div className="font-enviro-open-sans text-enviro-green-200 max-w-lg text-sm leading-relaxed font-semibold md:text-lg lg:text-2xl xl:text-3xl">
              Informing, empowering, and mobilizing students to lead
              sustainability efforts at UC Riverside.
            </div>
          </div>
          <Image
            src={Logo}
            alt="Environmental Science Club @ UCR Logo"
            className="w-3/5 object-contain drop-shadow-md md:-ml-[5%] md:w-full"
          />
        </div>
        <div className="z-10 -mt-10 w-full scale-50 md:m-15 md:-mt-[15%] md:ml-[10%] md:w-1/4 md:scale-100">
          <Button
            href=""
            children={"Contact Us"}
            textSize="text-4xl md:text-2xl lg:text-3xl xl:text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
