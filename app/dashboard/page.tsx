import LatestNews from "../Components/dashboard/latestnews";
import Portfolio from "../Components/dashboard/portfolio";
import Heading from "../Components/dashboard/heading";
import Table from "../Components/dashboard/table";


export default function Dashboard() {
  return (
    <div className="w-screen py-7" style={{ backgroundColor: "#ECF4E9" }}>
      <div
        className="flex flex-col  mt-8 mr-7 pt-6 px-6 rounded-3xl"
        style={{ backgroundColor: "#FBFBFC" }}
      >
        <Heading />
        <div
          className="flex bg-amber-50 rounded-3xl  space-x-5"
          style={{ backgroundColor: "#FBFBFC" }}
        >
          <div className="flex bg-white h-11/12 w-2/4 ml-7 my-5 rounded-xl p-3 text-purple-300 ">
            <LatestNews />
          </div>
          <div className="bg-blue-100 h-11/12 w-2/4 mr-7 my-5 rounded-xl">
            <Portfolio />
          </div>
        </div>
        <div className="  h-fit flex-1 mb-3  content-center w-full text-center">
          <Table />
        </div>
      </div>
    </div>
  );
}
