"use client";

import Image from "next/image";

import { fetchKeyCompetitors } from "@/app/store/slices/keyCompetitors";
import { RootState, useAppDispatch } from "@/app/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function KeyCompetitors({ symbol }: { symbol: string }) {
  const dispatch = useAppDispatch();
  const { keyCompetitors, loading } = useSelector(
    (state: RootState) => state.keyCompetitors
  );
  useEffect(() => {
    console.log("keyCompetitors symbol", symbol);
    dispatch(fetchKeyCompetitors(symbol));
  }, [dispatch, symbol]);
  if (loading) {
    return (
      <div className="">
        <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
        <div className="flex mt-6 ml-6 gap-x-22 gap-y-10 flex-wrap">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center animate-pulse"
            >
              <div className="bg-gray-300 w-15 h-15 rounded-full mb-2" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (keyCompetitors.length == 0) {
    return (
      <>
        <div className=" h-full bg-gray-100 rounded">
          <div className="h-10 flex items-center content-center px-4 font-semibold bg-[#EDEDED]">
            <Image
              src={"/key-icon.svg"}
              alt={"s"}
              width={20}
              height={20}
              className="mr-2"
            />
            Key Competitors
          </div>
          <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
          {/* <hr className="" /> */}
          <span className="text-gray-500 flex text-lg justify-center h-full items-center font-semibold">
            Data Not Found
          </span>
        </div>
      </>
    );
  }
  console.log("key Competitors", keyCompetitors);
  function extractCompetitorData(
    arr: string[]
  ): { name: string; symbol: string }[] {
    const competitors: { name: string; symbol: string }[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "name" && arr[i + 1]) {
        const name = arr[i + 1];
        let symbol = "";
        // Look ahead for the next "symbol" entry
        for (let j = i + 2; j < arr.length; j++) {
          if (arr[j] === "symbol" && arr[j + 1]) {
            symbol = arr[j + 1];
            break;
          }
          if (arr[j] === "name") break; // Stop if next competitor starts
        }
        competitors.push({ name, symbol });
      }
    }
    return competitors;
  }
  const competitorData = extractCompetitorData(keyCompetitors);

  return (
    <div className=" rounded-xl md:w-1/2 h-100 border border-gray-300 shadow">
      <div className="h-10 flex items-center content-center px-4 font-semibold">
        <Image
          src={"/key-icon.svg"}
          alt={"s"}
          width={20}
          height={20}
          className="mr-2"
        />
        Key Competitors
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
      <div className="">
        <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

        <div className="flex mt-6 ml-6 gap-x-22 gap-y-10 flex-wrap">
          {competitorData.map((comp, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <div className=" bg-blue-50 w-15 h-15 rounded-full flex items-center justify-center overflow-hidden">
                {comp.symbol ? (
                  <Image
                    src={`https://images.financialmodelingprep.com/symbol/${comp.symbol}.png`}
                    alt={comp.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-white text-xs">No Logo</span>
                )}
              </div>
              <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
                {comp.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
