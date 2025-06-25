import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/store/store";
import { fetchEarningCallTranscript } from "@/app/store/slices/SummarySlice";
import { RootState } from "@/app/store/store";
import { useRouter } from "next/navigation";
import { LuChevronRight } from "react-icons/lu";

export default function Summary() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    transcripts = [],
    loading = false,
    error = null,
  } = useSelector((state: RootState) => state.summary) || {};

  // Set your desired symbol, year, and quarter here
  const symbol = "AAPL";
  const year = 2025;
  const quarter = 1;

  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    dispatch(fetchEarningCallTranscript({ symbol, year, quarter }));
  }, [dispatch, symbol, year, quarter]);

  useEffect(() => {
    if (expanded) {
      router.push(`${window.location.pathname}/summary`);
    }
  }, [expanded, router]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!transcripts.length) return <div>No summary available.</div>;
  return (
    <>
      <div className="h-10 flex justify-between">
        <div className="flex items-center">
          <Image
            src="/summary-icon.svg"
            alt="s"
            width={20}
            height={20}
            className="ml-3"
          />
          <p className=" content-center ml-4 my-2 font-semibold ">Summary</p>
        </div>
        <button
          data-slot="button"
          className=" border  h-7 p-0.5 rounded-lg bg-white text-black hover:bg-gray-200 my-2 mr-2"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex  gap-2">
            <div className="flex items-center">
              View More <LuChevronRight className="" />
            </div>
          </div>
        </button>
      </div>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />
      <div className="">
        <div
          className="m-2 space-y-2 text-black line-clamp-12"
          style={{ fontSize: "14px" }}
        >
          {transcripts.map((t, i) => (
            <li className="line-clamp-15" key={i}>
              <span className="mt-2 mr-2 w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
              {t}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
