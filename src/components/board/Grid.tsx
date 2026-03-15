import BoardCard, { GalleryImage } from "@/components/board/Card";

interface GridProps {
  images: GalleryImage[];
  cols: 2 | 3;
  itemHeight?: string;
  circleSize?: string;
}

const Grid = ({
  images,
  cols,
  itemHeight = "h-7/12",
  circleSize = "w-1/2",
}: GridProps) => {
  const colClass = cols === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3";
  return (
    <div
      className={`grid ${colClass} -mb-6 justify-items-center gap-x-3 gap-y-8 md:-mb-20 md:gap-x-5 md:gap-y-10`}
    >
      {images.map((img, i) => {
        const isLastOddItem = images.length % 2 === 1 && i === images.length - 1;

        return (
          <div
            key={i}
            className={[
              "w-full max-w-[150px] md:max-w-none",
              isLastOddItem
                ? cols === 3
                  ? "col-span-2 justify-self-center md:col-span-1"
                  : "col-span-2 justify-self-center"
                : "",
            ].join(" ")}
          >
            <BoardCard
              img={img}
              itemHeight={itemHeight}
              circleSize={circleSize}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
