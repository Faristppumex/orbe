"use client";

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
    return <div>Loading</div>;
  }
  console.log("key Competitors", keyCompetitors);
  function extractCompetitorNames(arr: string[]): string[] {
    const names: string[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "name" && arr[i + 1]) {
        names.push(arr[i + 1]);
      }
    }
    return names;
  }
  const competitorNames = extractCompetitorNames(keyCompetitors);

  return (
    <div className="">
      <h1
        className="flex font-semibold space-x-2 ml-3"
        style={{ fontSize: "20px" }}
      >
        Key Competitors
      </h1>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <div className="flex mt-6 ml-6 gap-x-22 gap-y-10 flex-wrap">
        {competitorNames.map((name, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <div className="bg-gray-700 w-15 h-15 rounded-full"></div>
            <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
              {name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
