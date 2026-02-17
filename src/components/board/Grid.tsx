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
  const colClass = cols === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div
      className={`grid ${colClass} -mb-20 justify-items-center gap-x-5 gap-y-10`}
    >
      {images.map((img, i) => (
        <BoardCard
          key={i}
          img={img}
          itemHeight={itemHeight}
          circleSize={circleSize}
        />
      ))}
    </div>
  );
};

export default Grid;
