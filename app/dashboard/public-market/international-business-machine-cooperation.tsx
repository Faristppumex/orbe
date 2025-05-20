import Image from "next/image";
export default function InternationalBusiness() {
  return (
    <div className="grid grid-cols-11">
      <div className="col-span-5">
        <div className="flex">
          <div
            className="w-21 h-21  rounded-full"
            style={{ backgroundColor: "#1E4841" }}
          ></div>
          <div className=" ml-2 " style={{ fontSize: "20", color: "#242E2C" }}>
            International Business Machine Corporation <br />
            <div className="flex space-x-3">
              <div className="w-7 h-5.5 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
                IBM
              </div>
              <div className="w-9.5 h-5.5 bg-white text-sm rounded-3xl font-light flex justify-center items-center">
                NYSE
              </div>
            </div>
            <div style={{ fontSize: "20px" }}>
              214.9{" "}
              <span style={{ fontSize: "12px", fontWeight: "normal" }}>
                USD
              </span>
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                color: "#F80000",
              }}
            >
              -4.95(-19.8%)
            </div>
          </div>
        </div>
        <div
          className="mt-4 font-semibold"
          style={{
            fontSize: "12px",
            color: "#6B7271",
            width: "430px",
            height: "60px",
          }}
        >
          <div className="mb-4">
            International Business Machines Corporation provides integrated
            solutions and services worldwide. The company operates through four
            business segments: Software, Consulting, Infrastructure, and
            Financing.
          </div>
          <a
            href="https://www.ibm.com"
            style={{ color: "#1E4841", fontSize: "12" }}
          >
            https://www.ibm.com
          </a>
        </div>
      </div>

      {/**column 2 */}
      <div
        className="  col-span-2 space-y-5 pt-3  font-semibold"
        style={{ color: "#6B7271", fontSize: "11px" }}
      >
        <div>
          Founded: <span style={{ color: "#9747FF" }}>1911</span>
        </div>
        <div>
          Headquarters:
          <span style={{ color: "#9747FF" }}>Armonk, New York, USA</span>
        </div>
        <div>
          Industry:{" "}
          <span className="bg-white border-1 rounded-xl px-1">
            IT, Software
          </span>{" "}
          <span className="bg-white border-1 rounded-xl px-1 ">AI</span>
        </div>
        <div>
          Type:
          <span style={{ color: "#9747FF" }}>Publicly Traded</span>
        </div>
      </div>

      <div className="col-span-4 flex flex-col">
        <div className="flex justify-between mr-0 ">
          <div className="">Key Management</div>
          <div className="mr-4">
            <Image src="/Notification.svg" alt="Bell" width={38} height={38} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Aravind Krishna (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              CEO
            </span>
            )
          </div>
          <div className="flex h-5 items-center font-medium text-xs w-full">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Jonathan H. Adashek (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              Senior VP, Marketing and Communications
            </span>
            )
          </div>
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Mohammed Ali (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              Senior VP, IBM Consulting
            </span>
            )
          </div>
          <div className="flex h-5 items-center font-medium text-xs">
            <div
              className="h-5 w-5 rounded-full  mr-2"
              style={{ backgroundColor: "#BBF49C" }}
            ></div>
            Ana Paula Assis (
            <span className="font-light" style={{ fontStyle: "italic" }}>
              Senior VP, EMEA and Growth Marketing
            </span>
            )
          </div>
        </div>
        <div
          className="w-fit rounded-4xl px-2 mt-5.5 h-10 flex items-center font-medium py-3.5"
          style={{ backgroundColor: "#BBF49C", fontSize: "14px" }}
        >
          Regenerate Insights
        </div>
      </div>
    </div>
  );
}
