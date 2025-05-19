import Circle from "@/app/Components/circle";
import { title } from "process";
import Image from "next/image";
import Table from "./table";
import News from "./news";

export default function LatestNews() {
  const add = "/credit.svg";

  return (
    <div className="w-full bg-white text-gray-700 font-semibold flex flex-col ">
      <div className="flex space-x-0">
        <div className="mt-2 ml-2 w-3 ">
          <Circle size="w-2 h-2" color="bg-green-700" />
        </div>
        Latest News
        <div className="mt-5 font-medium bg-white ml-auto mr-2 ">
          By Vertical ▾
        </div>
      </div>
      <div className="grid bg-white flex-1">
        <News />
      </div>
    </div>
  );
}
