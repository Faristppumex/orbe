"use client";

import Image from "next/image";
import Link from "next/link";

type SidebarItemProps = {
  icon: string;
  name: string;
  href: string;
};

export default function SidebarItem({ icon, name, href }: SidebarItemProps) {
  return (
    <Link
      className="flex my-3 w-40 h-10 text-emerald-700 pl-3 py-2 rounded-3xl text-sm space-x-1 gap-1 items-center"
      style={{
        transition: "background-color",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#BBF49C")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ECF4E9")}
      href={href}
    >
      <Image src={icon} alt={name} width={24} height={24} />
      <span>{name}</span>
    </Link>
  );
}
