import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/app/store/store";
import { fetchPressReleases } from "@/app/store/slices/pressReleaseSlice";

export default function PressTable({ symbol = "IBM" }: { symbol?: string }) {
  const dispatch = useAppDispatch();
  const {
    items = [],
    loading,
    error,
  }: { items: string[]; loading: boolean; error: string | null } = useSelector(
    (state: RootState) => state.pressRelease
  );

  useEffect(() => {
    if (symbol) {
      dispatch(fetchPressReleases(symbol));
    }
  }, [dispatch, symbol]);

  // Only show the first 6 non-empty points (skip any empty or non-bullet lines)
  const bulletPoints = items
    .filter((line) => typeof line === "string" && line.trim().length > 0)
    .slice(0, 6);

  return (
    <div>
      {loading && (
        <div className="text-gray-500 text-sm px-4 py-2">Loading...</div>
      )}
      {error && <div className="text-red-500 text-sm px-4 py-2">{error}</div>}
      <ul style={{ fontSize: "14px" }} className="space-y-2">
        {bulletPoints.map((point, i) => (
          <li key={i} className="m-2 px-4 flex line-clamp-3">
            <div className="w-1 h-1 rounded-full bg-gray-700 p-1 m-2"></div>
            <div className="line-clamp-3">{point}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
