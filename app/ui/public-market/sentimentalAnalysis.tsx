"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuChevronRight } from "react-icons/lu";
export default function SentimentalAnalysis() {
  const sources = [
    { AI: 16 },
    { Watson: 15 },
    { Cloud: 11 },
    { Growth: 7 },
    { NetIncome: 1 },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (expanded) {
      router.push(`${window.location.pathname}/sentimentalAnalysis`);
    }
  }, [expanded, router]);

  return (
    <>
      <div className="h-10 flex">
        <Image
          src={"/press-icon.svg"}
          alt="p"
          width={20}
          height={20}
          className="ml-3"
        />
        <p className="text-black font-semibold ml-2 content-center">
          Sentimental Analysis
        </p>
        <button
          className="ml-auto mr-3 my-2 border border-gray-300 rounded text-sm text-black px-2 hover:bg-gray-200"
          onClick={() => setExpanded(!expanded)}
        >
          Click to View Sentimental Analysis{" "}
          <LuChevronRight className="inline" />
        </button>
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
      <div className="px-4 py-2 text-black">
        <h1 style={{ fontSize: "20px" }}>Q1 2025 Earnings Call</h1>
        <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
        <ul className="mt-4.5">
          hello
          {sources.map((s, i) => {
            const [key, value] = Object.entries(s)[0]; // Destructure the single key-value
            return (
              <li key={i} className="my-1">
                <div className="flex items-center">
                  <div>{key}</div>
                  <div
                    className=" text-center w-8 h-6 ml-auto "
                    style={{ backgroundColor: "#ACBCB9" }}
                  >
                    {value}
                  </div>
                </div>
                <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-20 space-x-4">
          <div className="flex">
            <div
              className=" w-7 h-7 mr-1 content-center px-2"
              style={{ backgroundColor: "#EEFF00" }}
            >
              {5}
            </div>
            <div>Neutral</div>
          </div>
          <div className="flex">
            <div
              className=" w-7 h-7 mr-1 content-center px-2"
              style={{ backgroundColor: "#FF3A3A" }}
            >
              {8}
            </div>
            <div>Negative</div>
          </div>
          <div className="flex">
            <div
              className=" w-7 h-7 mr-1 content-center px-2"
              style={{ backgroundColor: "#15D000" }}
            >
              {4}
            </div>
            <div>Positive</div>
          </div>
        </div>
      </div>
    </>
  );
}
