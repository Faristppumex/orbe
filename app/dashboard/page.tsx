import Circle from "../Components/circle";
import LatestNews from "./components/latestnews";
import Portfolio from "./components/portfolio";
import Heading from "./components/heading";
export default function Dashboard() {
  return (
    <div className="bg-amber-100 w-screen">
      <div className="flex flex-col bg-amber-50 mt-8 mr-7 h-screen pt-6 px-6 rounded-3xl">
        <Heading />
        <div className="flex   bg-amber-50 rounded-3xl space-x-5">
          <div className="flex bg-white h-11/12 w-2/4 ml-7 my-5 rounded-xl p-3 text-purple-300 ">
            <LatestNews />
          </div>
          <div className="bg-blue-100 h-11/12 w-2/4 mr-7 my-5 rounded-xl">
            <Portfolio />
          </div>
        </div>
        <div className="bg-blue-600 flex-1 mb-3 rounded mx-6 content-center text-center">
          Table
        </div>
      </div>
    </div>
  );
}
