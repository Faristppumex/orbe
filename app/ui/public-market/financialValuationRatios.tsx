import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/app/store/store";
import { fetchValuationRatios } from "@/app/store/slices/valuationRatioSlice";

type Props = {
  symbol?: string; // Pass symbol as prop if needed
};

export default function FinancialValuationRatioTable({
  symbol = "AAPL",
}: Props) {
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState<"Quarterly" | "Yearly">(
    "Yearly"
  );

  const { headers, rows, loading, error } = useSelector(
    (state: RootState) => state.valuationRatios
  );

  useEffect(() => {
    if (symbol) {
      dispatch(fetchValuationRatios(symbol));
    }
  }, [dispatch, symbol]);

  // Split headers/rows for Quarterly and Yearly
  // Assume "FY" in headers marks a year, others are quarters
  const yearIndexes = headers
    .map((h, i) => (h === "FY" ? i : -1))
    .filter((i) => i !== -1);

  let displayHeaders: string[] = [];
  let displayRows: string[][] = [];

  if (selectedTab === "Yearly") {
    // Show only the first column and each "FY" column
    displayHeaders = [
      headers[0],
      ...yearIndexes.map(
        (i) => `FY${headers[i - 1] ? " " + headers[i - 1] : ""}`
      ),
    ];
    displayRows = rows.map((row) => [
      row[0],
      ...yearIndexes.map((i) => row[i]),
    ]);
  } else {
    // Show all columns except the first empty one
    displayHeaders = headers;
    displayRows = rows;
  }

  return (
    <div>
      <div
        className="w-41 h-7.5 my-2 rounded-md flex justify-around items-center"
        style={{ backgroundColor: "#F4F4F5" }}
      >
        <button
          className={`font-medium px-3 py-1 rounded transition ${
            selectedTab === "Quarterly"
              ? "bg-white text-black shadow"
              : "text-gray-500"
          }`}
          style={{ fontSize: "14px" }}
          onClick={() => setSelectedTab("Quarterly")}
        >
          Quarterly
        </button>
        <button
          className={`font-medium px-3 py-1 rounded transition ${
            selectedTab === "Yearly"
              ? "bg-white text-black shadow"
              : "text-gray-500"
          }`}
          style={{ fontSize: "14px" }}
          onClick={() => setSelectedTab("Yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="overflow-x-auto p-4 max-w-[1180px]">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500 ">{error}</div>
        ) : (
          <table
            className="min-w-full  border-collapse rounded-lg overflow-hidden"
            style={{ tableLayout: "auto" }}
          >
            <thead>
              <tr
                className="text-white text-left text-sm"
                style={{ backgroundColor: "#1E4841" }}
              >
                {displayHeaders.map((header, i) => (
                  <th
                    key={i}
                    className={`px-4 py-2 font-semibold ${
                      i === 0 ? "min-w-[200px] w-[200px]" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {displayRows.map((row, i) => (
                <tr key={i} className={"bg-white"}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-2 border-t border-gray-200 ${
                        j === 0 ? "min-w-[180px] w-[180px]" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
