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
    <div className="relative w-full">
      <div className="bg-enviro-blue-100 absolute inset-0 -z-10 -mt-[8%] w-full opacity-31" />
      <div className="relative z-10 my-[8%] flex items-center justify-center text-white">
        <Subheading title="Get Involved" bg="bg-enviro-green-100" text="" />
      </div>

      <div className="grid w-screen">
        <div className="col-start-1 row-start-1 flex w-screen items-center justify-between gap-x-[3%] px-[5%]">
          <div className="z-10 grid items-center justify-center">
            <Image
              src={GreenFlower}
              alt="Flower"
              className="col-start-1 row-start-1 translate-y-[4.7%] sm:translate-y-[3%] lg:translate-y-[5%]"
            />
            <div className="col-start-1 row-start-1 mb-[40%] flex items-center justify-center">
              <a href={flower0.link} target="_blank" rel="noopener noreferrer">
                <flower0.Icon className="translate-y-0 text-2xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
              </a>
            </div>
          </div>

          <div className="z-10 grid items-center justify-center">
            <Image
              src={BlueFlower}
              alt="Flower"
              className="col-start-1 row-start-1 translate-y-[0%] sm:-translate-y-[2%] lg:-translate-y-[0%]"
            />
            <div className="col-start-1 row-start-1 mb-[67%] flex justify-center text-center">
              <Link href={flower1.link} target="_blank">
                <flower1.Icon className="translate-y-0 text-2xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
              </Link>
            </div>
          </div>

          <div className="z-10 grid items-center justify-center">
            <Image
              src={GreenFlower}
              alt="Flower"
              className="col-start-1 row-start-1 translate-y-[4.7%] lg:translate-y-[4.7%]"
            />
            <div className="col-start-1 row-start-1 mb-[40%] flex justify-center">
              <Link href={flower2.link} target="_blank">
                <flower2.Icon className="translate-y-0 text-2xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="z-10 col-start-1 row-start-1 mt-auto flex w-full flex-row">
          <Image src={Grass} alt="Grass" className="mb-[5%] ml-[30%] w-1/12" />
          <Image src={Grass} alt="Grass" className="-mb-[8%] ml-[18%] w-1/12" />
          <Image src={Grass} alt="Grass" className="mb-[12%] ml-[2%] w-1/12" />
        </div>
        <Image
          src={Hill}
          alt="Hill"
          className="absolute bottom-0 z-0 -mb-2 w-full"
        />
      </div>
    </div>
  );
};

export default GetInvolved;
