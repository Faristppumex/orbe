export default function App() {
  return (
    <section
      className=" bg-blue-800 w-full p-5"
      style={{ background: "#ECF4E9" }}
    >
      <div
        className="flex row-span-0 bg-amber-50 h-9  mb-4 text-gray-600 font-bold rounded-xl justify-end "
        style={{ background: "#ECF4E9", fontSize: "22px" }}
      >
        <div className="mr-auto">Public Markets</div>
        <div className="flex justify-end w-44 ">
          <div className="py-2 pr-3.5" style={{ fontSize: "16px" }}>
            VB
          </div>
          <div
            className=" w-9.5 h-9.6 rounded-full"
            style={{ backgroundColor: "#BBF49C" }}
          ></div>
        </div>
      </div>

      <div className="bg-white w-full  h-screen grid rounded-2xl"></div>
    </section>
  );
}
