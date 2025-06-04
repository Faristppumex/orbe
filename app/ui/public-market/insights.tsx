import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

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

      {/**summary and sentimental analysis */}

      <div className="flex gap-4 ">
        {/**Summary  */}

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

        {/**Sentimental analysis */}
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

          <div>
            <SentimentalAnalysis />
          </div>
        </div>
      </div>

      {/**Consensus vs Actual */}

      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 pt-2 font-semibold text-black">
        Consensus Vs Actual
        <ConsensusVsActual />
      </div>

      {/** Broker Price targets */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Broker Price Targets
        <AnalystTable />
      </div>

      {/**Comparable Companies Trading Metrics*/}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Comparable Companies - Trading Metrics
        <MarketDataTable />
      </div>

      {/**MarketData Table*/}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        Comparable Companies - Trading Metrics
        <MarketDataTable />
      </div>

      {/**1 Year Index graph */}
      <div className="border border-gray-300 rounded-xl mx-2 shadow px-4 py-2 my-2 font-semibold text-black">
        <IndexedSharePerformanceChart />
      </div>
    </div>
  );
}

function Summary() {
  const data = [
    "At Think 2025, IBM laid out a bold and uncompromising vision for the future of enterprise AI — one rooted in operational trust, precision, and scale. Central to this strategy is WatsonX Core Intelligence, our next-generation platform for seamlessly embedding generative AI across every facet of the IBM ecosystem — from hybrid cloud and observability to cybersecurity, automation, and data governance. WatsonX is no longer just an AI toolkit — it’s the neural backbone powering intelligent decision-making at the heart of the modern enterprise.",
    " To realise this vision, IBM has engineered and trained domain-specialised foundation models tailored for enterprise workloads. These aren’t off-the-shelf, hallucination-prone LLMs — they’re precision-tuned, fully auditable, and purpose-built for regulated industries like finance, healthcare, and government. Whether it's detecting anomalous behaviour across hybrid infrastructure, reasoning through regulatory data, or automating threat triage in security ops — WatsonX does it not just intelligently, but reliably. And unlike generic cloud-native models, ours are deployed in enterprise-grade environments with full data provenance and governance controls. Inference can run securely on-device,",
  ];
  return (
    <div className="m-2 space-y-2 text-black " style={{ fontSize: "14px" }}>
      {data.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </div>
  );
}
function SentimentalAnalysis() {
  const sources = [
    { AI: 16 },
    { Watson: 15 },
    { Cloud: 11 },
    { Growth: 7 },
    { NetIncome: 1 },
  ];

  return (
    <div className="px-4 py-2 text-black">
      <h1 style={{ fontSize: "20px" }}>Q1 2025 Earnings Call</h1>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
      <ul className="mt-4.5">
        {sources.map((s, i) => {
          const [key, value] = Object.entries(s)[0]; // Destructure the single key-value
          return (
            <li key={i} className="my-1">
              <div className="flex items-center">
                <div>{key}</div>
                <div
                  className=" text-center w-8 h-6 ml-auto "
                  style={{ backgroundColor: "#ACBCB9" }}
                >
                  {value}
                </div>
              </div>
              <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center mt-20 space-x-4">
        <div className="flex">
          <div
            className=" w-7 h-7 mr-1 content-center px-2"
            style={{ backgroundColor: "#EEFF00" }}
          >
            {5}
          </div>
          <div>Neutral</div>
        </div>
        <div className="flex">
          <div
            className=" w-7 h-7 mr-1 content-center px-2"
            style={{ backgroundColor: "#FF3A3A" }}
          >
            {8}
          </div>
          <div>Negative</div>
        </div>
        <div className="flex">
          <div
            className=" w-7 h-7 mr-1 content-center px-2"
            style={{ backgroundColor: "#15D000" }}
          >
            {4}
          </div>
          <div>Positive</div>
        </div>
      </div>
    </div>
  );
}
function ConsensusVsActual() {
  const headers = [
    "",
    "Actuals",
    "Consensus(Medium)",
    "Beat/Miss%",
    "Guide low",
    "Guide High",
    "Beat/Miss %",
  ];
  const rows = [
    [
      "Revenue",
      "$ 14,541.0",
      "$ 14,390.5",
      "0.8%",
      "$ 16,349",
      "$ 16,400.0",
      "2.0%",
    ],
    [
      "Gross Income",
      "$  7,670.0",
      "$ 7,660.0",
      "0.2%",
      "$44.0",
      "$45.2",
      "1.4%",
    ],
    ["Operating Income", "$15,9", "$15,8", "0.6%", "$15.5", "$16.2", ""],
    ["EBITDA", "8.8x", "8.6x", "9.1x", "10.4x", "11.6x", ""],
    ["Free Cash Flow", "5.8x", "5.7x", "6.1x", "6.2x", "4.8x", ""],
    ["Net Income", "8.1x", "8.0x", "8.3x", "9.3x", "9.8x", ""],
    ["Earning Per Share", "0.24x", "0.21x", "0.15x", "0.13x", "0.09x", ""],
  ];

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
    {
      name: "Hitachi",
      price: 25.55,
      pctHigh: "86.6%",
      marketCap: "116,685",
      ev: "114,514",
      evRev2024: "1.7x",
      evRev2025: "1.6x",
      evEbitda2024: "12.1x",
      evEbitda2025: "11.0x",
      evFcf2024: "27.2x",
      evFcf2025: "25.1x",
    },
    {
      name: "Dell",
      price: 132.36,
      pctHigh: "52.6%",
      marketCap: "68,470",
      ev: "89,600",
      evRev2024: "0.9x",
      evRev2025: "0.9x",
      evEbitda2024: "8.2x",
      evEbitda2025: "7.5x",
      evFcf2024: "10.0x",
      evFcf2025: "9.8x",
    },
    {
      name: "Hewlett Packard Enterprise",
      price: 16.67,
      pctHigh: "67.6%",
      marketCap: "24,291",
      ev: "26,683",
      evRev2024: "0.9x",
      evRev2025: "0.9x",
      evEbitda2024: "5.0x",
      evEbitda2025: "4.0x",
      evFcf2024: "12.5x",
      evFcf2025: "11.1x",
    },
    {
      name: "Nutanix",
      price: 72.43,
      pctHigh: "90.5%",
      marketCap: "21,448",
      ev: "20,558",
      evRev2024: "8.9x",
      evRev2025: "7.7x",
      evEbitda2024: "43.7x",
      evEbitda2025: "35.0x",
      evFcf2024: "32.5x",
      evFcf2025: "28.7x",
    },
    {
      name: "NetApp",
      price: 87.62,
      pctHigh: "87.8%",
      marketCap: "20,143",
      ev: "19,876",
      evRev2024: "3.1x",
      evRev2025: "2.9x",
      evEbitda2024: "9.9x",
      evEbitda2025: "9.1x",
      evFcf2024: "14.0x",
      evFcf2025: "13.4x",
    },
    {
      name: "PureStorage",
      price: 47.58,
      pctHigh: "64.6%",
      marketCap: "15,366",
      ev: "15,366",
      evRev2024: "4.6x",
      evRev2025: "4.1x",
      evEbitda2024: "29.4x",
      evEbitda2025: "22.9x",
      evFcf2024: "29.9x",
      evFcf2025: "26.7x",
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

// Sample data: Each entry represents a month

function IndexedSharePerformanceChart() {
  const data = [
    {
      name: "May-24",
      IBM: 100,
      DELL: 100,
      HPE: 100,
      NTNX: 100,
      PSTG: 100,
      NETAPP: 100,
      6501: 100,
    },
    {
      name: "Jun-24",
      IBM: 102,
      DELL: 108,
      HPE: 98,
      NTNX: 104,
      PSTG: 101,
      NETAPP: 100,
      6501: 101,
    },
    {
      name: "Jul-24",
      IBM: 101,
      DELL: 104,
      HPE: 96,
      NTNX: 102,
      PSTG: 98,
      NETAPP: 100,
      6501: 99,
    },
    {
      name: "Sep-24",
      IBM: 100,
      DELL: 103,
      HPE: 97,
      NTNX: 105,
      PSTG: 97,
      NETAPP: 100,
      6501: 101,
    },
    {
      name: "Nov-24",
      IBM: 101,
      DELL: 106,
      HPE: 98,
      NTNX: 104,
      PSTG: 98,
      NETAPP: 100,
      6501: 102,
    },
    {
      name: "Jan-25",
      IBM: 103,
      DELL: 108,
      HPE: 99,
      NTNX: 106,
      PSTG: 100,
      NETAPP: 100,
      6501: 103,
    },
    {
      name: "Mar-25",
      IBM: 104,
      DELL: 98,
      HPE: 96,
      NTNX: 106,
      PSTG: 98,
      NETAPP: 100,
      6501: 103,
    },
    {
      name: "May-25",
      IBM: 105.4,
      DELL: 75.4,
      HPE: 91,
      NTNX: 116.37,
      PSTG: 98.9,
      NETAPP: 100,
      6501: 127.05,
    },
  ];

  const lineColors = {
    IBM: "blue",
    DELL: "red",
    HPE: "green",
    NTNX: "#6B7280",
    PSTG: "purple",
    NETAPP: "black",
    6501: "#00C49F",
  };

  return (
    <div className="p-4 bg-white ">
      <h2 className="font-semibold text-gray-800 mb-3 text-lg">
        1 Year - Index Share Performance
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[60, 130]} tickFormatter={(tick) => `${tick}%`} />
          <Tooltip
            formatter={(value) =>
              typeof value === "number" ? `${value.toFixed(1)}%` : `${value}%`
            }
          />

          {Object.keys(data[0])
            .filter((key) => key !== "name")
            .map((company) => (
              <Line
                key={company}
                type="linear"
                dataKey={company}
                stroke={
                  lineColors[company as keyof typeof lineColors] || "#8884d8"
                }
                dot={false}
                strokeWidth={2}
              />
            ))}
        </LineChart>
      </ResponsiveContainer>
      <div className="text-sm text-right mt-2">
        {/* <ul className="inline-block text-xs space-y-1 text-gray-600">
          <li className="text-blue-600">IBM (50.4%)</li>
          <li className="text-[#00C49F]">6501 (27.05%)</li>
          <li className="text-gray-600">NTNX (16.37%)</li>
          <li className="text-green-600">HPE (11%)</li>
          <li className="text-purple-600">PSTG (8.9%)</li>
          <li className="text-black">NTAP (0.0%)</li>
          <li className="text-red-600">DELL (-24.6%)</li>
        </ul> */}
      </div>
    </div>
  );
}
