import Subheading from "@/components/Subheading";
import Image from "next/image";
import GreenFlower from "@/public/Home/Greenflower.webp";
import BlueFlower from "@/public/Home/BlueFlower.webp";
import Hill from "@/public/Home/Hill.svg";
import Grass from "@/public/Home/Grass.svg";
import Link from "next/link";
import footerData from "@/data/footer";

const GetInvolved = () => {
  const [flower0, flower1, flower2] = footerData;

  return (
    <div className="relative min-h-screen w-full">
      <div className="bg-enviro-blue-100 absolute inset-0 -z-10 -mt-10 w-full opacity-31" />
      <div className="relative z-10 my-10 flex items-center justify-center text-white">
        <Subheading title="Get Involved" bg="bg-enviro-green-100" text="" />
      </div>

      <div className="relative flex w-full items-center justify-evenly px-8">
        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={GreenFlower}
            alt="Flower"
            className="-translate-x-[15%] translate-y-[4.7%] sm:-translate-x-[5%] sm:translate-y-[3%] lg:translate-y-[5%]"
          />
          <div className="absolute inset-0 -top-[22vh] -left-[8.3vw] flex items-center justify-center">
            <Link href={flower0.link} target="_blank">
              <flower0.Icon className="translate-y-8 text-7xl text-white sm:translate-x-4 sm:translate-y-12 sm:scale-50 md:translate-x-5 md:translate-y-10 md:scale-70 lg:translate-x-14 lg:translate-y-6 lg:scale-100" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={BlueFlower}
            alt="Flower"
            className="translate-y-[0%] sm:-translate-y-[2%] lg:-translate-y-[0%]"
          />
          <div className="absolute inset-0 -top-[36vh] left-[0.2vw] flex items-center justify-center">
            <Link href={flower1.link} target="_blank">
              <flower1.Icon className="text-7xl text-white sm:translate-y-19 sm:scale-70 md:translate-y-16 md:scale-90 lg:translate-y-8 lg:scale-110" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={GreenFlower}
            alt="Flower"
            className="translate-x-[15%] translate-y-[4.7%] sm:translate-x-[5%] sm:translate-y-[3%] lg:translate-y-[4.7%]"
          />
          <div className="absolute inset-0 -top-[22vh] -right-[7.3vw] flex items-center justify-center">
            <Link href={flower2.link} target="_blank">
              <flower2.Icon className="text-7xl text-white sm:-translate-x-4 sm:translate-y-12 sm:scale-50 md:-translate-x-5 md:translate-y-10 md:scale-70 lg:-translate-x-13 lg:translate-y-7 lg:scale-100" />
            </Link>
          </div>
        </div>

        <Image
          src={Hill}
          alt="Hill"
          className="absolute right-0 bottom-3 left-0 z-0 h-auto w-full scale-y-[115.5%]"
        />
        <Image
          src={Grass}
          alt="Grass"
          className="absolute bottom-[15vh] left-[21vw] z-10 sm:bottom-[6vh] sm:left-[25vw] sm:scale-50 md:scale-60 lg:bottom-[13vh] lg:left-[18vw] lg:scale-100"
        />
        <Image
          src={Grass}
          alt="Grass"
          className="absolute right-[27vw] bottom-[5vh] z-10 sm:bottom-[1vh] sm:left-[53vw] sm:scale-50 md:scale-60 lg:left-[38vw] lg:scale-100"
        />
        <Image
          src={Grass}
          alt="Grass"
          className="absolute right-[19vw] bottom-[27vh] z-10 sm:bottom-[8vh] sm:left-[60vw] sm:scale-50 md:bottom-[13vh] md:left-[63vw] md:scale-60 lg:bottom-[22vh] lg:left-[46vw] lg:scale-100"
        />
      </div>
    </div>
  );
};

export default GetInvolved;
