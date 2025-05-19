"use client"; // if using App Router

import React from "react";

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

  const rows = [
    {
      Company: "TechNova",
      Founder: "Alice Morgan",
      Team: "8",
      Product: "AI Recruiter",
      TAM: "$3.5B",
      Vertical: "HR Tech",
      ARR: "$500K",
      "Updated On": "2025-05-15",
      Email: "alice@technova.com",
      Phone: "123-456-7890",
      USP: "Smart hiring algorithms",
      "ORBE Score": "82",
    },
    {
      Company: "FinStream",
      Founder: "Mark Lee",
      Team: "15",
      Product: "Neobank",
      TAM: "$20B",
      Vertical: "Fintech",
      ARR: "$2.1M",
      "Updated On": "2025-05-10",
      Email: "mark@finstream.com",
      Phone: "234-567-8901",
      USP: "No-fee banking",
      "ORBE Score": "89",
    },
    {
      Company: "MediBridge",
      Founder: "Dr. Carla Jones",
      Team: "20",
      Product: "Telehealth Platform",
      TAM: "$10B",
      Vertical: "Health Tech",
      ARR: "$1.7M",
      "Updated On": "2025-05-12",
      Email: "carla@medibridge.com",
      Phone: "345-678-9012",
      USP: "Rural access telecare",
      "ORBE Score": "76",
    },
    {
      Company: "LogiSmart",
      Founder: "Raj Patel",
      Team: "10",
      Product: "Logistics AI",
      TAM: "$6B",
      Vertical: "Logistics",
      ARR: "$900K",
      "Updated On": "2025-05-17",
      Email: "raj@logismart.com",
      Phone: "456-789-0123",
      USP: "Optimized delivery routes",
      "ORBE Score": "85",
    },
    {
      Company: "EduLift",
      Founder: "Sara Wong",
      Team: "6",
      Product: "Online Courses",
      TAM: "$2B",
      Vertical: "EdTech",
      ARR: "$400K",
      "Updated On": "2025-05-11",
      Email: "sara@edulift.com",
      Phone: "567-890-1234",
      USP: "Skill-based microlearning",
      "ORBE Score": "78",
    },
    {
      Company: "GreenWatt",
      Founder: "Leo Martinez",
      Team: "18",
      Product: "Solar Tracking",
      TAM: "$12B",
      Vertical: "Clean Tech",
      ARR: "$3.2M",
      "Updated On": "2025-05-14",
      Email: "leo@greenwatt.com",
      Phone: "678-901-2345",
      USP: "AI-powered panels",
      "ORBE Score": "91",
    },
    {
      Company: "RetailX",
      Founder: "Emily Chen",
      Team: "9",
      Product: "AR Shopping",
      TAM: "$8B",
      Vertical: "Retail Tech",
      ARR: "$1.1M",
      "Updated On": "2025-05-13",
      Email: "emily@retailx.com",
      Phone: "789-012-3456",
      USP: "Try-before-you-buy AR",
      "ORBE Score": "84",
    },
  ];

  return (
    <main className="p-6">
      <div className="overflow-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full table-auto text-xs">
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
