export default function Bar() {
  return (
    <div
      className="flex justify-around items-center rounded-lg h-9"
      style={{ background: "#ECF4E9" }}
    >
      <div
        className="text-center font-semibold w-1/3 h-full content-center rounded-lg text-white"
        style={{ backgroundColor: "#1E4841" }}
      >
        Company Profile
      </div>
      <div className="text-center font-semibold w-1/3 ">Insights</div>
      <div className="text-center font-semibold w-1/3">Files</div>
    </div>
  );
}
