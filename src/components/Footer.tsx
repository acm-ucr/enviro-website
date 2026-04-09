import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import footerData from "@/data/footer";

const Footer = () => {
  return (
    <div className="bg-enviro-blue-100 font-enviro-single-day text-enviro-gray-100 flex justify-between">
      <div className="flex">
        <Image
          src={Logo}
          alt="Environmental Science Club @ UCR Logo"
          className="h-auto w-1/5 object-contain"
        />
        <div className="mt-5 flex flex-col justify-center gap-y-2">
          <div>
            <div className="bg-enviro-gray-100 outline-enviro-green-300 inline-block p-1 shadow-md shadow-gray-500 outline-1 md:p-1.5 lg:p-2">
              <div className="bg-enviro-green-200 px-3 md:px-5 lg:px-8">
                <p className="font-enviro-bagel-fat-one pb-1 text-3xl [text-shadow:_1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000] md:pb-2 md:text-5xl lg:text-7xl">
                  ENSC
                </p>
              </div>
            </div>
          </div>
          <p className="text-md whitespace-nowrap md:text-3xl">
            ENVIRONMENTAL SCIENCE CLUB @ UCR
          </p>
        </div>
      </div>
      <div className="-mt-6 mr-[10vw] flex items-center lg:mt-0">
        <div className="flex flex-col gap-y-1 lg:gap-y-3">
          <p className="text-lg whitespace-nowrap md:text-4xl">Contact Us</p>
          <div className="flex justify-center gap-x-[20%]">
            {footerData.map(({ Icon, link }, index) => (
              <div key={index}>
                <Link href={link} target="_blank">
                  <Icon className="hover:text-enviro-green-200 w-auto transform text-2xl transition hover:scale-110 md:text-4xl lg:text-5xl" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
