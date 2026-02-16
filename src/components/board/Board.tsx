import Image from "next/image";
import Grid from "./Grid";
import boardInfo from "@/data/BoardInfo";
import paper from "@/public/webpPaper.webp";

const Board = () => {
  const firstRow = boardInfo.slice(0, 2);
  const rest = boardInfo.slice(2);
  return (
    <div className="text-enviro-green-200 relative flex min-h-screen w-full flex-col items-center">
      <Image
        className="-z-10 object-cover object-top"
        src={paper}
        alt="Board background"
        fill
      />
      <h1 className="font-enviro-single-day z-10 pt-130 text-9xl font-normal">
        Board
      </h1>
      <div className="z-10 mt-16 w-[1100px] space-y-16 pb-20">
        <Grid
          images={firstRow}
          cols={2}
          itemHeight="h-70"
          circleSize="w-[61%]"
        />
        <Grid images={rest} cols={3} itemHeight="h-60" circleSize="w-[61%]" />
      </div>
    </div>
  );
};

export default Board;
