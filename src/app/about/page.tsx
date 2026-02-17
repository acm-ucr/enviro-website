import Image from "next/image";
import Leaf from "@/public/Leaf.webp";

const About = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      {/* First question */}
      <div className="bg-enviro-blue-100 font-enviro-single-day border-enviro-green-200 mt-12 flex w-4/12 items-center justify-center rounded-4xl border py-4 text-3xl">
        What Do We Do?
      </div>

      {/* First answer */}
      <div className="relative my-12 flex w-3/4 justify-center">
        <Image
          src={Leaf}
          alt=""
          className="absolute top-0 left-0 z-0 -translate-x-1/3 -translate-y-10/12 scale-x-[-0.6]"
        />

        <div className="bg-enviro-blue-100 relative z-1 flex justify-center overflow-hidden py-6 shadow-[0_-6px_2px_rgba(0,0,0,0.3)]">
          <div className="flex w-11/12 justify-center bg-white py-6">
            <div className="border-enviro-blue-100 flex w-11/12 justify-center border-3 border-dashed py-6">
              <div className="w-10/12 text-center text-xl">
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

      {/* Second question */}
      <div className="bg-enviro-green-100 font-enviro-single-day border-enviro-green-200 -mt-6 flex w-5/12 items-center justify-center rounded-4xl border py-4 text-center text-3xl text-white">
        What if I'm not an environmental science major? Can I still join?
      </div>

      {/* Second answer */}
      <div className="relative my-16 flex w-3/4 justify-center">
        <Image
          src={Leaf}
          alt=""
          className="absolute top-0 right-0 z-2 translate-x-1/3 -translate-y-9/12 scale-[0.6]"
        />

        <div className="bg-enviro-green-200 relative z-3 flex justify-center overflow-hidden py-6 shadow-[0_-6px_2px_rgba(0,0,0,0.3)]">
          <div className="flex w-11/12 justify-center bg-white py-6">
            <div className="border-enviro-green-200 flex w-11/12 justify-center border-3 border-dashed py-6">
              <div className="w-10/12 text-center text-xl">
                Our club is open to all students, regardless of major. By
                approaching challenges from a multidisciplinary perspective, we
                believe we can create more innovative and creative solutions. No
                matter your background, if you're passionate about the planet,
                there's a place for you in our community.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-enviro-green-100 absolute top-0 left-0 z-4 flex w-1/4 -translate-x-1/12 -translate-y-8/12 -rotate-5 items-center justify-center py-2 shadow-[0_-6px_2px_rgba(0,0,0,0.3)]">
          <div className="flex w-11/12 justify-center bg-white py-2">
            <div className="border-enviro-green-100 text-enviro-green-100 flex w-11/12 justify-center border-3 border-dashed py-4 text-center font-medium">
              ABSOLUTELY!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
