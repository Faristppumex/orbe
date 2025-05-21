import Image from "next/image";

export default function ProductInsights() {
  return (
    <div className="mt-4 ml-6">
      <div className="font-semibold text-xl">Product</div>
      <div className="font-semibold text-[14px]">Insight platform</div>
      <div>
        <List />
      </div>
    </div>
  );
}

function List() {
  const data = [
    {
      title: "IBM Security QRadar SIEM",
      content:
        "Integrates security information and event management to detect and prioritize threats across your environment",
    },
    {
      title: "IBM Security QRadar SIEM",
      content:
        "Integrates security information and event management to detect and prioritize threats across your environment",
    },
    {
      title: "IBM Security QRadar SIEM",
      content:
        "Integrates security information and event management to detect and prioritize threats across your environment",
    },
    {
      title: "IBM Security QRadar SIEM",
      content:
        "Integrates security information and event management to detect and prioritize threats across your environment",
    },
  ];
  return (
    <div className="mt-4 space-y-1">
      {data.map((d, index) => (
        <div key={index} className="flex ">
          <div className="w-9 h-9 bg-amber-50 mr-3">
            <Image src={"/hotel.svg"} alt="icon" width={32} height={32} />
          </div>
          <div className="text-xs">
            <span
              className="font-semibold text-sm"
              style={{ color: "#242E2C" }}
            >
              {d.title}:{" "}
            </span>{" "}
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "normal",
                color: "#242E2C",
              }}
            >
              {d.content}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
