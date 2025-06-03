import Image from "next/image";

const points = [
  { title: "something", price: "$10000" },
  { title: "something", price: "$10000" },
  { title: "something", price: "$10000" },
  { title: "something", price: "$10000" },
  { title: "something", price: "$10000" },
];

export default function CurrentCapital() {
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

      <ul className="space-y-3 text-gray-800 text-sm pl-2 pt-2 pr-1 mt-5 ">
        {points.map((point, index) => (
          <li key={index} className="mx-4 flex justify-end">
            <div className="mr-auto">{point.title}</div>
            <div> {point.price}</div>
            <hr style={{ color: "#EDEDED" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
