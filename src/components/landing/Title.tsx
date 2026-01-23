import Image from "next/image";

import Logo from "@/public/logo.webp";
import NotebookBackground from "@/public/line-paper.webp";

const Title = () => {
  return (
    <div
      className="w-screen h-screen bg-top bg-no-repeat bg-cover px-4 sm:px-6 md:px-[8vw] lg:px-[10vw] py-3 sm:py-12 md:py-20"
      style={{ backgroundImage: `url(${NotebookBackground.src})` }}
    >
      <div className="mx-auto max-w-6xl px-2">
        <div className="grid items-center gap-[10%] grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div className="ml-5 md:ml-5">
            <h1
              className="
                font-enviro-single-day
                text-enviro-green-300
                whitespace-nowrap
                text-4xl md:text-6xl
                mt-[clamp(-10rem,5vw,2rem)]
              "
            >
              Environmental Science Club
            </h1>

            <p className="font-enviro-open-sans font-semibold text-2xl md:text-4xl tracking-normal text-enviro-green-200 leading-tight mt-6 md:mt-10 max-w-md">
              Informing, empowering, and
              mobilizing students to lead
              sustainability efforts at UC Riverside.
            </p>

            <div className="mt-2 md:mt-10">
              <button className="bg-enviro-green-300 hover:bg-enviro-green-400 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end translate-x-0 md:translate-x-5 translate-y-[-2.5rem] md:translate-y-0 w-full">
            <Image
              src={Logo}
              alt="Environmental Science Club @ UCR Logo"
              className="w-full h-auto drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
