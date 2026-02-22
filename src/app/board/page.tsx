import Image from "next/image";
import Grid from "@/components/board/Grid";
import boardInfo from "@/data/BoardInfo";
import BoardBG from "@/public/Board/BoardBackground.webp";

const Board = () => {
  const firstRow = boardInfo.slice(0, 2);
  const rest = boardInfo.slice(2);
  return (
    <div className="text-enviro-green-200 relative flex min-h-screen w-full flex-col items-center pt-50">
      <Image
        className="object-cover object-top"
        src={BoardBG}
        alt="Board background"
        fill
      />
      <div className="font-enviro-single-day z-10 pt-10 text-9xl">Board</div>
      <div className="z-10 mt-16 mb-50 w-full px-10">
        <Grid
          images={firstRow}
          cols={2}
          itemHeight="h-7/12"
          circleSize="w-7/12"
        />
        <Grid images={rest} cols={3} itemHeight="h-9/12" circleSize="w-7/12" />
      </div>
    </div>
  );
};

export default Board;
