"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/app/store/store";
import { fetchCompanyOverviewPoints } from "@/app/store/slices/companyOverviewPointsSlice";

export default function CompanyOverview({
  symbol = "NKE",
  ai = true,
}: {
  symbol?: string;
  ai?: boolean;
}) {
  const dispatch = useAppDispatch();
  const {
    items: points,
    loading,
    error,
  } = useSelector((state: RootState) => state.companyOverviewPoints);

  useEffect(() => {
    dispatch(fetchCompanyOverviewPoints({ symbol, ai }));
  }, [dispatch, symbol, ai]);

  // Show only the first 6 non-empty, meaningful points
  const bulletPoints = points
    .filter((line) => typeof line === "string" && line.trim().length > 10)
    .slice(0, 6);

  return (
    <div>
      <div
        className="flex font-semibold space-x-2 ml-3"
        style={{ fontSize: "20px" }}
      >
        {" "}
        <Image src={"/hotel.svg"} alt="Hotel" width={20} height={20} />
        <h1>Company Overview</h1>
        <Image
          src={"/DotsThreeVertical.svg"}
          alt="more"
          width={20}
          height={20}
          className="ml-auto mr-3 border-2"
        />
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      {loading ? (
        <div className="text-gray-500 text-sm px-4 py-2">Loading...</div>
      ) : error ? (
        <div className="text-red-500 text-sm px-4 py-2">{error}</div>
      ) : (
        <ul className="space-y-3 text-gray-800 text-sm pl-2 pt-2 pr-1 line-clamp-12">
          {bulletPoints.map((point, index) => (
            <li key={index} className="relative pl-6 leading-relaxed">
              <span className="absolute left-0 top-2 w-2 h-2 bg-gray-800 rounded-full"></span>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
