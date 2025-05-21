import Image from "next/image";
import MarketChart from "./marketchart";
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
        <div className="">
          <MarketChart />
        </div>
      </div>
    </div>
  );
}
