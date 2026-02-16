import Image from "next/image";
import Grid from "./Grid";
import boardInfo from "@/data/BoardInfo";
import paper from "@/public/RippedPaper.webp";

const Board = () => {
  const firstRow = boardInfo.slice(0, 2);
  const rest = boardInfo.slice(2);
  return (
    <div className="text-enviro-green-200 w-full min-h-screen relative flex flex-col items-center">
      <Image
      className = "object-cover object-top -z-10"
      src = {paper}
      alt = "Board background"
      fill
      />
      <h1 className="z-10 font-enviro-single-day pt-130 text-9xl font-normal">
        Board
      </h1>
      <div className="z-10 mt-16 w-[1100px] space-y-16 pb-20">
        <Grid images={firstRow} cols={2} itemHeight="h-70" circleSize="w-[61%]" />
        <Grid images={rest} cols={3} itemHeight="h-60" circleSize="w-[61%]" />

      </div>
    </div>
  );
};

export default Board;