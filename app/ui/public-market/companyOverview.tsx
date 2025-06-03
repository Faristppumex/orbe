"use client";
import Image from "next/image";
import points from "@/store/companyOverviewPoints";
export default function CompanyOverview() {
  return (
    <div>
      <div
        className="flex font-semibold space-x-2 ml-3"
        style={{ fontSize: "20px" }}
      >
        {" "}
        <Image src={"/hotel.svg"} alt="Hotel" width={20} height={20} />
        <h1>Company Overview</h1>
        <Image
          src={"/DotsThreeVertical.svg"}
          alt="more"
          width={20}
          height={20}
          className="ml-auto mr-3 border-2"
        />
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <ul className="space-y-3 text-gray-800 text-sm pl-2 pt-2 pr-1 ">
        {points.map((point, index) => (
          <li key={index} className="relative pl-6 leading-relaxed">
            <span className="absolute left-0 top-2 w-2 h-2 bg-gray-800 rounded-full"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
