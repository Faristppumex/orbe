import Image from "next/image";
import SidebarItem from "./sidebarItems";
import Link from "next/link";
import Search from "./searchtab";

export default function Sidebar() {
  return (
    <div className="w-48 h-screen bg-amber-100 ">
      <div className="mt-5.5 ml-4">
        <Image src="./logo.svg" alt="logo" width={124} height={40} />
      </div>
      <div className="mx-4">
        <SidebarItem icon="/Vector.svg" name="Dashboard" href="/#" />
        <SidebarItem icon="/user.svg" name="User Management" href="/#" />
        <SidebarItem icon="/credit.svg" name="Deals" href="#" />
        <SidebarItem icon="/Cardholder.svg" name="Portfolio" href="#" />
        <SidebarItem icon="/Newspaper.svg" name="Insight" href="#" />
        <Search />
      </div>
    </div>
  );
}
