import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/store/store";
import { fetchCapitalization } from "@/app/store/slices/currentCapitalizationSlice";
import { RootState } from "@/app/store/store";
import Image from "next/image";
export default function Capitalization({ symbol }: { symbol: string }) {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.currentCapitalization
  );

  useEffect(() => {
    dispatch(fetchCapitalization(symbol));
  }, [dispatch, symbol]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data.length) return <div>No data found.</div>;

  const latest = data[data.length - 1]; // Get the latest entry
  const basicSharesOutstanding = latest.metrics.weightedAverageShsOut;

  return (
    <div>
      <h1
        className="flex font-semibold space-x-2 ml-4"
        style={{ fontSize: "20px" }}
      >
        {" "}
        $ Current Capitalization (
        <span style={{ fontWeight: "lighter", fontStyle: "italic" }}>
          $in Millions
        </span>
        )
        <Image
          src={"/DotsThreeVertical.svg"}
          alt="more"
          width={20}
          height={20}
          className="ml-auto mr-3 border-2"
        />
      </h1>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
      <div className="mt-2 ml-2 mr-4 flex justify-between">
        <p className="">Price</p>
        <p>1000</p>
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <div className="space-y-2 ">
        <p className="ml-3 text-[14px]">
          Basic Share Outstanding{" "}
          <span className="ml-95">
            ${basicSharesOutstanding / 1000000000} B
          </span>
        </p>
        <p className="ml-3 text-[14px] bg-gray-50 font-semibold">
          Market Capitalization
        </p>
        <p className="ml-3 text-[14px]">Fully Diluted Shares Outstanding</p>
        <p className="ml-3 text-[14px] bg-gray-50 font-semibold">
          Fully Diluted Market Cap
        </p>
        <p className="ml-3 text-[14px]">Consolidated Debt</p>
        <p className="ml-3  text-[14px]">
          Cash and Equivalents{" "}
          <span className="ml-100">
            ${latest.metrics.cashAndCashEquivalents / 1000000000} B
          </span>
        </p>
        <p className="ml-3 text-[14px]">Non-Controlling Interest</p>
        <p className="ml-3 text-[14px] bg-gray-50 font-semibold">
          Enterprise Value
        </p>
      </div>
    </div>
  );
}
