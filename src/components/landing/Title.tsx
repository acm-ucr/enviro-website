import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
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
                text-enviro-green-400
                whitespace-nowrap
                text-4xl md:text-6xl
                mt-[clamp(-10rem,5vw,2rem)]
              "
            >
              Environmental Science Club
            </h1>

            <p className="font-enviro-open-sans font-semibold text-1xl md:text-2xl tracking-normal text-enviro-green-300 leading-loose mb-5 mt-6 md:mt-10 max-w-md">
              Informing, empowering, and
              mobilizing students to lead
              sustainability efforts at UC Riverside.
            </p>

            <div className="mt-2 md:mt-10">
                  <div className="bg-enviro-green-100 w-1/2 px-2 py-2">
                <div className="relative">
                  <Image src={Border} alt="" className="h-auto w-full rounded-xs" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-enviro-green-300">Contact Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end translate-x-20 md:translate-x-5 translate-y-[-2.5rem] md:translate-y-0 w-full">
            <Image
              src={Logo}
              alt="Environmental Science Club @ UCR Logo"
              className="w-3/5 md:w-full h-auto drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
