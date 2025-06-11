"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  setSelectedTab,
  fetchFinancials,
} from "@/app/store/slices/financialSlice";
import { useAppDispatch } from "@/app/store/store";

type FinancialsTableProps = {
  symbol: string;
};

const FinancialsTable: React.FC<FinancialsTableProps> = ({ symbol }) => {
  const dispatch = useAppDispatch();
  const { selectedTab, headers, data, loading, error } = useSelector(
    (state: RootState) => state.financials
  );

  useEffect(() => {
    if (symbol) {
      dispatch(fetchFinancials(symbol));
    }
  }, [dispatch, symbol]);

  if (loading) {
    return <div className="p-4">Loading financials...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!headers.length || !Object.keys(data).length) {
    return <div className="p-4">No financial data available.</div>;
  }

  // Filter headers and values based on selectedTab
  let displayHeaders = headers;
  let valueIndexes: number[] = headers.map((_, idx) => idx);

  if (selectedTab === "Yearly") {
    // Find indexes of Q1 columns (assuming Q1 is always present and marks the start of a year)
    valueIndexes = headers
      .map((h, idx) => (h.startsWith("Q1") ? idx : -1))
      .filter((idx) => idx !== -1);
    displayHeaders = valueIndexes.map((idx) => headers[idx]);
  }

  return (
    <div className="p-4 bg-white rounded-xl font-sans text-[13px] text-gray-800  h-full  ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 w-full">
        <div className="font-semibold text-[15px]">Financials</div>
        <div className="flex bg-gray-100 rounded-full p-1 mt-2 md:mt-0">
          <button
            onClick={() => dispatch(setSelectedTab("Quarterly"))}
            className={`px-3 py-1 text-xs rounded-full transition ${
              selectedTab === "Quarterly"
                ? "bg-white shadow text-gray-800 font-semibold"
                : "text-gray-500"
            }`}
          >
            Quarterly
          </button>
          <button
            onClick={() => dispatch(setSelectedTab("Yearly"))}
            className={`px-3 py-1 text-xs rounded-full transition ${
              selectedTab === "Yearly"
                ? "bg-white shadow text-gray-800 font-semibold"
                : "text-gray-500"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
     
      {/* Scrollable Table Container */}

      <div className="w-full overflow-x-auto max-w-[1180px]">
        <table className=" w-full border-separate border-spacing-y-[2px]">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 w-[200px] bg-[#1E4841] rounded-tl-xl"></th>
              <th className="bg-[#1E4841] text-white text-center py-2 px-4 font-medium text-[13px]">
                LTM
              </th>
              {displayHeaders.map((h, idx) => (
                <th
                  key={idx}
                  className="bg-[#1E4841] text-white text-center py-2 px-4 font-medium text-[13px]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([section, rows], idx) => (
              <React.Fragment key={section}>
                {/* Section Title */}
                <tr>
                  <td
                    colSpan={displayHeaders.length + 2}
                    className={`py-3 font-semibold text-gray-800 text-[13px] ${
                      idx !== 0 ? "pt-6 border-t border-gray-200" : ""
                    }`}
                  >
                    {section}
                  </td>
                </tr>
                {/* Data Rows */}
                {rows.map(([label, values]) => {
                  const ltm = (values as number[])
                    .slice(0, 4)
                    .reduce((sum, v) => sum + v, 0);

                  return (
                    <tr key={label} className="border-t border-gray-100">
                      <td className="sticky left-0 z-10 py-2 pl-24 pr-0 text-gray-700 whitespace-nowrap bg-white">
                        {label}
                      </td>
                      <td className="py-2 pl-0 pr-16 text-right text-gray-800 whitespace-nowrap bg-gray-50">
                        $
                        {(ltm / 1_000_000_000).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        B
                      </td>
                      {selectedTab === "Quarterly"
                        ? valueIndexes.map((i) => (
                            <td
                              key={i}
                              className="py-2 pl-0 pr-16 text-right text-gray-800 whitespace-nowrap"
                            >
                              $
                              {(
                                (values as number[])[i] / 1_000_000_000
                              ).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                              B
                            </td>
                          ))
                        : valueIndexes.map((i) => {
                            const yearSum = [i, i - 1, i - 2, i - 3]
                              .map((qIdx) => (values as number[])[qIdx])
                              .reduce((sum, v) => sum + (v || 0), 0);
                            return (
                              <td
                                key={i}
                                className="py-2 pl-0 pr-16 text-right text-gray-800 whitespace-nowrap"
                              >
                                $
                                {(yearSum / 1_000_000_000).toLocaleString(
                                  "en-US",
                                  {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                                B
                              </td>
                            );
                          })}
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialsTable;
