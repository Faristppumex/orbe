// import Image from "next/image";
export default function KeyCustomers() {
  return (
    <div>
      <h1
        className="flex font-semibold space-x-2 ml-3"
        style={{ fontSize: "20px" }}
      >
        {" "}
        {/* <Image
          src={"/user-search.svg"}
          alt="img"
          width={20}
          height={20}
          className="mr-2"
        /> */}
        Key Customers
        {/* <Image
          src={"/DotsThreeVertical.svg"}
          alt="more"
          width={20}
          height={20}
          className="ml-auto mr-3"
        /> */}
      </h1>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <div className="flex mt-6 ml-6 gap-x-22 gap-y-10 flex-wrap">
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-gray-700 w-15 h-15 rounded-full"></div>
          <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
            Walmart
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-gray-700 w-15 h-15 rounded-full"></div>
          <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
            Bank of America
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-gray-700 w-15 h-15 rounded-full"></div>
          <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
            Visa
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-gray-700 w-15 h-15 rounded-full"></div>
          <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
            Exon Mobile
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-gray-700 w-15 h-15 rounded-full"></div>
          <h2 className="font-semibold mt-1.5" style={{ fontSize: "14px" }}>
            HSBC
          </h2>
        </div>
      </div>
    </div>
  );
}
