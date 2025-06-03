import Image from "next/image";
import SidebarItem from "./sidebarItems";
import Search from "./searchtab";

export default function Sidebar() {
  return (
    <div
      className="w-16 md:w-48 min-h-screen"
      style={{ background: "#ECF4E9" }}
    >
      <div className="mt-6 ml-2 md:ml-4">
        <a href="../">
          <Image
            priority={true}
            src="/logo.svg"
            alt="logo"
            width={124}
            height={40}
            className="hidden md:block"
          />
          {/* Optional: show a compact icon on small screens */}

          <Image
            priority={true}
            src="/logo-icon.svg" // Replace with a small logo icon
            alt="logo"
            width={32}
            height={32}
            className="md:hidden ml-1.5"
          />
        </a>
      </div>
      <div className="mx-2 md:mx-4">
        <SidebarItem icon="/Vector.svg" name="Dashboard" href="../dashboard" />
        <SidebarItem
          icon="/user.svg"
          name="User Management"
          href="/usermanagement"
        />
        <SidebarItem icon="/credit.svg" name="Deals" href="/" />
        <SidebarItem icon="/Cardholder.svg" name="Portfolio" href="/" />
        <SidebarItem icon="/Newspaper.svg" name="Insight" href="/" />
        <div className="hidden md:block">
          <Search />
        </div>
      </div>
    </div>
  );
}
