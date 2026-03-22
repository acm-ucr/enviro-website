import Image from "next/image";
import Grid from "@/components/board/Grid";
import boardInfo from "@/data/BoardInfo";
import BoardBG from "@/public/Board/BoardBackground.webp";

const Board = () => {
  const firstRow = boardInfo.slice(0, 2);
  const rest = boardInfo.slice(2);
  return (
    <div className="text-enviro-green-200 relative flex min-h-screen w-full overflow-x-hidden">
      <Image
        className="object-cover object-top"
        src={BoardBG}
        alt="Board background"
        fill
      />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center pt-28 md:pt-50">
        <div className="font-enviro-single-day z-10 pt-18 text-6xl sm:text-7xl md:pt-10 md:text-8xl xl:text-9xl">
          Board
        </div>

        <div className="mt-10 mb-20 w-full md:hidden md:px-10">
          <Grid images={boardInfo} />
        </div>
        <div className="hidden w-full px-10 md:mt-16 md:mb-50 md:block">
          <div className="flex flex-col gap-y-28">
            <Grid images={firstRow} />
            <Grid images={rest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
