"use client";
import React, { useState } from "react";
import Bar from "@/app/ui/dashboard/bar";
import Insights from "@/app/ui/public-market/insights";

type Props = {
  params: Promise<{ company: string }>;
};

export default function App({}: Props) {
  // Unwrap params if it's a Promise (future-proof)
  const [activeTab] = useState("insights");

  return (
    <section className="w-full px-4 pt-5 pb-5 bg-[#ECF4E9] text-black">
      {/* Header */}

      {/* Main Container */}
      <div className="flex flex-col w-full rounded-2xl bg-white">
        <div className="my-4 mx-2 sm:mx-6">
          <Bar />
        </div>

        {activeTab === "insights" && (
          <div className="p-4 text-gray-700 text-lg">
            {/* TODO: Replace this with your Insights content */}
            <Insights />
          </div>
        )}
      </div>
    </section>
  );
}
