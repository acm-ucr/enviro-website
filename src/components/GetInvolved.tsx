import React from "react";
import Subheading from "@/components/Subheading";
import Image from "next/image";
import GreenFlower from "@/public/Home/Greenflower.webp";
import BlueFlower from "@/public/Home/BlueFlower.webp";
import Hill from "@/public/Home/Hill.svg";
import Grass from "@/public/Grass.webp";
import Link from "next/link";
import footerData from "@/data/footer";

const flowers = [
  {
    src: GreenFlower,
    offset: "translate-y-16",
    iconOffset: "-translate-x-0.25 -translate-y-2",
  },
  { src: BlueFlower, offset: "translate-y-9", iconOffset: "-translate-y-5" },
  {
    src: GreenFlower,
    offset: "translate-y-16",
    iconOffset: "-translate-x-0.25 -translate-y-2",
  },
];

const GetInvolved = () => {
  return (
    <div className="w-full">
      <div className="my-10 flex items-center justify-center text-white">
        <Subheading title="Get Involved" bg="bg-enviro-green-100" text="" />
      </div>

      <div className="relative flex items-center justify-evenly">
        {flowers.map((flower, index) => {
          const { Icon, link } = footerData[index];

          return (
            <div
              key={index}
              className="relative z-10 flex items-center justify-center"
            >
              <Image
                src={flower.src}
                alt=""
                className={`scale-[90%] ${flower.offset}`}
              />

              <div className="absolute inset-0 flex scale-[450%] items-center justify-center">
                <Link href={link} target="_blank">
                  <Icon className={`text-white ${flower.iconOffset}`} />
                </Link>
              </div>
            </div>
          );
        })}

        <Image
          src={Hill}
          alt=""
          className="absolute z-0 h-auto w-auto translate-y-57"
        />
        <Image
          src={Grass}
          alt=""
          className="absolute z-10 -translate-x-65 translate-y-50 scale-[0.4]"
        />
        <Image
          src={Grass}
          alt=""
          className="absolute z-10 translate-x-70 translate-y-33 scale-[0.4]"
        />
        <Image
          src={Grass}
          alt=""
          className="absolute z-10 translate-x-35 translate-y-70 scale-[0.4]"
        />
      </div>
    </div>
  );
};

export default GetInvolved;
