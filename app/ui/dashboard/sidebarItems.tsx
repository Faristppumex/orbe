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
      className="flex my-3 w-12 md:w-40 h-10 text-emerald-700 pl-3 py-2 rounded-3xl text-sm gap-2 items-center transition-colors duration-200 hover:bg-[#BBF49C] bg-[#ECF4E9]"
      href={href}
    >
      <Image src={icon} alt={name} width={24} height={24} />
      <span className="hidden md:inline">{name}</span>
    </Link>
  );
}
