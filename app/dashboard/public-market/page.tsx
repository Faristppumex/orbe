import InternationalBusiness from "./international-business-machine-cooperation";
import Image from "next/image";
import CompanyOverview from "./companyOverview";
import CurrentCapital from "./current-Capitalization";
export default function App() {
  return (
    <section
      className=" w-full px-5 pt-5"
      style={{ background: "#ECF4E9", color: "black" }}
    >
      <div
        className="flex row-span-0 h-9  mb-4 text-gray-600 font-bold rounded-xl justify-end "
        style={{ background: "#ECF4E9", fontSize: "22px" }}
      >
        <div className="mr-auto">Public Markets</div>
        <div className="flex justify-end w-44 ">
          <div className="py-2 pr-3.5" style={{ fontSize: "16px" }}>
            VB
          </div>
          <div
            className=" w-9.5 h-9.6 rounded-full"
            style={{ backgroundColor: "#BBF49C" }}
          ></div>
        </div>
      </div>

      <div
        className="flex flex-col  w-full    rounded-2xl"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div
          className="h-9.5 my-4 mx-6 rounded "
          style={{ backgroundColor: "#ECF4E9" }}
        >
          Company Profile , Insights , Files
        </div>
        <div
          className="h-64 my-4 mx-6 rounded pt-4 pl-4 border "
          style={{
            backgroundColor: "#FAFAFA",
            fontSize: "20px",
            fontWeight: "bold",
            borderColor: "#CCCCCC",
          }}
        >
          <InternationalBusiness />
        </div>

        <div className=" flex h-13 my-4 mx-6 ">
          <div
            className="w-48 mr-3 flex items-center justify-center font-medium"
            style={{
              backgroundColor: "#F7F1FF",
              // opacity: 0.12,
              color: "#6B7271",
              fontSize: "11px",
            }}
          >
            {" "}
            Sentiment Score:<span style={{ color: "#9747FF" }}>Positive</span>
            <div className="ml-2">
              <Image src={"/info.svg"} alt="info" width={16} height={16} />
            </div>
          </div>
          <div
            className="w-45 ml-3 flex items-center justify-center font-medium border-1 rounded"
            style={{
              backgroundColor: "#F6FDF3",
              color: "#6B7271",
              fontSize: "11px",
            }}
          >
            Deal Score:{" "}
            <div
              className="text-black w-5 h-5 rounded-full  font-bold flex items-center justify-center ml-1.5"
              style={{ backgroundColor: "#BBF49C" }}
            >
              84
            </div>
            <Image
              className="ml-2"
              src={"/info.svg"}
              alt="info"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div
          className="flex h-90 text-black space-x-4 my-4 mx-6 rounded"
          style={{ backgroundColor: "white" }}
        >
          <div className="w-1/2  rounded-xl pt-4 border-1 border-gray-400">
            <CompanyOverview />
          </div>
          <div
            className="w-1/2  rounded-xl pt-4 border-1 border-gray-400"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <CurrentCapital />
          </div>
        </div>

        <div className="h-110 bg-blue-300 mx-6 rounded-2xl mb-4 pl-4 pt-4">
          Historical Prices
        </div>

        <div
          className="flex h-90 text-black space-x-4 my-4 mx-6 rounded"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <div className="w-1/2 bg-amber-200 rounded-xl pt-4 pl-4">
            Key Customers
          </div>
          <div
            className="w-1/2 bg-blue-600 rounded-xl pt-4 pl-4 border-amber-900"
            style={{ backgroundColor: "" }}
          >
            Latest News
          </div>
        </div>
        <div className="flex h-178   mx-6 mt-4 mb-4 space-x-5 rounded">
          <div className="w-1/2 rounded bg-red-500">Market</div>
          <div className="w-1/2 space-y-3 pb-3 ">
            <div className="bg-amber-300 h-1/2">Product</div>
            <div className="bg-amber-900 h-1/2">Sentimental Analysis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
