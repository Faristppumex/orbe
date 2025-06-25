import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Bar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {
      id: "companyProfile",
      label: "Company Profile",
      icon: "/icon_company.svg",
      route: "companyProfile",
    },
    {
      id: "insights",
      label: "Insights",
      icon: "/icon_insights.svg",
      route: "insights",
    },
    { id: "files", label: "Files", icon: "/icon_files.svg", route: "files" },
  ];

  // Extract [company] from the current path
  // Example: /dashboard/public-market/IBM/insights
  const getCompanyFromPath = () => {
    const parts = pathname.split("/");
    const idx = parts.findIndex((p) => p === "public-market");
    return idx !== -1 && parts.length > idx + 1 ? parts[idx + 1] : "";
  };

  const company = getCompanyFromPath();

  // Determine active tab from the current route
  const getActiveTabFromPath = () => {
    if (pathname.includes("/insights")) return "insights";
    if (pathname.includes("/companyProfile")) return "companyProfile";
    if (pathname.toLowerCase().includes("/files")) return "files";
    return "companyProfile"; // default
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());

  useEffect(() => {
    setActiveTab(getActiveTabFromPath());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleTabChange = (tabId: string, route: string) => {
    setActiveTab(tabId);
    // Build the new route: /dashboard/public-market/[company]/[route]
    router.push(`/dashboard/public-market/${company}/${route}`);
  };

  return (
    <div
      className="flex justify-around items-center rounded-lg h-9 flex-wrap"
      style={{ background: "#ECF4E9" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id, tab.route)}
          className={`text-center font-semibold w-1/3 h-full rounded-lg flex items-center justify-center transition-colors ${
            activeTab === tab.id ? "bg-[#1E4841] text-white" : "text-black"
          }`}
        >
          <Image src={tab.icon} alt={tab.label} width={16} height={16} />
          <div className="ml-1.5 hidden sm:block">{tab.label}</div>
        </button>
      ))}
    </div>
  );
};

export default Bar;
