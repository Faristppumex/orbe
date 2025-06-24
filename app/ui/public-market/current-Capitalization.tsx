import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/store/store";
import { fetchCapitalization } from "@/app/store/slices/currentCapitalizationSlice";
import { RootState } from "@/app/store/store";
import { fetchCompanyProfile } from "@/app/store/slices/companyProfileSlice";
import Image from "next/image";

export default function Capitalization({ symbol }: { symbol: string }) {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.currentCapitalization
  );

  const { data: companyProfile } = useSelector(
    (state: RootState) => state.companyProfile
  );

  useEffect(() => {
    dispatch(fetchCapitalization(symbol));
  }, [dispatch, symbol]);

  useEffect(() => {
    dispatch(fetchCompanyProfile(symbol));
  }, [dispatch, symbol]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data.length) return <div>No data found.</div>;

  const latest = data[data.length - 1]; // Get the latest entry
  const sharePrice = companyProfile?.price || 0;

  const basicSharesOutstanding = latest.metrics.weightedAverageShsOut;
  const marketCapitalization = basicSharesOutstanding * sharePrice;
  const fullyDilutedSharesOutstanding =
    latest.metrics.weightedAverageShsOutDil || basicSharesOutstanding;
  const fullyDilutedMarketCap = sharePrice * fullyDilutedSharesOutstanding;
  const consolidatedDebt = latest.metrics?.totalDebt || 0;
  const cashAndEquivalents = latest.metrics?.cashAndCashEquivalents || 0;
  const nonControllingInterest = latest.metrics?.minorityInterest || 0;
  const enterpriseValue =
    marketCapitalization +
    consolidatedDebt +
    nonControllingInterest -
    cashAndEquivalents;

  // Helper to format value dynamically to B, M, or K
  function formatNumber(value: number): string {
    const abs = Math.abs(value);
    if (abs >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(1) + "B";
    } else if (abs >= 1_000_000) {
      return (value / 1_000_000).toFixed(1) + "M";
    } else if (abs >= 1_000) {
      return (value / 1_000).toFixed(1) + "K";
    }
    return value.toString();
  }

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
        <p>${sharePrice.toLocaleString()}</p>
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <div className="space-y-3 pr-3">
        <div className="flex justify-between w-full ml-3 text-[16px]">
          <span>Basic Shares Outstanding</span>
          <span className="font-semibold">
            {formatNumber(basicSharesOutstanding)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px] bg-gray-200 font-semibold">
          <span>Market Capitalization</span>
          <span className="font-normal">
            ${formatNumber(marketCapitalization)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px]">
          <span>Fully Diluted Shares Outstanding</span>
          <span className="font-semibold">
            {formatNumber(fullyDilutedSharesOutstanding)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px] bg-gray-200 font-semibold">
          <span>Fully Diluted Market Cap</span>
          <span className="font-normal">
            ${formatNumber(fullyDilutedMarketCap)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px]">
          <span>Consolidated Debt</span>
          <span className="font-semibold">
            ${formatNumber(consolidatedDebt)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px]">
          <span>Cash and Equivalents</span>
          <span className="font-semibold">
            ${formatNumber(cashAndEquivalents)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px]">
          <span>Non-Controlling Interest</span>
          <span className="font-semibold">
            ${formatNumber(nonControllingInterest)}
          </span>
        </div>
        <div className="flex justify-between w-full ml-3 text-[16px] bg-gray-200 font-semibold">
          <span>Enterprise Value</span>
          <span className="font-normal">${formatNumber(enterpriseValue)}</span>
        </div>
      </div>
    </div>
  );
}
