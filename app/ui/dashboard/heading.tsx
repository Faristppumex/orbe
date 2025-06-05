import Popup from "./popup";
export default function Heading() {
  return (
    <div
      className="flex text-gray-500 justify-between mt-1.5 h-9.5 mx-7 font-bold text-xl py-1.75 items-center font-urbanist"
      style={{  opacity:"100%" }}
      // backgroundColor: "#FBFBFC"
    >
      Dashboard
      <div className="flex space-x-2 ">
        <div className="my-1">
          <span className="m-1 text-gray-500"> VB</span>
        </div>
        <div className=" w-9.5">
          <Popup />
        </div>
      </div>
    </div>
  );
}
