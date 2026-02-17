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
              className="border-enviro-green-200 rounded-full border-4 object-cover object-center"
              src={img.image}
              alt={`Picture of ${img.name}`}
              fill
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 flex h-24 flex-col items-center justify-start">
      <div className="font-enviro-single-day text-enviro-green-200 text-4xl leading-none font-normal whitespace-nowrap">
        {img.title}
      </div>
      <div className="text-enviro-green-200 font-open-sans mt-2 text-2xl leading-none font-normal whitespace-nowrap">
        {img.name}
      </div>
    </div>
  </div>
);

export default BoardCard;
