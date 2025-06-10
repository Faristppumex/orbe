"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/app/store/store";
import { fetchNews } from "@/app/store/slices/newsSlice";

export default function LatestNewspublic({ symbol }: { symbol: string }) {
  const dispatch = useAppDispatch();
  const news = useSelector((state: RootState) => state.news.items);
  const loading = useSelector((state: RootState) => state.news.loading);
  const error = useSelector((state: RootState) => state.news.error);

  useEffect(() => {
    if (symbol) {
      dispatch(fetchNews(symbol));
    }
    console.log("HIT");
  }, [dispatch, symbol]);

  return (
    <section className=" p-4 bg-white rounded-xl ">
      <h2 className="flex items-center font-semibold text-lg mb-2">
        <Image
          src="/news.svg"
          alt="News icon"
          width={20}
          height={20}
          className="mr-2"
        />
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
      {loading && <div className="mt-4 text-gray-500">Loading...</div>}
      {error && <div className="mt-4 text-red-500">Error: {error}</div>}

      <ul className="space-y-3 text-gray-800 mt-4 text-sm">
        {news.map((item, index) => (
          <li key={index} className="relative pl-6 leading-relaxed">
            <span className="absolute left-2 top-2 w-2 h-2 bg-gray-800 rounded-full" />
            <div className="line-clamp-3">{item.text}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
