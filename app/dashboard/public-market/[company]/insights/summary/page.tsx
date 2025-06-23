"use client";

type Props = {
  params: Promise<{ company: string }>;
};

export default function App({}: Props) {
  return (
    <section className="w-full px-4 pt-5 pb-5 bg-[#ECF4E9] text-black">
      {/* Header */}

      {/* Main Container */}
      <div className="flex flex-col w-full min-h-full rounded-2xl bg-white">
        <div className="my-4 mx-2 sm:mx-6"></div>

        <div className="p-4 flex text-gray-700 text-lg ">
          <div className=" h-60 w-100 border-2 border-gray-300 rounded-xl ">
            <button className="border m-2 p-2 rounded border-gray-300 hover:bg-gray-400 hover:text-white">
              sort by sentiment
            </button>
            <div className="border m-2 px-4 py-2 h-fit rounded border-gray-300">
              Filters
              <div>
                <button className="border m-2 p-2 rounded border-gray-300 hover:bg-gray-400 hover:text-white ">
                  Filter by Year
                </button>
                <button className="border m-2 p-2 rounded border-gray-300 hover:bg-gray-400 hover:text-white  ">
                  Filter by Quarter
                </button>
              </div>
            </div>
          </div>
          <div className="mx-4 font-black text-xl w-fit">
            Insight Differentiator Summary
            <div className="text-md font-normal mt-2 alighn-left text-gray-600">
              lourem epsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
