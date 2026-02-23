import Subheading from "@/components/Subheading";
import Button from "@/components/Button";
import Tape from "@/public/tape.webp";
import eventPic1 from "@/public/Events/Event1.webp";
import eventPic2 from "@/public/Events/Event2.webp";
import Image from "next/image";
import Flower from "@/public/Home/FlowerBG.webp";
import GreenMiddle from "@/public/Events/GreenMiddle.webp";

const PastEvents = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-16 bg-[url(/Events/GreenBG.webp)] pt-16 pb-10">
      <Subheading
        title="Past Events Highlights"
        bg="bg-enviro-green-100"
        text="text-white"
      />
      <div className="flex flex-row items-center justify-center gap-x-16">
        <div className="relative w-1/3">
          <div className="bg-enviro-green-50 rounded-4xl px-4 py-8">
            <div className="bg-enviro-gray-100 mx-5 pb-5 shadow-lg">
              <Image
                src={eventPic1}
                alt="Group Picture"
                className="border-enviro-green-400 relative top-[2.5vh] left-[3vw] h-87 w-87 border object-cover object-center"
              />
              <div className="font-enviro-single-day pt-5 text-center text-5xl">
                Event Name
              </div>
              <div className="font-enviro-single-day text-center text-3xl">
                Month Year
              </div>
            </div>
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt="Tape"
            className="absolute top-5 left-1/2 w-1/2 -translate-x-1/2 opacity-80"
          />
          {/*Flower*/}
          <Image
            src={Flower}
            alt="Flower"
            className="absolute -top-0 left-0 w-1/4 -translate-x-0"
          />
          <Image
            src={Flower}
            alt="Flower"
            className="absolute right-0 bottom-15 w-1/8 -translate-x-3"
          />
        </div>

        <div className="relative w-1/3">
          <div className="bg-enviro-green-50 rounded-4xl pt-8 pb-8">
            <div className="bg-enviro-gray-100 mx-5 pb-10 shadow-lg">
              <Image
                src={eventPic2}
                alt="Group Picture"
                className="border-enviro-green-400 relative top-2 scale-[0.93] border object-cover"
              />
              <div className="font-enviro-single-day text-center text-5xl">
                Event Name
              </div>
              <div className="font-enviro-single-day text-center text-3xl">
                Month Year
              </div>
            </div>
          </div>
          {/* Tape */}
          <Image
            src={Tape}
            alt=""
            className="absolute top-5 left-1/2 w-1/2 -translate-x-1/2 opacity-80"
          />
          {/*Flower*/}
          <Image
            src={Flower}
            alt=""
            className="absolute -top-0 right-0 w-1/4"
          />
          <Image
            src={Flower}
            alt=""
            className="absolute bottom-15 left-0 w-1/8 translate-x-3"
          />
        </div>
      </div>

      <Button width="w-1/5" text="text-3xl">
        See More
      </Button>
      <Image
        src={GreenMiddle}
        alt="Green Middle Rip"
        className="absolute -top-20 z-10 w-full"
      />
    </div>
  );
};

export default PastEvents;
