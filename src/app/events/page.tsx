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
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
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
              <div className="bg-enviro-gray-100 mx-5 flex flex-col pb-4 shadow-lg">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={eventPic1}
                    alt="Group Picture"
                    fill
                    className="border-enviro-green-400 border object-cover p-2"
                  />
                </div>
                <div className="font-enviro-single-day text-center text-xl">
                  Event Name
                </div>
                <div className="font-enviro-single-day text-center text-sm">
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
              className="absolute top-3 left-0 w-1/5 translate-x-2"
            />
            <Image
              src={Flower}
              alt=""
              className="absolute right-0 bottom-19 w-1/8 -translate-x-4"
            />
          </div>

          <div className="relative w-1/4">
            <div className="bg-enviro-green-50 rounded-3xl pt-8 pb-8">
              <div className="bg-enviro-gray-100 mx-5 pb-4 shadow-lg">
                <Image
                  src={eventPic2}
                  alt="Group Picture"
                  className="border-enviro-green-400 relative border object-cover p-2"
                />
                <div className="font-enviro-single-day text-center text-xl">
                  Event Name
                </div>
                <div className="font-enviro-single-day text-center text-sm">
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
              className="absolute top-2 right-2 w-1/5"
            />
            <Image
              src={Flower}
              alt=""
              className="absolute bottom-22 left-0 w-1/8 translate-x-3"
            />
          </div>
        </div>

        <Button>See More </Button>
      </div>
    </div>
  );
};

export default Events;
