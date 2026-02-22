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
      <div className="bg-enviro-blue-100 absolute inset-0 -z-10 -mt-10 scale-x-[117.5%] opacity-31" />
      <div className="relative z-10 my-10 flex items-center justify-center text-white">
        <Subheading title="Get Involved" bg="bg-enviro-green-100" text="" />
      </div>

      <div className="relative flex w-full items-center justify-evenly px-8">
        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={GreenFlower}
            alt="Flower"
            className="-translate-x-[15%] translate-y-[4.7%]"
          />
          <div className="absolute inset-0 -top-[22vh] -left-[8.3vw] flex items-center justify-center">
            <Link href={flower0.link} target="_blank">
              <flower0.Icon className="text-7xl text-white" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <Image src={BlueFlower} alt="Flower" className="translate-y-[0%]" />
          <div className="absolute inset-0 -top-[36vh] left-[0.2vw] flex items-center justify-center">
            <Link href={flower1.link} target="_blank">
              <flower1.Icon className="text-7xl text-white" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={GreenFlower}
            alt="Flower"
            className="translate-x-[15%] translate-y-[4.7%]"
          />
          <div className="absolute inset-0 -top-[22vh] -right-[7.3vw] flex items-center justify-center">
            <Link href={flower2.link} target="_blank">
              <flower2.Icon className="text-7xl text-white" />
            </Link>
          </div>
        </div>

        <Image
          src={Hill}
          alt="Hill"
          className="absolute right-0 bottom-3 left-0 z-0 h-auto w-full scale-x-[117.5%] scale-y-[115.5%]"
        />
        <Image
          src={Grass}
          alt="Grass"
          className="absolute bottom-[15vh] left-[21vw] z-10"
        />
        <Image
          src={Grass}
          alt="Grass"
          className="absolute right-[27vw] bottom-[5vh] z-10"
        />
        <Image
          src={Grass}
          alt="Grass"
          className="absolute right-[19vw] bottom-[27vh] z-10"
        />
      </div>
    </div>
  );
};

export default GetInvolved;
