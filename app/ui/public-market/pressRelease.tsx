import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/app/store/store";
import { fetchPressReleases } from "@/app/store/slices/pressReleaseSlice";
import Image from "next/image";

// Define the correct type for a press release item
export interface BulletPoint {
  text: string;
  title: string;
  sentiment: string;
}

export default function PressTable({ symbol = "IBM" }: { symbol?: string }) {
  const dispatch = useAppDispatch();
  const {
    items = [],
    loading,
    error,
  }: {
    items: BulletPoint[];
    loading: boolean;
    error: string | null;
  } = useSelector((state: RootState) => state.pressRelease);

  useEffect(() => {
    if (symbol) {
      dispatch(fetchPressReleases(symbol));
    }
  }, [dispatch, symbol]);

  const bulletPoints = items;

  return (
    <div>
      <div
        className="px-4 h-10 flex space-x-2 font-semibold items-center"
        style={{ fontSize: "20px" }}
      >
        <Image src="/press-icon.svg" alt="s" width={20} height={20} />
        <div>Press Release Aggregations</div>
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
      <div>
        {loading && (
          <div className="text-gray-500 text-sm px-4 py-2">Loading...</div>
        )}
        {error && <div className="text-red-500 text-sm px-4 py-2">{error}</div>}

        <ul style={{ fontSize: "14px" }} className="space-y-2">
          {bulletPoints.map((point, i) => (
            <li key={i} className="m-2 px-4 flex line-clamp-3">
              <div className="w-1 h-1 rounded-full bg-gray-700 p-1 m-2"></div>
              <div
                className={`line-clamp-3 ${
                  point.sentiment === "Positive"
                    ? "text-green-600"
                    : point.sentiment === "Negative"
                    ? "text-red-600"
                    : ""
                }`}
              >
                {point.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
