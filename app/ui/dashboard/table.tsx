"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function CompanyTable() {
  const headings = [
    "Company",
    "Founder",
    "Team",
    "Product",
    "TAM",
    "Vertical",
    "ARR",
    "Updated On",
    "Email",
    "Phone",
    "USP",
    "ORBE Score",
  ];

  const rows = useSelector((state: RootState) => state.company.companies);

  return (
    <main className="p-6">
      <div className="overflow-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full table-auto" style={{ fontSize: "10px" }}>
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {headings.map((head) => (
                <th
                  key={head}
                  className="px-4 py-2 border-b border-gray-300 text-left"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {headings.map((head) => (
                  <td
                    key={head}
                    className="px-4 py-2 border-b border-gray-200 whitespace-nowrap"
                  >
                    {row[head as keyof typeof row] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
