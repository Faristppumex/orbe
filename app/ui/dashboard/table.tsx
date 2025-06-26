"use client";

import React from "react";

export default function CompanyTable() {
  //   const headings = [
  //     "Company",
  //     "Founder",
  //     "Team",
  //     "Product",
  //     "TAM",
  //     "Vertical",
  //     "ARR",
  //     "Updated On",
  //     "Email",
  //     "Phone",
  //     "USP",
  //     "ORBE Score",
  //   ];

  //   const rows = useSelector((state: RootState) => state.company.companies);

  return (
    <main className="p-6">
      <div className="overflow-auto rounded-lg shadow border border-gray-200">
        <table
          className="min-w-full table-auto"
          style={{ fontSize: "10px" }}
        ></table>
      </div>
    </main>
  );
}
