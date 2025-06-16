"use client";

import React, { useEffect, useMemo } from "react";
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

function getYearFromHeader(header: string) {
  const match = header.match(/Q[1-4]\s*(\d{4})/);
  return match ? match[1] : null;
}

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

  // Reverse headers for latest quarter first
  const reversedHeaders = useMemo(() => [...headers].reverse(), [headers]);

  // For Quarterly: LTM + all quarters (latest first)
  const quarterlyValueIndexes = useMemo(() => {
    return reversedHeaders.map((h) => headers.indexOf(h));
  }, [headers, reversedHeaders]);

  // For Yearly: find all years in headers, latest first
  const yearlyHeaders = useMemo(() => {
    if (selectedTab !== "Yearly") return [];
    const years = Array.from(
      new Set(headers.map(getYearFromHeader).filter(Boolean))
    );
    return years.reverse(); // Reverse for latest year first
  }, [headers, selectedTab]);

  // For Section Header colSpan
  const colSpan =
    selectedTab === "Quarterly"
      ? 1 + reversedHeaders.length // 1 for LTM, rest for quarters
      : yearlyHeaders.length + 1; // years + metric column

  return (
    <div className="p-4 bg-white rounded-xl font-sans text-[13px] text-gray-800 h-full">
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

      <div className="w-full overflow-x-auto max-w-[1180px]">
        <table className="w-full border-separate border-spacing-y-[2px]">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 w-[200px] bg-[#1E4841]"></th>
              {selectedTab === "Quarterly" && (
                <th className="bg-[#1E4841] text-white text-center py-2 px-4 font-medium text-[13px]">
                  LTM
                </th>
              )}
              {selectedTab === "Yearly"
                ? yearlyHeaders.map((year) => (
                    <th
                      key={year}
                      className="bg-[#1E4841] text-white text-center py-2 px-4 font-medium text-[13px]"
                    >
                      {year}
                    </th>
                  ))
                : reversedHeaders.map((h, idx) => (
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
                <tr
                  className={`bg-gray-100 ${
                    idx !== 0 ? "border-t border-gray-200" : ""
                  } sticky top-0 z-20`}
                >
                  <td
                    className={`sticky left-0 z-10 bg-gray-100 py-3 px-4 font-semibold text-gray-800 text-[13px] ${
                      idx !== 0 ? "pt-6" : ""
                    }`}
                  >
                    {section}
                  </td>
                  <td
                    colSpan={colSpan}
                    className={`py-2 bg-gray-100 ${idx !== 0 ? "pt-6" : ""}`}
                  >
                    &nbsp;
                  </td>
                </tr>

                {/* Data Rows */}
                {rows.map(([label, values]) => {
                  // LTM: sum of latest 4 quarters (from reversedHeaders)
                  const ltm = quarterlyValueIndexes
                    .slice(0, 4)
                    .reduce((sum, idx) => sum + (values[idx] ?? 0), 0);

                  return (
                    <tr key={label} className="border-t border-gray-100">
                      <td className="sticky left-0 z-10 py-2 pl-24 pr-0 bg-[white] text-gray-700 whitespace-nowrap ">
                        {label}
                      </td>
                      {selectedTab === "Quarterly" && (
                        <td className="py-2 pl-0 pr-16 text-right text-gray-800 whitespace-nowrap ">
                          $
                          {(ltm / 1_000_000_000).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          B
                        </td>
                      )}
                      {selectedTab === "Quarterly"
                        ? quarterlyValueIndexes.map((i) => (
                            <td
                              key={i}
                              className="py-2 pl-0 pr-16 text-right text-gray-800 bg-[white] whitespace-nowrap"
                            >
                              $
                              {(
                                (values[i] ?? 0) / 1_000_000_000
                              ).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                              B
                            </td>
                          ))
                        : yearlyHeaders.map((year) => {
                            // Find indices for Q1-Q4 of this year
                            const quarterIndices = headers
                              .map((h, i) =>
                                getYearFromHeader(h) === year ? i : -1
                              )
                              .filter((i) => i !== -1);
                            // Sum the values for these indices
                            const sum = quarterIndices.reduce((acc, i) => {
                              const val = parseFloat((values as number[])[i]);
                              return acc + (isNaN(val) ? 0 : val);
                            }, 0);
                            return (
                              <td
                                key={year}
                                className="py-2 pl-0 pr-16 text-right text-gray-800 whitespace-nowrap"
                              >
                                $
                                {(sum / 1_000_000_000).toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
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
