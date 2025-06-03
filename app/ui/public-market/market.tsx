"use client";
import Image from "next/image";

// import MarketChart from "./marketchart";
import dynamic from "next/dynamic";

const MarketChart = dynamic(() => import("./marketchart"), {
  ssr: false,
});
export default function Market() {
  return (
    <div>
      <div className="flex justify-between mb-3 ">
        <h1 className="font-semibold text-xl mt-4 ml-6">Market</h1>
        <p className="mt-7 mr-4.5 text-xs" style={{ color: "#BBF49C" }}>
          View Full Report
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 ml-6 gap-y-4 mr-3 ">
        <div className="flex space-x-1.5 ">
          <div>
            <Image
              src={"/product.svg"}
              alt="image"
              width={36}
              height={36}
              className="insert-0"
            />
          </div>

          <div className="font-semibold " style={{ fontSize: "14px" }}>
            Products Offered:
            <div
              className="text-xs font-normal w-48 "
              style={{ fontStyle: "italic" }}
            >
              IBM QRadar Suite, IBM Security Guardium, IBM Security Verify, IBM
              Cloud Pak for Security
            </div>
          </div>
        </div>
        <div className="flex space-x-1.5 ">
          <div>
            <Image
              src={"/product.svg"}
              alt="image"
              width={36}
              height={36}
              className="insert-0"
            />
          </div>

          <div className="font-semibold " style={{ fontSize: "14px" }}>
            TAM
            <div className="text-xs font-normal w-48 " style={{}}>
              $ 1,300 B
            </div>
          </div>
        </div>
        <div className="flex space-x-1.5 ">
          <div>
            <Image
              src={"/product.svg"}
              alt="image"
              width={36}
              height={36}
              className="insert-0"
            />
          </div>

          <div className="font-semibold " style={{ fontSize: "14px" }}>
            YOY GROWTH{" "}
            <div
              className="text-xs font-normal w-48 "
              style={{ fontStyle: "italic" }}
            >
              5-Year CAGR: <b>1.69%</b>
            </div>
          </div>
        </div>
        <div className="flex space-x-1.5 ">
          <div>
            <Image
              src={"/product.svg"}
              alt="image"
              width={36}
              height={36}
              className="insert-0"
            />
          </div>

          <div className="font-semibold " style={{ fontSize: "14px" }}>
            Potential Customers:
            <div
              className="text-xs font-normal w-48 "
              style={{ fontStyle: "italic" }}
            >
              Financial Services, Healthcare & Life, Government & Defense.
              Telecommunications & Media
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 mt-4">
        <div className="font-semibold ">Market Growth Estimation</div>
        <div className="-translate-x-4">
          <MarketChart />
        </div>
      </div>
      <div>
        <div className="font-semibold ml-6">
          Total Adressabale Market (TAM){" "}
        </div>
        <div className="ml-6 mt-6 space-y-5">
          <div className=" text-xs flex w-full space-x-0">
            <div className="w-1/5">Total Adressable Market (TAM) </div>
            <div
              className="h-10 w-4/5 mr-6 text-white items-center flex pl-2 font-semibold text-xl"
              style={{ backgroundColor: "#1E4841" }}
            >
              $ 1300 B
            </div>
          </div>
          <div className=" text-xs flex w-full space-x-0">
            <div className="w-2/10">Total Adressable Market (TAM) </div>
            <div className="h-10 w-3/10 mr-6 bg-blue-600 text-white items-center flex pl-2 font-semibold text-xl">
              $ 500 B
            </div>
            <div className="w-5/10"></div>
          </div>
          <div className=" text-xs flex w-full space-x-0">
            <div className="w-1/5">Total Adressable Market (TAM) </div>
            <div className="h-10 w-1/5 mr-6 bg-lime-300 text-white items-center flex pl-2 font-semibold text-xl">
              $ 150 B
            </div>
            <div className="w-3/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
