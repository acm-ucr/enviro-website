import UpcomingEvents from "@/components/UpcomingEvents";
import Subheading from "@/components/Subheading";
import Button from "@/components/Button";
import Tape from "@/public/tape.webp";
import eventPic1 from "@/public/Events/Event1.webp";
import eventPic2 from "@/public/Events/Event2.webp";
import Image from "next/image";
import Flower from "@/public/Home/FlowerBG.webp";

const Events = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <UpcomingEvents />

      <div className="bg-enviro-green-200 flex w-screen flex-col items-center justify-center gap-8 p-8">
        <Subheading
          title="Past Events Highlights"
          bg="bg-enviro-green-100"
          text="text-white"
        />
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="relative w-1/4">
            <div className="bg-enviro-green-50 rounded-3xl pt-8 pb-8">
              <div className="bg-enviro-gray-100 mx-5 pb-10 shadow-lg">
                <Image
                  src={eventPic1}
                  alt="Group Picture"
                  className="border-enviro-green-400 relative top-2 scale-[0.93] border object-cover"
                />
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
              className="absolute -top-0 left-0 w-1/4 -translate-x-0"
            />
            <Image
              src={Flower}
              alt=""
              className="absolute right-0 bottom-15 w-1/8 -translate-x-3"
            />
          </div>

          <div className="relative w-1/4">
            <div className="bg-enviro-green-50 rounded-3xl pt-8 pb-8">
              <div className="bg-enviro-gray-100 mx-5 pb-10 shadow-lg">
                <Image
                  src={eventPic2}
                  alt="Group Picture"
                  className="border-enviro-green-400 relative top-2 scale-[0.93] border object-cover"
                />
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

        <Button>See More </Button>
      </div>
    </div>
  );
};

export default Events;
