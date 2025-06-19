import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function CurrentCapital() {
  const points = useSelector(
    (state: RootState) => state.currentCapitalization.points
  );

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
      <ul className="space-y-3 text-gray-800 text-md pl-2 pt-2 pr-1 mt-2 ">
        {points.map((point, index) => {
          const isBoldBg = point.priority === "bold with background";
          return (
            <li
              key={index}
              className={`px-2 ${
                isBoldBg ? "font-bold bg-gray-100 rounded" : ""
              }`}
            >
              <div className="mx-4 flex justify-end">
                <div className="mr-auto">{point.title}</div>
                <div>{point.price}</div>
              </div>
              <hr style={{ color: "#EDEDED" }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
