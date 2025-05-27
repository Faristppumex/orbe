"use client";
import CompanyProfile from "@/app/Components/public-market/CompanyProfile";
import Image from "next/image";
import CompanyOverview from "../../Components/public-market/companyOverview";
import CurrentCapital from "../../Components/public-market/current-Capitalization";
import HistoricalPricesGraph from "@/app/Components/public-market/historical-prices-graph";
import KeyCustomers from "@/app/Components/public-market/key-customers";
import Market from "@/app/Components/public-market/market";
import LatestNewspublic from "@/app/Components/public-market/latestNews";
import FinancialsTable from "@/app/Components/public-market/financial";
import ProductInsights from "@/app/Components/public-market/productinsight";
import Sentiments from "@/app/Components/public-market/sentimentInsights";
import RevenueGrowthChart from "@/app/Components/public-market/revenuegrowth";
import GrossChart from "@/app/Components/public-market/grossmargin";
import Bar from "@/app/Components/dashboard/bar";

export default function App() {
  return (
    <section className="w-full px-4 pt-5 bg-[#ECF4E9] text-black">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 font-bold text-gray-600 text-xl">
        <div className="mb-2 sm:mb-0">Public Markets</div>
        <div className="flex items-center gap-2">
          <div className="text-sm">VB</div>
          <div className="w-9 h-9 rounded-full bg-[#BBF49C]" />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col w-full rounded-2xl bg-white">
        {/* Top Bar */}
        <div className="my-4 mx-2 sm:mx-6">
          <Bar />
        </div>

        {/* Company Profile */}

        <div className="my-4 mx-2 sm:mx-6 rounded border p-4 bg-[#FAFAFA] text-lg font-bold border-gray-300">
          <CompanyProfile />
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

        {/* Financials */}
        <div className="m-2 sm:m-3 rounded border border-gray-300 bg-400 p-4">
          <FinancialsTable />
        </div>

        {/* Revenue + Gross */}
        <div className="flex flex-col md:flex-row gap-4 my-4 mx-2 sm:mx-3 pb-4">
          <div className="w-full md:w-1/2 p-4 border rounded-xl">
            <RevenueGrowthChart />
          </div>
          <div className="w-full md:w-1/2 p-4 border rounded-xl">
            <GrossChart />
          </div>
        </div>
      </div>
    </section>
  );
}
