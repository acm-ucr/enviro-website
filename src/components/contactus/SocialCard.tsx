import Image from "next/image";
import card from "@/public/ContactUs/socialcard.webp";
import cardborder from "@/public/ContactUs/socialcardborder.svg";
import flower from "@/public/ContactUs/socialflower.webp";
import mobilecard from "@/public/ContactUs/mobilesocialcard.webp";
import mobileborder from "@/public/ContactUs/mobilesocialborder.webp";

import { IconType } from "react-icons";
import Link from "next/link";

interface SocialCardProps {
  name: string;
  link: string;
  at: string;
  Icon: IconType;
}

const SocialCard = ({ name, link, at, Icon }: SocialCardProps) => {
  return (
    <div className="relative flex w-fit flex-row items-center md:flex-col">
      <Image src={card} alt="card" className="hidden md:block" />
      <Image src={mobilecard} alt="card" className="md:hidden" />

      <Image
        src={cardborder}
        alt="border"
        className="absolute top-6 hidden md:block"
      />
      <Image
        src={mobileborder}
        alt="border"
        className="absolute inset-2.5 right-4 md:inset-0 md:top-6 md:hidden"
      />
      <Image
        src={flower}
        alt="flower"
        className="absolute left-5 w-1/4 md:top-20 md:left-auto md:w-2/5"
      />

      <div className="absolute left-10 flex flex-row items-center justify-between gap-6 md:inset-auto md:flex-col md:justify-center md:pt-34">
        <Icon className="text-enviro-green-200 text-3xl md:mb-12 md:text-7xl" />

        <div className="flex flex-col items-start md:items-center">
          <div className="font-enviro-open-sans text-enviro-gray-100 text-2xl md:mt-10 md:text-5xl">
            {name}
          </div>

          <Link
            href={link}
            target="_blank"
            className="font-enviro-open-sans text-enviro-gray-100 text-sm md:my-7 md:text-2xl"
          >
            {at}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
