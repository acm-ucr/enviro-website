import Image, { StaticImageData } from "next/image";
import photoFrame from "@/public/Board/BoardBG.webp";

export interface GalleryImage {
  image: StaticImageData;
  name: string;
  title: string;
}

interface BoardCardProps {
  img: GalleryImage;
  itemHeight: string;
  circleSize: string;
}

const BoardCard = ({ img, itemHeight, circleSize }: BoardCardProps) => (
  <div className="w-full text-center">
    <div className={`relative mx-auto aspect-square ${itemHeight}`}>
      <Image
        className="object-contain"
        src={photoFrame}
        fill
        alt="Photo frame"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative aspect-square ${circleSize}`}>
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <Image
              className="border-enviro-green-200 rounded-full border-2 object-cover object-center md:border-4"
              src={img.image}
              alt={`Picture of ${img.name}`}
              fill
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-3 flex min-h-[4.5rem] flex-col items-center justify-start md:mt-6 md:h-24">
      <div className="font-enviro-single-day text-enviro-green-200 text-2xl leading-tight font-normal md:text-4xl md:leading-none md:whitespace-nowrap">
        {img.title}
      </div>
      <div className="text-enviro-green-200 font-open-sans mt-1 text-sm leading-tight font-normal md:mt-2 md:text-2xl md:leading-none md:whitespace-nowrap">
        {img.name}
      </div>
    </div>
  </div>
);

export default BoardCard;
