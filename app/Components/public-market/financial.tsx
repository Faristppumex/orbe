"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { setSelectedTab } from "../../../store/slices/financialSlice";

const FinancialsTable = () => {
  const dispatch = useDispatch();
  const { selectedTab, headers, data } = useSelector(
    (state: RootState) => state.financials
  );

  return (
    <div className="p-4 bg-white rounded-xl font-sans text-[13px] text-gray-800 w-full h-full shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
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
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-[2px]">
          <thead>
            <tr>
              <th className="w-[200px] bg-[#1E4841] rounded-tl-xl"></th>
              {headers.map((h, idx) => (
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
                    colSpan={headers.length + 1}
                    className={`py-3 font-semibold text-gray-800 text-[13px] ${
                      idx !== 0 ? "pt-6 border-t border-gray-200" : ""
                    }`}
                  >
                    {section}
                  </td>
                </tr>
                {/* Data Rows */}
                {rows.map(([label, values]) => (
                  <tr key={label} className="border-t border-gray-100">
                    <td className="py-2 px-4 text-gray-700 whitespace-nowrap">
                      {label}
                    </td>
                    {(values as number[]).map((val, i) => (
                      <td
                        key={i}
                        className="py-2 px-4 text-right text-gray-800 whitespace-nowrap"
                      >
                        {val.toLocaleString("en-US")}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialsTable;
