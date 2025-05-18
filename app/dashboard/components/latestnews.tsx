import Circle from "@/app/Components/circle";
import { title } from "process";
import Image from "next/image";
import Table from "./table";

export default function LatestNews() {
  const add = "/credit.svg";

  return (
    <div className="w-full bg-blue-100">
      <div className="flex h-4 text-base text-black">
        <div className=" my-2 w-4">
          <Circle size="w-2 h-2" color="bg-green-600" />
        </div>
        <b>Latest News</b>
      </div>
      <div className="text-black m-2 float-right">
        <div>By Vertical</div>
      </div>
      {/*table*/}
      <div className="mt-7 h-86 bg-white-300 mb-6">
        <Table />
      </div>
    </div>
  );
}
