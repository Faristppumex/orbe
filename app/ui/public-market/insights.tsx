import Image from "next/image";
import React, { useEffect } from "react";
import IndexedSharePerformanceChart from "./1-year-shared-index-performance";
// import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { fetchEarningCallTranscript } from "@/app/store/slices/SummarySlice";

export default function Insights() {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to right,  #1E4841 0% , #1E4841 70%, #BBF49C)",
          borderRadius: "8px",
          color: "white",
        }}
        className="px-3 mx-2 h-10 content-center"
      >
        Insights Differentiator - Earnings Transcript{" "}
      </div>

      {/* summary and sentimental analysis */}
      <div className="flex gap-4 ">
        {/* Summary */}
        <div className=" ml-2 mt-4 mb-4 w-1/2 border border-gray-300 rounded-xl shadow">
          <div className="h-10 flex">
            <Image
              src="/summary-icon.svg"
              alt="s"
              width={20}
              height={20}
              className="ml-3"
            />
            <p className=" content-center ml-4 my-2 font-semibold text-black">
              Summary
            </p>
            <button className=" rounded ml-auto mr-3 border border-gray-300  justify-center items-center text-black px-2 text-sm my-2">
              View More {">"}
            </button>
          </div>
          <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
          <div className="">
            <Summary />
          </div>
        </div>

        {/* Sentimental analysis */}
        <div className=" mr-2 my-4 w-1/2 border border-gray-300 rounded-xl shadow">
          <div className="h-10 flex">
            <Image
              src={"/press-icon.svg"}
              alt="p"
              width={20}
              height={20}
              className="ml-3"
            />
            <p className="text-black font-semibold ml-2 content-center">
              Sentimental Analysis
            </p>
            <span className="ml-auto mr-3 my-2 border border-gray-300 rounded text-sm text-black px-2">
              Click to View Sentimental Analysis {">"}
            </span>
          </div>
          <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
          <div>{/* <SentimentalAnalysis /> */}</div>
        </div>
      </div>

      {/* Consensus vs Actual */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 pt-2 font-semibold text-black">
        Consensus Vs Actual
        {/* <ConsensusVsActual /> */}
      </div>

      {/* Broker Price targets */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Broker Price Targets
        {/* <AnalystTable /> */}
      </div>

      {/* Comparable Companies Trading Metrics*/}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Comparable Companies - Trading Metrics
        {/* <MarketDataTable /> */}
      </div>

      {/* Comparable companies -Operating Metrics*/}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Comparable Companies - Operating Metrics
        {/* <MarketDataTable /> */}
      </div>

      {/* 1 Year Index graph */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        <IndexedSharePerformanceChart />
      </div>
    </div>
  );
}

function Summary() {
  const dispatch = useDispatch();
  const {
    transcripts = [],
    loading = false,
    error = null,
  } = useSelector((state: RootState) => state.summary) || {};

  // Set your desired symbol, year, and quarter here
  const symbol = "AAPL";
  const year = 2025;
  const quarter = 1;

  useEffect(() => {
    dispatch(fetchEarningCallTranscript({ symbol, year, quarter }));
  }, [dispatch, symbol, year, quarter]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!transcripts.length) return <div>No summary available.</div>;

  return (
    <div
      className="m-2 space-y-2 text-black line-clamp-12"
      style={{ fontSize: "14px" }}
    >
      {transcripts.map((t, i) => (
        <li className="line-clamp-6" key={i}>
          <span className="mt-2 mr-2 w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
          {t}
        </li>
      ))}
      {transcripts.map((t, i) => (
        <li className="line-clamp-6 " key={i}>
          <span className="mt-2 mr-2 w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
          {t}
        </li>
      ))}
    </div>
  );
}

// ...rest of your components (SentimentalAnalysis, ConsensusVsActual, AnalystTable, MarketDataTable) remain unchanged
