import Circle from "../Components/circle";
import LatestNews from "./components/latestnews";

export default function Dashboard() {
  return (
    <div className="bg-amber-100 h-screen w-screen">
      <div className="flex flex-col bg-amber-50 h-full m-6 rounded-3xl">
        <div className="flex text-emerald-500 justify-between mt-1.5 bg-amber-50 h-9.5 mx-7 font-bold text-xl py-1.75 items-center">
          Dashboard
          <div className="flex space-x-2 ">
            <div className="my-1">
              <span className="m-1 "> VB</span>
            </div>
            <div className=" w-9.5">
              <Circle color="bg-amber-200" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 bg-amber-50 rounded-3xl space-x-5">
          <div className="flex bg-white h-2/4 w-2/4 ml-7 mt-5 rounded-xl p-3 text-purple-300 ">
            <LatestNews />
          </div>
          <div className="bg-white h-2/4 w-2/4 text-center content-center mr-7 mt-5 rounded-xl">
            Portfoli Trends
          </div>
        </div>
      </div>
    </div>
  );
}
