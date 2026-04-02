import Image from "next/image";
import Logo from "@/public/logo.webp";
import NotebookBackground from "@/public/line-paper.webp";
import Button from "../Button";

const Title = () => {
  return (
    <div className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] relative -mt-[4%] md:-mt-[8%]">
      <Image
        className="absolute inset-0 -top-10 -left-3 -z-1 origin-top-left scale-y-[1.05] object-fill sm:scale-y-[1.15] md:-top-15 md:-left-0 md:scale-100 lg:-top-6 xl:-top-15 xl:scale-y-[1.3]"
        src={NotebookBackground}
        alt="Notebook Background"
        fill
      />
      <div className="mx-auto w-full px-2">
        <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-left">
          <div className="mt-[10%] flex w-4/6 flex-col md:-mt-30 md:ml-[10%] md:w-3/6">
            <div className="font-enviro-single-day text-enviro-green-300 text-3xl sm:text-6xl md:text-5xl md:whitespace-nowrap lg:text-6xl xl:text-7xl">
              Environmental Science Club
            </div>

            <div className="font-enviro-open-sans text-enviro-green-200 text-sm leading-relaxed font-semibold sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Informing, empowering, and mobilizing students to lead
              sustainability efforts at UC Riverside.
            </div>
          </div>
          <Image
            src={Logo}
            alt="Environmental Science Club @ UCR Logo"
            className="w-3/5 object-contain drop-shadow-md md:-ml-[10%] md:w-full md:scale-60 lg:-ml-[5%] lg:scale-80"
          />
        </div>
        <div className="z-10 w-5/12 mx-auto md:w-1/5 md:ml-[15%] md:-mt-[15%] mb-[9%]">
          <Button
            href="/contact"
            children={"Contact Us"}
            textSize="text-2xl text-2xl xl:text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
