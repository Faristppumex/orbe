import Image from "next/image";
export default function Bar({
  value,
  onChange,
}: {
  value: string;
  onChange: (tab: string) => void;
}) {
  const tabs = [
    { id: "profile", label: "Company Profile", icon: "/icon_company.svg" },
    { id: "insights", label: "Insights", icon: "/icon_insights.svg" },
    { id: "files", label: "Files", icon: "/icon_files.svg" },
  ];

  return (
    <div
      className="flex justify-around items-center rounded-lg h-9 flex-wrap"
      style={{ background: "#ECF4E9" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`text-center font-semibold w-1/3 h-full rounded-lg flex items-center justify-center transition-colors ${
            value === tab.id ? "bg-[#1E4841] text-white" : "text-black"
          }`}
        >
          <Image src={tab.icon} alt={tab.label} width={16} height={16} />
          <div className="ml-1.5 hidden sm:block">{tab.label}</div>
        </button>
      ))}
    </div>
  );
}
