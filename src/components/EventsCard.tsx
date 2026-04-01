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
    <div className="font-enviro-open-sans text-enviro-green-300 flex h-48 w-full rounded-tl-2xl rounded-bl-2xl shadow-md shadow-gray-500">
      <div className="bg-enviro-blue-100 flex w-1/3 rounded-tl-2xl rounded-bl-2xl p-5">
        <div className="bg-enviro-gray-100 border-enviro-green-300 flex w-full flex-col justify-center rounded-xl border-1 text-center text-2xl md:text-4xl">
          <p>{month}</p>
          <p>{day}</p>
          <p className="pt-3 text-base md:text-lg">{time}</p>
        </div>
      </div>
      <div className="bg-enviro-gray-100 border-enviro-green-300 relative flex w-2/3 flex-col gap-y-2 border-t-1 border-r-1">
        <div className="bg-enviro-green-200 text-enviro-green-50 mt-3 ml-3 w-fit rounded-3xl px-5 text-xl md:text-2xl">
          {eventName}
        </div>
        <p className="ml-8 text-lg md:text-xl">{location}</p>
        <p className="ml-8 w-4/6 overflow-y-auto pb-8 text-sm md:text-base">
          {desc ? desc : "No event details"}
        </p>
        <div className="absolute right-5 bottom-3">
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
