import React from "react";

type Props = {
  onClose: () => void;
};

export default function TracksModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-90
"
    >
      <div className="bg-white opacity-100 rounded-lg shadow-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold font-urbanist mb-4 text-black">
          Choose Track
        </h2>
        <p className="text-sm text-gray-700 ">
          <ul className="space-y-2">
            <li className="flex space-x-3">
              <div
                className="h-9 w-9 text-center content-center rounded-full space-x-1.5"
                style={{
                  backgroundColor: "#242E2C",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                VC{" "}
              </div>
              <div className="mt-2">Venture Capital</div>
            </li>
            <hr />
            <li className="flex space-x-3">
              <div
                className="h-9 w-9 text-center content-center rounded-full space-x-1.5"
                style={{
                  backgroundColor: "#242E2C",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                PE{" "}
              </div>
              <div className="mt-2">Private Equity</div>
            </li>
            <hr />
            <li className="flex space-x-3">
              <div
                className="h-9 w-9 text-center content-center rounded-full space-x-1.5"
                style={{
                  backgroundColor: "#242E2C",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                PM{" "}
              </div>
              <a href="./dashboard/private-market">
                <div className="mt-2">Public Markets</div>
              </a>
            </li>
            <hr />
          </ul>
        </p>
      </div>
    </div>
  );
}
