// import React, { useEffect } from "react";
import IndexedSharePerformanceChart from "./1-year-shared-index-performance";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
// import { fetchEarningCallTranscript } from "@/app/store/slices/SummarySlice";
// import { useAppDispatch } from "@/app/store/store";
import Summary from "./summary";
import React from "react";
import SentimentalAnalysis from "./sentimentalAnalysis";

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
      <div className="flex gap-4  ">
        {/* Summary */}
        <div className=" ml-2 mt-4 mb-4 w-1/2 border border-gray-300 rounded-xl shadow ">
          <Summary />
        </div>

        {/* Sentimental analysis */}
        <div className=" mr-2 my-4 w-1/2 border border-gray-300 rounded-xl shadow">
          <div>
            <SentimentalAnalysis />
          </div>
        </div>
      </div>

      {/* Consensus vs Actual */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 pt-2 font-semibold text-black">
        Consensus Vs Actual
        <ConsensusTable />
      </div>

      {/* Broker Price targets */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Broker Price Targets
        <AnalystTable />
      </div>

      {/* Comparable Companies Trading Metrics*/}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Comparable Companies - Trading Metrics
        <MarketDataTable />
      </div>

      {/* Comparable companies -Operating Metrics*/}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Comparable Companies - Operating Metrics
        <MarketDataTable />
      </div>

      {/* 1 Year Index graph */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        <IndexedSharePerformanceChart />
      </div>
    </div>
  );
}

function ConsensusTable() {
  const { headers, rows } = useSelector(
    (state: RootState) => state.consensusTable
  );

  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr
            className=" text-white text-left text-sm"
            style={{ backgroundColor: "#1E4841" }}
          >
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {rows.map((row, i) => (
            <tr key={i} className={"bg-white"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 border-t border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AnalystTable() {
  const analystData = [
    {
      broker: "Param Singh",
      analyst: "Oppenheimer",
      date: "19th Apr '25",
      price: 320,
      direction: "down",
    },
    {
      broker: "Wamsi Mohan",
      analyst: "BofA Securities",
      date: "20th Apr '25",
      price: 270,
      direction: "up",
    },
    {
      broker: "Keith Bachman",
      analyst: "BMO Capital",
      date: "25th Apr '25",
      price: 280,
      direction: "down",
    },
    {
      broker: "Brent Thill",
      analyst: "Jefferies",
      date: "21st Apr '25",
      price: 270,
      direction: "down",
    },
    {
      broker: "Brian Essex",
      analyst: "JP Morgan",
      date: "23rd Apr '25",
      price: 244,
      direction: "up",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-md mt-2 mb-2 border-gray-300">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className=" text-white" style={{ backgroundColor: "#1E4841" }}>
            <th className="px-4 py-2">Broker</th>
            <th className="px-4 py-2">Analyst</th>
            <th className="px-4 py-2">Research Date</th>
            <th className="px-4 py-2">Tgt Price</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr className="font-semibold border border-t-gray-300">
            <td className="px-4 py-2">Guidance Low</td>
            <td></td>
            <td className="px-4 py-2 font-bold">28th Apr 25</td>
            <td></td>
          </tr>
          <tr className="font-semibold border border-t-gray-300">
            <td className="px-4 py-2">Guidance High</td>
            <td></td>
            <td className="px-4 py-2 font-bold">28th Apr 25</td>
            <td></td>
          </tr>
          <tr className="text-black font-semibold border-t border-t-gray-300">
            <td className="px-4 py-2">Median (12 ests)</td>
            <td></td>
            <td className="px-4 py-2 font-bold">28th Apr 25</td>
            <td></td>
          </tr>
          {analystData.map((row, index) => (
            <tr key={index} className="border-t border-t-gray-300">
              <td className="px-4 py-2">{row.broker}</td>
              <td className="px-4 py-2">{row.analyst}</td>
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2 flex items-center space-x-1">
                <span
                  className={`font-semibold ${
                    row.direction === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {row.price.toFixed(2)}
                </span>
                {row.direction === "up" ? (
                  <ArrowUpRight size={16} className="text-green-600" />
                ) : (
                  <ArrowDownRight size={16} className="text-red-600" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MarketDataTable() {
  const data = [
    {
      name: "IBM",
      price: 249.18,
      pctHigh: "93.5%",
      marketCap: "238,701",
      ev: "284,379",
      evRev2024: "4.5x",
      evRev2025: "4.3x",
      evEbitda2024: "17.9x",
      evEbitda2025: "16.2x",
      evFcf2024: "23.1x",
      evFcf2025: "20.6x",
    },
  ];

  return (
    <div className="overflow-x-auto rounded  border-gray-200">
      <table className="min-w-full text-xs md:text-sm text-left">
        <thead>
          <tr
            className=" text-white rounded "
            style={{ backgroundColor: "#1E4841" }}
          >
            <th className="px-3 py-2 bg-white text-black italic font-normal">
              $ (In Millions)
            </th>
            <th colSpan={4} className="text-center">
              Market Data
            </th>
            <th colSpan={6} className="text-center">
              Trading Multiple
            </th>
          </tr>
          <tr className=" text-gray-700 font-medium">
            <th className="px-3 pt-2 content-end text-black bg-white ">
              Company Name{" "}
            </th>
            <th className="px-3 py-2">%of 52-Stock Price 05/05/25</th>
            <th className="px-3 py-2">%of 52-Week High</th>
            <th className="px-3 py-2">Market Cap</th>
            <th className="px-3 py-2">Enterprise Value</th>
            <th className="px-3 py-2">EV/ Rev CY2024</th>
            <th className="px-3 py-2">EV/ Rev CY2025</th>
            <th className="px-3 py-2">EV / EBITDA CY2024</th>
            <th className="px-3 py-2">EV / EBITDA CY2025</th>
            <th className="px-3 py-2">EV / FCF CY2024</th>
            <th className="px-3 py-2">EV / FCF CY2025</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          <tr className="bg-gray-200 font-semibold">
            <td className="px-3 py-2" colSpan={11}>
              Storage & Data Management
            </td>
          </tr>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-3 py-2">{row.name}</td>
              <td className="px-3 py-2">${row.price}</td>
              <td className="px-3 py-2">{row.pctHigh}</td>
              <td className="px-3 py-2">${row.marketCap}</td>
              <td className="px-3 py-2">${row.ev}</td>
              <td className="px-3 py-2">{row.evRev2024}</td>
              <td className="px-3 py-2">{row.evRev2025}</td>
              <td className="px-3 py-2">{row.evEbitda2024}</td>
              <td className="px-3 py-2">{row.evEbitda2025}</td>
              <td className="px-3 py-2">{row.evFcf2024}</td>
              <td className="px-3 py-2">{row.evFcf2025}</td>
            </tr>
          ))}
          <tr className="bg-green-100 font-semibold border-t">
            <td className="px-3 py-2">Storage & Data Management Mean</td>
            <td className="px-3 py-2">74.9%</td>
            <td></td>
            <td className="px-3 py-2">${"72,361"}</td>
            <td className="px-3 py-2">${"81,568"}</td>
            <td className="px-3 py-2">3.6x</td>
            <td className="px-3 py-2">3.2x</td>
            <td className="px-3 py-2">17.0x</td>
            <td className="px-3 py-2">15.1x</td>
            <td className="px-3 py-2">25.6x</td>
            <td className="px-3 py-2">22.5x</td>
          </tr>
          <tr className="bg-green-200 font-semibold border-t">
            <td className="px-3 py-2">Storage & Data Management Median</td>
            <td className="px-3 py-2">68.7%</td>
            <td></td>
            <td className="px-3 py-2">${"24,291"}</td>
            <td className="px-3 py-2">${"26,683"}</td>
            <td className="px-3 py-2">3.1x</td>
            <td className="px-3 py-2">2.9x</td>
            <td className="px-3 py-2">12.1x</td>
            <td className="px-3 py-2">11.0x</td>
            <td className="px-3 py-2">27.2x</td>
            <td className="px-3 py-2">24.1x</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
