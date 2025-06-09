"use client";

import Image from "next/image";
import { useEffect } from "react";
import CompanyProfileSkeleton from "@/app/ui/public-markets/companyProfileSkeleton";
import { fetchCompanyProfile } from "../../store/slices/companyProfileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function CompanyProfile() {
  const dispatch = useAppDispatch();
  const { data: entry, loading } = useAppSelector(
    (state) => state.companyProfile
  );

  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  if (loading) {
    return <CompanyProfileSkeleton />;
  }
  if (!entry) {
    return <div>NOT AVAILABLE</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-5 col-span-12">
        <div className="flex items-center">
          <div
            className="w-20 h-20 rounded-full flex justify-center items-center"
            style={{ backgroundColor: "#1E4841" }}
          >
            <Image
              src={"/logo-icon.svg"}
              alt={"company Logo"}
              width={80}
              height={80}
            />
          </div>
          <div className="ml-2 text-gray-900" style={{ fontSize: "20px" }}>
            {entry.symbol}
            <div className="flex space-x-3 mt-1">
              <div className="w-fit px-2 h-6 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
                {entry.symbol}
              </div>
              <div className="w-fit px-2 h-6 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
                {entry.exchange}
              </div>
            </div>
            <div className="text-xl mt-1">
              {entry.price}
              <span className="ml-1 text-xs font-normal">{entry.currency}</span>
            </div>
            <div className="text-xs text-red-600 font-normal mt-1">
              {entry.change} ({entry.changePercentage}%)
            </div>
          </div>
        </div>

        <div className="mt-4 font-semibold text-gray-600 max-w-xl h-auto">
          <div className="mb-4">
            {entry.description.length > 200
              ? entry.description.slice(0, 200) + "..."
              : entry.description}
          </div>
          <a href={entry.website} className="text-primary text-sm">
            {entry.website}
          </a>
        </div>
      </div>

      <div className="md:col-span-2 col-span-12 space-y-5 pt-3 text-gray-500 text-xs font-semibold">
        <div>
          Founded:{" "}
          <span className="text-purple-600">{entry.ipoDate?.slice(0, 4)}</span>
        </div>
        <div>
          Headquarters:{" "}
          <span className="text-purple-600">
            {entry.city} {entry.country}
          </span>
        </div>
        <div>
          Industry:
          {entry.industry?.split(",").map((name, idx) => (
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
          <Image src="/Notification.svg" alt="Bell" width={38} height={38} />
        </div>
        <div className="space-y-4">
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            {entry.ceo} (<span className="font-light italic">CEO</span>)
          </div>
          {/* Hardcoded additional management info */}
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Jonathan H. Adashek (
            <span className="font-light italic">
              Senior VP, Marketing and Communications
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
