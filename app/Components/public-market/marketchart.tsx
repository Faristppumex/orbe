"use client"; // if using Next.js 13+ app router

import React from "react";
import ReactApexChart from "react-apexcharts";

const MarketChart = () => {
  const chartData = {
    series: [
      {
        name: "Growth",
        data: [8, 15, 22, 27, 30], // percentage values
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 200,
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: {
        width: 3,
        curve: "straight",
        colors: ["#BBF49C"], // light green
      },
      grid: {
        show: true,
        borderColor: "#E5E6E6",
        strokeDashArray: 0,
      },
      xaxis: {
        categories: ["2024", "2025", "2026", "2027", "2028"],
        labels: {
          style: { colors: "#242E2C", fontSize: "12px" },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 4,
        labels: {
          formatter: (val: number) => `${val}%`,
          style: { colors: "#242E2C", fontSize: "12px" },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: { show: false },
    },
  };

  return (
    <div className=" p-0">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={200}
      />
    </div>
  );
};

export default MarketChart;
