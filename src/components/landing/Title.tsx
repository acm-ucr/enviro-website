import Image from "next/image";
import Border from "@/public/SquigglyBorder.svg";
import Logo from "@/public/logo.webp";
import NotebookBackground from "@/public/line-paper.webp";

const Title = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-top bg-no-repeat px-4 py-3 sm:px-6 sm:py-12 md:px-[8vw] md:py-20 lg:px-[10vw]"
      style={{ backgroundImage: `url(${NotebookBackground.src})` }}
    >
      <div className="mx-auto max-w-6xl px-2">
        <div className="grid grid-cols-1 items-center gap-[10%] md:grid-cols-2">
          {/* LEFT */}
          <div className="ml-5 md:ml-5">
            <h1 className="font-enviro-single-day text-enviro-green-400 mt-[clamp(-10rem,5vw,2rem)] text-4xl whitespace-nowrap md:text-6xl">
              Environmental Science Club
            </h1>

            <p className="font-enviro-open-sans text-1xl text-enviro-green-300 mt-6 mb-5 max-w-md leading-loose font-semibold tracking-normal md:mt-10 md:text-2xl">
              Informing, empowering, and mobilizing students to lead
              sustainability efforts at UC Riverside.
            </p>

            <div className="mt-2 md:mt-10">
              <button
                type="button"
                className="bg-enviro-green-100 w-1/2 px-2 py-2"
              >
                <div className="relative">
                  <Image
                    src={Border}
                    alt=""
                    className="h-auto w-full rounded-xs"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-enviro-green-300">Contact Us</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex w-full translate-x-20 translate-y-[-2.5rem] md:translate-x-5 md:translate-y-0 md:justify-end">
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
