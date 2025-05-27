"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CompanyProfileSkeleton from "@/app/ui/public-market/companyProfileSkeleton";
export type entry = {
  symbol: string;
  price: number;
  range: string;
  change: number;
  changePercentage: number;
  companyName: string;
  currency: string;
  exchangeFullName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  image: string;
  ipoDate: string;
  defaultImage: boolean;
};

export default function CompanyProfile() {
  const [data, setData] = useState<entry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getStockData = async () => {
      try {
        const res = await fetch("/api/CompanyProfile");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching company profile:", error);
      } finally {
        setLoading(false);
      }
    };

    getStockData();
  }, []);

  const entry = data;
  if (loading) {
    return <CompanyProfileSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-5 col-span-12">
        <div className="flex items-center">
          <div
            className="w-20 h-20 rounded-full"
            style={{ backgroundColor: "#1E4841" }}
          ></div>
          <div className="ml-2 text-gray-900" style={{ fontSize: "20px" }}>
            {data?.symbol} <br />
            <div className="flex space-x-3 mt-1">
              <div className="w-fit px-2 h-6 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
                {entry?.symbol}
              </div>
              <div className="w-fit px-2 h-6 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
                {entry?.exchange}
              </div>
            </div>
            <div className="text-xl mt-1">
              {entry?.price}
              <span className="ml-1 text-xs font-normal">
                {entry?.currency}
              </span>
            </div>
            <div className="text-xs text-red-600 font-normal mt-1">
              {entry?.change} ({entry?.changePercentage}%)
            </div>
          </div>
        </div>

        <div className="mt-4 font-semibold text-gray-600 max-w-xl h-auto">
          <div className="mb-4">
            {entry?.description
              ? entry.description.length > 200
                ? entry.description.slice(0, 200) + "..."
                : entry.description
              : ""}
          </div>
          <a href={entry?.website} className="text-primary text-sm">
            {entry?.website}
          </a>
        </div>
      </div>

      <div className="md:col-span-2 col-span-12 space-y-5 pt-3 text-gray-500 text-xs font-semibold">
        <div>
          Founded:{" "}
          <span className="text-purple-600">{entry?.ipoDate?.slice(0, 4)}</span>
        </div>
        <div>
          Headquarters:{" "}
          <span className="text-purple-600">
            {entry?.city} {entry?.country}
          </span>
        </div>
        <div>
          Industry:{" "}
          {entry?.industry?.split(",").map((name, idx) => (
            <span key={idx} className="bg-white border rounded-xl px-1 mr-1">
              {name.trim()}
            </span>
          ))}
        </div>
        <div>
          Type: <span className="text-purple-600">Publicly Traded</span>
        </div>
      </div>

      <div className="md:col-span-5 col-span-12 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold">Key Management</div>
          <div>
            <Image src="/Notification.svg" alt="Bell" width={38} height={38} />
          </div>
        </div>
        <div className="space-y-4">
          {/* Repeat manager info */}
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            {entry?.ceo} (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              CEO
            </span>
            )
          </div>
          <div className="flex h-5 items-center font-medium text-xs w-full">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Jonathan H. Adashek (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              Senior VP, Marketing and Communications
            </span>
            )
          </div>
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Mohammed Ali (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              Senior VP, IBM Consulting
            </span>
            )
          </div>
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Ana Paula Assis (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              Senior VP, EMEA and Growth Marketing
            </span>
            )
          </div>
        </div>
        <button
          className="mt-5 rounded-3xl px-4 py-2 bg-green-300 text-base font-medium w-fit"
          onClick={() => alert("hello dear, there is nothing to Regenerate")}
        >
          Regenerate Insights
        </button>
      </div>
    </div>
  );
}
