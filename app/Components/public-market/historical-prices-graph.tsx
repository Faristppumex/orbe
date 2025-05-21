"use client"; // Required for Next.js App Router

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import the ApexChart component (client-side only)
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Sample stock price data
const chartData = [
  { x: new Date("2025-01-01").getTime(), y: 236.89 },
  { x: new Date("2025-02-01").getTime(), y: 248.11 },
  { x: new Date("2025-03-01").getTime(), y: 238.43 },
  { x: new Date("2025-04-01").getTime(), y: 243.1 },
  { x: new Date("2025-05-01").getTime(), y: 254.75 },
  { x: new Date("2025-06-01").getTime(), y: 182.55 },
  { x: new Date("2025-07-01").getTime(), y: 168.77 },
  { x: new Date("2025-08-01").getTime(), y: 190.12 },
  { x: new Date("2025-09-01").getTime(), y: 205.65 },
  { x: new Date("2025-10-01").getTime(), y: 198.34 },
  { x: new Date("2025-11-01").getTime(), y: 213.45 },
  { x: new Date("2025-12-01").getTime(), y: 219.56 },
];

export default function CleanStockChart() {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      curve: "straight",
      width: 1.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      x: { format: "MMM dd, yyyy" },
      y: {
        formatter: (val) => `$ ${val.toFixed(2)}`,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: { colors: "#888" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      opposite: true, // ← Moves y-axis to the right side
      labels: {
        style: { colors: "#888" },
        formatter: (val) => `$ ${val.toFixed(0)}`,
      },
    },
  };

  const series = [
    {
      name: "Stock Price",
      data: chartData,
    },
  ];

  return (
    <div className="p-4  rounded-xl  mr-4 ">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}
