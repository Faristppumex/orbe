// import React from "react";
"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useAppDispatch } from "@/app/store/store";
import { fetchEarningCallTranscript } from "@/app/store/slices/SummarySlice";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Summary() {
  const dispatch = useAppDispatch();
  const params = useParams();
  // const router = useRouter();
  const { transcripts = [] } =
    useSelector((state: RootState) => state.summary) || {};
  const symbol = params.company as string; // Set your desired symbol

  const [year, setYear] = useState(2025);
  const [quarter, setQuarter] = useState(1);

  useEffect(() => {
    dispatch(fetchEarningCallTranscript({ symbol, year, quarter }));
  }, [dispatch, symbol, year, quarter]);
  return (
    <div className="h-full w-full p-3 bg-[#ECF4E9]">
      <div className="flex h-full min-h-500 w-full rounded-2xl p-3  bg-[#ffff] text-black">
        <div className=" min-w-60 p-3 border-2 max-h-60 mt-20 rounded border-gray-300">
          Filter
          <label className="block mb-1">Year</label>
          <select
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
          </select>
          <label className="block mb-1">Quarter</label>
          <select
            className="block w-full mb-4 p-2 border border-gray-300 rounded"
            value={quarter}
            onChange={(e) => setQuarter(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold mb-4">
            Insights Differentiator Summary
          </h1>
          <div className="text-gray-  700 mb-4">{transcripts[0]}</div>
        </div>
      </div>
    </div>
  );
}
