"use client";
import CompanyProfile from "@/app/ui/public-market/CompanyProfile";
import React, { useState } from "react";
import Image from "next/image";
import CompanyOverview from "@/app/ui/public-market/companyOverview";
import CurrentCapital from "@/app/ui/public-market/current-Capitalization";
import HistoricalPricesGraph from "@/app/ui/public-market/historical-prices-graph";
import KeyCustomers from "@/app/ui/public-market/key-customers";
import Market from "@/app/ui/public-market/market";
import LatestNewspublic from "@/app/ui/public-market/latestNews";
import FinancialsTable from "@/app/ui/public-market/financial";
import ProductInsights from "@/app/ui/public-market/productinsight";
import Sentiments from "@/app/ui/public-market/sentimentInsights";
import RevenueGrowthChart from "@/app/ui/public-market/revenuegrowth";
import GrossChart from "@/app/ui/public-market/grossmargin";
import Bar from "@/app/ui/dashboard/bar";
import EBITBAmargin from "@/app/ui/public-market/EBITDA-margins";
import Insights from "@/app/ui/public-market/insights";

type Props = {
  params: Promise<{ company: string }>;
};

export default function App({ params }: Props) {
  // Unwrap params if it's a Promise (future-proof)
  const { company } = React.use(params);
  const [activeTab, setActiveTab] = useState("profile");
  const companySymbol = company?.toUpperCase() || "";

  return (
    <section className="w-full px-4 pt-5 pb-5 bg-[#ECF4E9] text-black">
      {/* Header */}
      ...
      {/* Main Container */}
      <div className="flex flex-col w-full rounded-2xl bg-white">
        <div className="my-4 mx-2 sm:mx-6">
          <Bar value={activeTab} onChange={setActiveTab} />
        </div>

        {activeTab === "profile" && (
          <>
            {/* Company Profile */}

            <div className="my-4 mx-2 sm:mx-6 rounded border p-4 bg-[#FAFAFA] text-lg font-bold border-gray-300">
              <CompanyProfile symbol={companySymbol} />
            </div>

            {/* Sentiment & Deal Score */}

            <div className="flex flex-col sm:flex-row gap-3 my-4 mx-2 sm:mx-6">
              <div className="flex items-center justify-center text-xs font-medium bg-[#F7F1FF] text-[#6B7271] px-4 py-2 rounded">
                Sentiment Score:{" "}
                <span className="text-[#9747FF] ml-1">Positive</span>
                <Image
                  className="ml-2"
                  src="/info.svg"
                  alt="info"
                  width={16}
                  height={16}
                />
              </div>
              <div className="flex items-center justify-center text-xs font-medium bg-[#F6FDF3] text-[#6B7271] px-4 py-2 rounded border">
                Deal Score:
                <div className="w-5 h-5 bg-[#BBF49C] text-black font-bold text-xs rounded-full flex items-center justify-center ml-2">
                  84
                </div>
                <Image
                  className="ml-2"
                  src="/info.svg"
                  alt="info"
                  width={16}
                  height={16}
                />
              </div>
            </div>

            {/* Overview + Capitalization */}

            <div className="flex flex-col md:flex-row gap-4 my-4 mx-2 sm:mx-6">
              <div className="w-full md:w-1/2 p-4 border rounded-xl border-gray-300 shadow">
                <CompanyOverview />
              </div>
              <div
                className="w-full md:w-1/2 p-4 border rounded-xl border-gray-300
            shadow"
              >
                <CurrentCapital />
              </div>
            </div>

            {/* Historical Prices */}

            <div className="my-4 mx-2 sm:mx-6 p-4 border shadow rounded-2xl border-gray-300">
              <HistoricalPricesGraph />
            </div>

            {/* Key Customers + News */}

            <div className="flex flex-col md:flex-row gap-4 my-4 mx-2 sm:mx-6">
              <div className="w-full md:w-1/2 p-4 border border-gray-300 shadow rounded-xl">
                <KeyCustomers />
              </div>
              <div className="w-full md:w-1/2 border shadow border-gray-300 rounded-xl">
                <LatestNewspublic />
              </div>
            </div>

            {/* Market + Product Insights + Sentiment */}

            <div className="flex flex-col lg:flex-row gap-4 my-4 mx-2 sm:mx-6">
              <div className="w-full lg:w-1/2 p-4 border shadow border-gray-300 rounded-xl">
                <Market />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="p-4 border border-gray-300 rounded-xl">
                  <ProductInsights />
                </div>
                <div className="p-4 border lg:h-1/2 border-gray-300 shadow rounded-xl">
                  <Sentiments />
                </div>
              </div>
            </div>

            {/* Financials  Table */}

            <div className="m-6 rounded-xl shadow border border-gray-300 bg-400 p-4">
              <FinancialsTable />
            </div>

            {/* Revenue + Gross */}

            <div className="flex flex-col md:flex-row gap-4 my-4 mx-6 sm:mx-6  pb-4">
              <div className="w-full md:w-1/2 p-4 border border-gray-300 shadow rounded-xl">
                <RevenueGrowthChart />
                something
              </div>
              <div className="w-full md:w-1/2 p-4 border border-gray-300 shadow rounded-xl">
                <GrossChart />
              </div>
            </div>

            {/**EBITDA-margins */}

            <div className="flex flex-col md:flex-row gap-4 my-4 mx-6 sm:mx-6  pb-4">
              <div className="w-full md:w-1/2 p-4 border border-gray-300 shadow rounded-xl">
                <EBITBAmargin />
              </div>
              <div className="w-full md:w-1/2 p-4 border border-gray-300 shadow rounded-xl">
                <GrossChart />
              </div>
            </div>

            {/**Financial Valuation Ratios Table */}

            <div className=" mx-6 border border-gray-300 shadow md:h-120 rounded-xl mb-6 ">
              <div className="p-6">
                <p style={{ fontSize: "20px" }} className="font-semibold">
                  Financial Valuation Ratios
                </p>
                <div
                  className="w-41 h-7.5 my-2 rounded-md flex justify-around items-center"
                  style={{ backgroundColor: "#F4F4F5" }}
                >
                  <div className="font-medium" style={{ fontSize: "14px" }}>
                    Quaterly{" "}
                  </div>
                  <div
                    className="bg-white rounded my-2 font-medium px-3"
                    style={{ fontSize: "14px" }}
                  >
                    Yearly{" "}
                  </div>
                </div>
                <FinancialTable />
              </div>
            </div>

            {/**Press Release Aggregations and Key Customers */}

            <div className="m-6 md:flex   gap-4 space-y-4 ">
              {/**Pres release Aggregations */}

              <div className=" rounded-xl md:w-1/2 h-100 border border-gray-300 shadow ">
                <div
                  className="px-4 h-10 flex space-x-2 font-semibold items-center"
                  style={{ fontSize: "20px" }}
                >
                  <Image
                    src={"/press-icon.svg"}
                    alt="s"
                    width={20}
                    height={20}
                  />
                  <div>Press Release Aggregations</div>
                </div>
                <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
                <div>
                  <PressTable />
                </div>
              </div>

              {/**Key Competitors */}

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
                <div>
                  <Competitors />
                </div>
                <div></div>
              </div>
            </div>
          </>
        )}

        {activeTab === "insights" && (
          <div className="p-4 text-gray-700 text-lg">
            {/* TODO: Replace this with your Insights content */}
            <Insights />
          </div>
        )}

        {activeTab === "files" && (
          <div className="p-4 text-gray-700 text-lg">
            {/* TODO: Replace this with your Files content */}
            Files & Reports go here.
          </div>
        )}
      </div>
    </section>
  );
}

function FinancialTable() {
  const headers = ["", "LTM", "Dec 24", "Dec 23", "Dec 22", "Dec 21"];
  const rows = [
    ["EV / Sales", "4.5x", "4.0x", "3.2x", "2.8x", "2.3x"],
    ["EV / EBITDA", "20.4x", "17.1x", "26.7x", "14.1x", "10.5x"],
    ["EV / EBIT", "28.1x", "24.9x", "65.7x", "24.1x", "17.9x"],
    ["EBITDA / Interest Expense", "8.8x", "8.6x", "9.1x", "10.4x", "11.6x"],
    ["EBIT / Interest Expense", "5.8x", "5.7x", "6.1x", "6.2x", "4.8x"],
    [
      "EBITDA - CapEx / Interest Expense",
      "8.1x",
      "8.0x",
      "8.3x",
      "9.3x",
      "9.8x",
    ],
    ["Total Debt/EV", "0.24x", "0.21x", "0.15x", "0.13x", "0.09x"],
    ["Price to Earnings", "44.2x", "24.4x", "21.3x", "92.7x", "25.7x"],
  ];

  return (
    <div className="overflow-x-auto p-4">
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

{
  /** Press Aggregations */
}
function PressTable() {
  const data = [
    "IBM successfully reduced packaging waste by 18% across its global hardware distribution channels, thanks to a new initiative prioritizing recyclable materials and smart shipment configurations — a move executives say aligns with their circular economy goal ",
    " IBM's total energy consumption remained flat compared to the previous fiscal year, with marginal gains in efficiency being offset by increased cloud infrastructure demands. Company spokespeople stated that the figures fall within their long-term energy stability targets. ",
    " Water usage at IBM’s European chip fabrication plants rose by 11% this past year, driven by expanded production in drought-prone regions. Sustainability analysts warn this trend could lead to stricter regulatory scrutiny under evolving EU water management directives. ",
    " IBM reported a 5.6% year-over-year increase in greenhouse gas emissions from its Asia-Pacific data centers, citing increased AI model training demands and delayed infrastructure upgrades. Environmental advocacy groups have expressed concern over the company’s deviation from its 2030 net-zero roadmap.",
  ];
  return (
    <div>
      <ul style={{ fontSize: "14px" }}>
        {data.map((d, i) => (
          <li key={i} className="m-2 px-4 flex " style={{ color: "" }}>
            <div className="w-1 h-1 rounded-full bg-gray-700 p-1 m-2"></div>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /**Competitors */
}

function Competitors() {
  const competitors = [
    "Xerox",
    "Accenture",
    "Oracle",
    "Cognizent",
    "SAP",
    "Intel",
    "Google",
  ];
  return (
    <div>
      <ul className="pl-5 pt-5  pb-0 flex flex-wrap gap-x-20 gap-y-5">
        {competitors.map((comp, i) => (
          <li key={i} className="flex-col justify-center items-center">
            <div
              className="w-18 h-18 rounded-full   content-center"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            <div className="flex  justify-center">{comp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
