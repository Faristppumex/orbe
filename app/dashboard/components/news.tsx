import Image from "next/image";
import { Urbanist } from "next/font/google";
import data from "@/app/data/news";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // customize as needed
  display: "swap",
});

export default function News() {
  const avatar = "/avatar.svg";

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 mt-4 flex-1">
        {data.map((_, i) => (
          <div
            key={i}
            className="bg-white p-1 rounded-xl hover:shadow-md transition space-x-2"
          >
            <div className="flex items-center mb-2 mr-1 space-x-1.5">
              <Image
                src={avatar} // Replace with your image
                alt="avatar"
                width={24}
                height={24}
              />
              <span className="text-sm font-semibold">
                YC startup raises $120M
              </span>
            </div>
            <div
              className="text-sm  font-urbanist "
              style={{ color: "#999999" }}
            >
              GenX Lab Secures Funding to Propel Innovative Solutions Forward
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-7 pb-2.5 float-end mr-4 font-semibold font-urbanist hover:shadow-md rounded"
        style={{
          color: "#1A8917",
          fontSize: "12px",
        }}
      >
        <button className="">See The full List</button>
      </div>
    </div>
  );
}
