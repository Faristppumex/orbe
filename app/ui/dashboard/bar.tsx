import Image from "next/image";
export default function Bar() {
  return (
    <div
      className="flex justify-around items-center rounded-lg h-9 flex-wrap"
      style={{ background: "#ECF4E9" }}
    >
      <div
        className="text-center font-semibold w-1/3 h-full  rounded-lg text-white flex items-center justify-center content-center"
        style={{ backgroundColor: "#1E4841" }}
      >
        <Image src="/icon_company.svg" alt="company" width={16} height={16} />
        <div className="ml-1.5 hidden sm:block">Company Profile</div>
      </div>
      <div className="text-center font-semibold w-1/3 flex items-center justify-center">
        <Image src="/icon_insights.svg" alt="company" width={16} height={16} />
        <div className="ml-1.5 hidden sm:block">Insights</div>
      </div>

      <div className="text-center font-semibold w-1/3 flex items-center justify-center">
        <Image src="/icon_files.svg" alt="company" width={16} height={16} />
        <div className="ml-1.5 hidden sm:block">Files</div>
      </div>

      




    </div>
  );
}
