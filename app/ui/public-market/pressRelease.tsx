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
  } = useSelector((state: RootState) => state.pressRelease);

  useEffect(() => {
    if (symbol) {
      dispatch(fetchPressReleases(symbol));
    }
  }, [dispatch, symbol]);

  return (
    <div>
      {loading && (
        <div className="text-gray-500 text-sm px-4 py-2">Loading...</div>
      )}
      {error && <div className="text-red-500 text-sm px-4 py-2">{error}</div>}
      <ul style={{ fontSize: "14px" }} className="space-y-2">
        {items.map((d, i) => (
          <li key={i} className="m-2 px-4 flex ">
            <div className="w-1 h-1 rounded-full bg-gray-700 p-1 m-2 "></div>
            {/* Show the title or the string itself if d is a string */}
            <div>
              <div className="line-clamp-3">
                {typeof d === "string" ? d : d.title}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
