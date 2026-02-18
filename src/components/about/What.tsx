import Image from "next/image";
import Leaf from "@/public/Leaf.webp";

const What = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-enviro-blue-100 font-enviro-single-day border-enviro-green-200 mt-12 flex w-4/12 items-center justify-center rounded-4xl border py-4 text-6xl">
        What Do We Do?
      </div>
      <div className="relative my-12 flex w-11/12">
        <Image
          src={Leaf}
          alt="Leaf"
          className="absolute -top-[50vh] -left-[1vw] z-0 scale-x-[-1]"
        />

        <div className="bg-enviro-blue-100 relative z-1 mb-10 flex justify-center overflow-hidden py-8 shadow-[0_-6px_2px_rgba(0,0,0,0.3)]">
          <div className="bg-enviro-gray-100 flex w-11/12 justify-center py-8">
            <div className="border-enviro-blue-100 flex w-11/12 justify-center border-3 border-dashed p-8">
              <div className="font-enviro-open-sans text-center text-3xl">
                We bring together students who share a passion for the
                environment through a variety of engaging events-social
                gatherings, nature trips, expert talks, and volunteer projects.
                These activities give our members opportunities to connect,
                explore, and make a tangible impact on local and global
                environmental challenges.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-enviro-green-100 font-enviro-single-day border-enviro-green-200 -mt-6 mb-5 flex w-8/12 items-center justify-center rounded-4xl border py-4 text-center text-6xl text-white">
        What if I'm not an environmental science major? Can I still join?
      </div>

      <div className="relative my-16 flex w-11/12">
        <Image
          src={Leaf}
          alt="Leaf"
          className="absolute -top-[23vw] -right-[2vw] z-2 scale-[0.9]"
        />

        <div className="bg-enviro-green-200 relative z-3 flex justify-center overflow-hidden py-8 shadow-[0_-6px_2px_rgba(0,0,0,0.3)]">
          <div className="bg-enviro-gray-100 flex w-11/12 justify-center py-8">
            <div className="border-enviro-green-200 font-enviro-open-sans flex w-11/12 justify-center border-3 border-dashed p-8">
              <div className="text-center text-3xl">
                Our club is open to all students, regardless of major. By
                approaching challenges from a multidisciplinary perspective, we
                believe we can create more innovative and creative solutions. No
                matter your background, if you're passionate about the planet,
                there's a place for you in our community.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-enviro-green-100 absolute -top-[8vh] -left-[2vw] z-4 flex w-1/4 -rotate-5 items-center justify-center py-2 shadow-[0_-6px_2px_rgba(0,0,0,0.3)]">
          <div className="bg-enviro-gray-100 flex w-11/12 justify-center py-2">
            <div className="border-enviro-green-100 text-enviro-green-100 flex w-11/12 justify-center border-3 border-dashed py-4 text-center text-3xl font-semibold">
              ABSOLUTELY!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
