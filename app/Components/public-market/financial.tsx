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
    <div className="p-4 bg-white border border-gray-200 rounded-md font-sans text-[13px] text-gray-800 w-full h-full">
      <div className="items-center justify-between mb-3">
        <div className="font-semibold text-[15px]">Financials</div>
        <div className="flex gap-2 bg-blue-100 w-fit mt-2 rounded-xl">
          <button
            onClick={() => dispatch(setSelectedTab("Quarterly"))}
            className={`px-2 py-0.5 text-xs rounded-full border ${
              selectedTab === "Quarterly"
                ? "bg-white text-gray-800 font-medium"
                : "border-gray-300 text-gray-500"
            }`}
          >
            Quarterly
          </button>
          <button
            onClick={() => dispatch(setSelectedTab("Yearly"))}
            className={`px-2 py-0.5 text-xs rounded-full border ${
              selectedTab === "Yearly"
                ? "bg-white text-gray-800 font-medium"
                : "border-gray-300 text-gray-500"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="rounded">
        <table className="min-w-full border-separate border-spacing-y-[2px]">
          <thead className="bg-emerald-900">
            <tr className="bg-blue-700">
              <th className="w-1/5 bg-emerald-900 rounded"></th>
              {headers.map((h) => (
                <th
                  key={h}
                  className="bg-emerald-900 text-white text-center py-1 font-medium text-[13px]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([section, rows]) => (
              <React.Fragment key={section}>
                <tr>
                  <td
                    colSpan={headers.length + 1}
                    className="py-2 px-2 font-medium text-black text-sm pt-4"
                  >
                    {section}
                  </td>
                </tr>
                {rows.map(([label, values]) => (
                  <tr
                    key={label}
                    className="text-[13px] border-t border-gray-100"
                  >
                    <td className="bg-white w-fit"></td>
                    <td className="py-1 px-2">{label}</td>
                    {(values as number[]).map((val, i) => (
                      <td key={i} className="text-right px-3 py-1">
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
