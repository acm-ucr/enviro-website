import Image, { StaticImageData } from "next/image";
import photoFrame from "@/public/Board/BoardBG.webp";
import circle from "@/public/Board/Ellipse.png";

interface GalleryImage {
  image: StaticImageData;
  name: string;
  title: string;
  scale: number;
}

interface GridProps {
  images: GalleryImage[];
  cols: 2 | 3;
  itemHeight?: string;
  circleSize?: string;
}

const Grid = ({ images, cols, itemHeight = "h-56", circleSize="w-[55%]"}: GridProps) => {
  const colClass = cols === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className={`grid ${colClass} justify-items-center gap-x-90 gap-y-20`}>
      {images.map((img, i) => (
        <div key={i} className="text-center">
          <div className={`relative mx-auto h-[442px] w-[442px] ${itemHeight}`}>
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
                    className="object-cover object-center"
                    src={img.image}
                    alt={`Picture of ${img.name}`}
                    style={{ transform: `scale(${img.scale})` }}
                    fill
                  />
                </div>
                  <Image
                  src={circle}
                  alt=""
                  fill
                  className="object-contain scale-[1.01]"
                />
              </div>
            </div>
          </div>
                  <div className="mt-6 h-24 flex flex-col items-center justify-start">
          <p className="font-enviro-single-day text-enviro-green-200 text-4xl font-normal leading-none whitespace-nowrap">
            {img.title}
          </p>
          <p className="text-2xl text-enviro-green-200 font-open-sans mt-2 font-normal leading-none whitespace-nowrap">
            {img.name}
          </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
