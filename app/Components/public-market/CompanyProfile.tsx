"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export type entry = {
  symbol: string;
  price: number;
  range: string;
  change: number;
  changePercentage: number;
  companyName: string;
  currency: string;
  exchangeFullName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  image: string;
  ipoDate: string;
  defaultImage: boolean;
};
export default function CompanyProfile() {
  const [data, setData] = useState<entry | null>(null);

  useEffect(() => {
    const getStockData = async () => {
      const res = await fetch("/api/CompanyProfile");
      const result = await res.json();
      setData(result);
    };

    getStockData();
  }, []);
  const entry = data;

  return (
    <div className=" bg-black">hi</div>

    // <div className="grid grid-cols-11">
    //   <div className="md:col-span-5">
    //     <div className="flex">
    //       <div
    //         className="w-21 h-21  rounded-full"
    //         style={{ backgroundColor: "#1E4841" }}
    //       ></div>
    //       <div className=" ml-2 " style={{ fontSize: "20", color: "#242E2C" }}>
    //         {data?.symbol} <br />
    //         <div className="flex space-x-3">
    //           <div className="w-fit px-1 h-5.5 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
    //             {entry?.symbol}
    //           </div>
    //           <div className="w-fit px-1 h-5.5 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
    //             {entry?.exchange}
    //           </div>
    //         </div>
    //         <div style={{ fontSize: "20px" }}>
    //           {entry?.price}
    //           <span
    //             style={{ fontSize: "12px", fontWeight: "normal" }}
    //             className="ml-1.5"
    //           >
    //             {entry?.currency}
    //           </span>
    //         </div>
    //         <div
    //           style={{
    //             fontSize: "12px",
    //             fontWeight: "normal",
    //             color: "#F80000",
    //           }}
    //         >
    //           {entry?.change}({entry?.changePercentage}%)
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="mt-4 font-semibold"
    //       style={{
    //         fontSize: "12px",
    //         color: "#6B7271",
    //         width: "430px",
    //         height: "60px",
    //       }}
    //     >
    //       <div className="mb-4">
    //         {entry?.description
    //           ? entry.description.length > 200
    //             ? entry.description.slice(0, 200) + "..."
    //             : entry.description
    //           : ""}
    //       </div>

    //       <a href={entry?.website} style={{ color: "#1E4841", fontSize: "12" }}>
    //         {entry?.website}
    //       </a>
    //     </div>
    //   </div>

    //   {/**column 2 */}
    //   <div
    //     className="  col-span-2 space-y-5 pt-3  font-semibold"
    //     style={{ color: "#6B7271", fontSize: "11px" }}
    //   >
    //     <div>
    //       Founded:{" "}
    //       <span style={{ color: "#9747FF" }}>{entry?.ipoDate.slice(0, 4)}</span>
    //     </div>
    //     <div>
    //       Headquarters:
    //       <span style={{ color: "#9747FF" }}>
    //         {" "}
    //         {entry?.city} {entry?.country}
    //       </span>
    //     </div>
    //     <div>
    //       Industry:{" "}
    //       {entry?.industry
    //         ? entry.industry.split(",").map((name, idx) => (
    //             <span
    //               key={idx}
    //               className="bg-white border-1 rounded-xl px-1 mr-1"
    //             >
    //               {name.trim()}
    //             </span>
    //           ))
    //         : null}
    //     </div>
    //     <div>
    //       Type:
    //       <span style={{ color: "#9747FF" }}>Publicly Traded</span>
    //     </div>
    //   </div>

    //   <div className="col-span-4 flex flex-col">
    //     <div className="flex justify-between mr-0 ">
    //       <div className="">Key Management</div>
    //       <div className="mr-4">
    //         <Image src="/Notification.svg" alt="Bell" width={38} height={38} />
    //       </div>
    //     </div>

    //     <div className="space-y-4">
    //       <div className="flex h-5 items-center font-medium text-xs">
    //         <div
    //           className="h-5 w-5 rounded-full  mr-2"
    //           style={{ backgroundColor: "#BBF49C" }}
    //         ></div>
    //         {entry?.ceo} (
    //         <span className="font-light" style={{ fontStyle: "italic" }}>
    //           CEO
    //         </span>
    //         )
    //       </div>
    //       <div className="flex h-5 items-center font-medium text-xs w-full">
    //         <div
    //           className="h-5 w-5 rounded-full  mr-2"
    //           style={{ backgroundColor: "#BBF49C" }}
    //         ></div>
    //         Jonathan H. Adashek (
    //         <span className="font-light" style={{ fontStyle: "italic" }}>
    //           Senior VP, Marketing and Communications
    //         </span>
    //         )
    //       </div>
    //       <div className="flex h-5 items-center font-medium text-xs">
    //         <div
    //           className="h-5 w-5 rounded-full  mr-2"
    //           style={{ backgroundColor: "#BBF49C" }}
    //         ></div>
    //         Mohammed Ali (
    //         <span className="font-light" style={{ fontStyle: "italic" }}>
    //           Senior VP, IBM Consulting
    //         </span>
    //         )
    //       </div>
    //       <div className="flex h-5 items-center font-medium text-xs">
    //         <div
    //           className="h-5 w-5 rounded-full  mr-2"
    //           style={{ backgroundColor: "#BBF49C" }}
    //         ></div>
    //         Ana Paula Assis (
    //         <span className="font-light" style={{ fontStyle: "italic" }}>
    //           Senior VP, EMEA and Growth Marketing
    //         </span>
    //         )
    //       </div>
    //     </div>
    //     <button
    //       className="w-fit rounded-4xl px-2 mt-5.5 h-10 flex items-center font-medium py-3.5"
    //       style={{ backgroundColor: "#BBF49C", fontSize: "14px" }}
    //       onClick={() => alert("hello dear, there is nothing to Regenerate")}
    //     >
    //       Regenerate Insights
    //     </button>
    //   </div>
    // </div>
  );
}
