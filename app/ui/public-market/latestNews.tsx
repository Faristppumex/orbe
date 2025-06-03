"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function LatestNewspublic() {
  const news = useSelector((state: RootState) => state.news.items);

  return (
    <section className=" p-4 bg-white rounded-xl ">
      <h2 className="flex items-center font-semibold text-lg mb-2">
        {/* <Image
          src="/news.svg"
          alt="News icon"
          width={20}
          height={20}
          className="mr-2"
        /> */}
        Latest News
        <Image
          src="/DotsThreeVertical.svg"
          alt="More"
          width={16}
          height={16}
          className="ml-auto"
        />
      </h2>
      <hr className="border-gray-200" />
      <ul className="space-y-3 text-gray-800 mt-4 text-sm">
        {news.map((point, index) => (
          <li key={index} className="relative pl-6 leading-relaxed">
            <span className="absolute left-2 top-2 w-2 h-2 bg-gray-800 rounded-full" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
