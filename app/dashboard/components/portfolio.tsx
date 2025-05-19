import DonutChart from "./piechart";

export default function Portfolio() {
  const Total = 4.8;

  return (
    <div className="bg-white flex flex-col rounded-xl">
      <div className="flex w-auto justify-between bg-white m-2 rounded-2xl ">
        <div className="font-bold text-black w-fit ">Portfolio Trends</div>
        <div className="text-gray-600">This Year ▾</div>
      </div>
      <div className="w-full text-center bg-white text-gray-600 mr-4 font-stretch-150% font-semibold text-sm  ">
        Investments (${Total}B)
      </div>
      <hr className="border-1 border-gray-200 my-2 mx-4" />

      {/* Pie Chart*/}
      <div>
        <DonutChart />
      </div>
    </div>
  );
}
