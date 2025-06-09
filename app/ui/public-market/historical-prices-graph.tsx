// "use client";

// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { ApexOptions } from "apexcharts";
// // import Image from "next/image";
// import { subDays, isAfter } from "date-fns"; // New import

// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// type HistoricalEntry = {
//   date: string;
//   close: number;
// };

// type Range = "1W" | "1M" | "1Y" | "3Y";

// const RANGE_OPTIONS: { label: string; value: Range }[] = [
//   { label: "1 W", value: "1W" },
//   { label: "1 M", value: "1M" },
//   { label: "1 Y", value: "1Y" },
//   { label: "3 Y", value: "3Y" },
// ];

// export default function HistoricalPricesGraph() {
//   const [allData, setAllData] = useState<HistoricalEntry[]>([]);
//   const [seriesData, setSeriesData] = useState<{ x: number; y: number }[]>([]);
//   const [selectedRange, setSelectedRange] = useState<Range>("1Y");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("http://localhost:5000/api/historical");
//         const data: HistoricalEntry[] = await res.json();
//         setAllData(data.reverse()); // Oldest to newest
//       } catch (error) {
//         console.error("Failed to fetch historical prices:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (allData.length === 0) return;

//     const today = new Date();
//     let cutoff: Date;

//     switch (selectedRange) {
//       case "1W":
//         cutoff = subDays(today, 15);
//         break;
//       case "1M":
//         cutoff = subDays(today, 30);
//         break;
//       case "1Y":
//         cutoff = subDays(today, 365);
//         break;
//       case "3Y":
//       default:
//         cutoff = subDays(today, 1095);
//         break;
//     }

//     const filtered = allData.filter((item) => {
//       const itemDate = new Date(item.date);
//       return isAfter(itemDate, cutoff);
//     });

//     const transformed = filtered.map((item) => ({
//       x: new Date(item.date).getTime(),
//       y: item.close,
//     }));

//     setSeriesData(transformed);
//   }, [allData, selectedRange]);

//   const options: ApexOptions = {
//     chart: {
//       type: "area",
//       height: 350,
//       zoom: { enabled: false },
//       toolbar: { show: false },
//     },
//     grid: { show: false },
//     dataLabels: { enabled: false },
//     stroke: { curve: "straight", width: 1.5 },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.4,
//         opacityTo: 0,
//         stops: [0, 90, 100],
//       },
//     },
//     tooltip: {
//       x: { format: "MMM dd, yyyy" },
//       y: {
//         formatter: (val: number) => `$ ${val.toFixed(2)}`,
//       },
//     },
//     xaxis: {
//       type: "datetime",
//       labels: { style: { colors: "#888" } },
//       axisBorder: { show: false },
//       axisTicks: { show: false },
//     },
//     yaxis: {
//       opposite: true,
//       labels: {
//         style: { colors: "#888" },
//         formatter: (val: number) => `$ ${val.toFixed(0)}`,
//       },
//     },
//   };

//   const series = [
//     {
//       name: "Stock Price",
//       data: seriesData,
//     },
//   ];

//   if (!allData) {
//     return <div>Not Available</div>;
//   }

//   return (
//     <div className="p-4 rounded-xl mr-4">
//       <div className="flex">
//         <div className="font-semibold text-xl ml-6 mt-4">Historical Prices</div>
//         <div className="mt-5 ml-auto mr-6 flex items-center space-x-3">
//           {RANGE_OPTIONS.map((opt, index) => (
//             <React.Fragment key={opt.value}>
//               <button
//                 onClick={() => setSelectedRange(opt.value)}
//                 className={`relative px-1 pb-1 text-xs font-medium transition-colors duration-150
//               ${
//                 selectedRange === opt.value
//                   ? "text-green-600 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-green-600"
//                   : "text-gray-400 hover:text-gray-600"
//               }`}
//               >
//                 {opt.label}
//               </button>
//               {index !== RANGE_OPTIONS.length - 1 && (
//                 <div className="h-4 w-px bg-gray-300" />
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       <div className="w-23 bg-blue-50 flex ml-6 mt-1 rounded-md items-center">
//         <div style={{ fontSize: "14px" }} className="ml-3">
//           Bar
//         </div>
//         <div
//           style={{ fontSize: "14px", backgroundColor: "white" }}
//           className="h-4 w-8 flex items-center justify-center rounded-md ml-6"
//         >
//           Line
//         </div>
//       </div>

//       <ReactApexChart
//         options={options}
//         series={series}
//         type="area"
//         height={350}
//       />
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { subDays, isAfter } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistorical } from "@/app/store/slices/historicalSlice";
import { RootState, AppDispatch } from "@/app/store/store";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Range = "1W" | "1M" | "1Y" | "3Y";

const RANGE_OPTIONS: { label: string; value: Range }[] = [
  { label: "1 W", value: "1W" },
  { label: "1 M", value: "1M" },
  { label: "1 Y", value: "1Y" },
  { label: "3 Y", value: "3Y" },
];

export default function HistoricalPricesGraph() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: allData,
    loading,
    error,
  } = useSelector((state: RootState) => state.historical);
  const [seriesData, setSeriesData] = useState<{ x: number; y: number }[]>([]);
  const [selectedRange, setSelectedRange] = useState<Range>("1Y");

  useEffect(() => {
    dispatch(fetchHistorical());
  }, [dispatch]);

  useEffect(() => {
    const safeAllData = Array.isArray(allData) ? allData : [];
    if (safeAllData.length === 0) return;

    const today = new Date();
    let cutoff: Date;

    switch (selectedRange) {
      case "1W":
        cutoff = subDays(today, 15);
        break;
      case "1M":
        cutoff = subDays(today, 30);
        break;
      case "1Y":
        cutoff = subDays(today, 365);
        break;
      case "3Y":
      default:
        cutoff = subDays(today, 1095);
        break;
    }

    const filtered = safeAllData.filter((item) => {
      const itemDate = new Date(item.date);
      return isAfter(itemDate, cutoff);
    });

    const transformed = filtered.map((item) => ({
      x: new Date(item.date).getTime(),
      y: item.close,
    }));

    setSeriesData(transformed);
  }, [allData, selectedRange]);

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 1.5 },
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
        formatter: (val: number) => `$ ${val.toFixed(2)}`,
      },
    },
    xaxis: {
      type: "datetime",
      labels: { style: { colors: "#888" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: { colors: "#888" },
        formatter: (val: number) => `$ ${val.toFixed(0)}`,
      },
    },
  };

  const series = [
    {
      name: "Stock Price",
      data: seriesData,
    },
  ];

  if (loading) {
    return (
      <div className="p-4 rounded-xl mr-4 flex items-center justify-center h-80 text-blue-500 font-semibold text-lg">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 rounded-xl mr-4 flex items-center justify-center h-80 text-red-500 font-semibold text-lg">
        Data not available
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl mr-4">
      <div className="flex">
        <div className="font-semibold text-xl ml-6 mt-4">Historical Prices</div>
        <div className="mt-5 ml-auto mr-6 flex items-center space-x-3">
          {RANGE_OPTIONS.map((opt, index) => (
            <React.Fragment key={opt.value}>
              <button
                onClick={() => setSelectedRange(opt.value)}
                className={`relative px-1 pb-1 text-xs font-medium transition-colors duration-150
              ${
                selectedRange === opt.value
                  ? "text-green-600 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-green-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              >
                {opt.label}
              </button>
              {index !== RANGE_OPTIONS.length - 1 && (
                <div className="h-4 w-px bg-gray-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="w-23 bg-blue-50 flex ml-6 mt-1 rounded-md items-center">
        <div style={{ fontSize: "14px" }} className="ml-3">
          Bar
        </div>
        <div
          style={{ fontSize: "14px", backgroundColor: "white" }}
          className="h-4 w-8 flex items-center justify-center rounded-md ml-6"
        >
          Line
        </div>
      </div>

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}
