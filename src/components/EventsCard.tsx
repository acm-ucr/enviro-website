import Link from "next/link";
import Image from "next/image";
import RSVP_Button from "@/public/RSVP Button.webp";

interface EventCardProp {
  eventName: string;
  location: string;
  desc: string;
  month: string;
  day: string;
  time: string;
  link: string;
}

const EventCard = ({
  eventName,
  location,
  desc,
  month,
  day,
  time,
  link,
}: EventCardProp) => {
  return (
    <div className="font-enviro-open-sans text-enviro-green-300 flex h-60 w-full rounded-tl-2xl rounded-bl-2xl shadow-md shadow-gray-500 md:h-72">
      <div className="bg-enviro-blue-100 flex w-1/4 rounded-tl-2xl rounded-bl-2xl p-[3%]">
        <div className="bg-enviro-gray-100 border-enviro-green-300 flex w-full flex-col justify-center rounded-xl border-1 text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <p>{month}</p>
          <p>{day}</p>
          <p className="pt-3 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {time}
          </p>
        </div>
      </div>
      <div className="bg-enviro-gray-100 border-enviro-green-300 relative flex w-3/4 flex-col gap-y-2 border-t-1 border-r-1">
        <div className="bg-enviro-green-200 text-enviro-green-50 mt-3 ml-[6%] w-fit rounded-3xl px-5 py-1 text-xl md:text-2xl lg:px-7 lg:text-3xl xl:text-4xl 2xl:text-5xl">
          {eventName}
        </div>
        <p className="ml-[8%] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {location}
        </p>
        <p className="mx-auto w-5/6 text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
          {desc ? desc : "No event details"}
        </p>
        <div className="mt-auto ml-auto pr-5">
          <Link href={link} className="relative inline-block">
            <Image
              src={RSVP_Button}
              alt="RSVP"
              className="h-auto w-20 md:w-32"
            />
            <p className="absolute inset-0 mr-3 flex items-center justify-center text-base font-bold hover:underline md:text-xl">
              RSVP
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
