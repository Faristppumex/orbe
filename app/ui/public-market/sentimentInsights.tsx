// import Image from "next/image";
export default function Sentiments() {
  return (
    <div className=" h-full rounded-xl grid grid-cols-7 ">
      <div className="col-span-3  pl-6 pt-4">
        <h1 className="font-semibold text-xl">Sentimental Insights</h1>
        {/* <Image
          src={"/circled.svg"}
          alt="CHart"
          width={200}
          height={196}
          className="mt-7"
        /> */}
      </div>
      <div className="col-span-4">
        <div className="font-semibold mt-5 ml-4">Recent Mentions</div>
        <div>
          <div className="ml-5 mt-5">
            {/* <Image
              src={"/Percentage.svg"}
              alt={"Image"}
              width={28}
              height={28}
            /> */}
          </div>
          <div
            className="font-normal ml-5 mr-4 mt-3 space-y-0.5"
            style={{ fontSize: "14px" }}
          >
            IBM is recognized for its advanced AI-powered threat detection
            capabilities, which provide comprehensive visibility and accelerate
            incident response across hybrid cloud environments.
          </div>
        </div>
        <div>
          <div className="ml-5 mt-5">
            {/* <Image
              src={"/Percentage.svg"}
              alt={"Image"}
              width={28}
              height={28}
            /> */}
          </div>
          <div
            className="font-normal ml-5 mr-4 mt-3 space-y-0.5"
            style={{ fontSize: "14px" }}
          >
            IBM is recognized for its advanced AI-powered threat detection
            capabilities, which provide comprehensive visibility and accelerate
            incident response across hybrid cloud environments.
          </div>
        </div>
      </div>
    </div>
  );
}
