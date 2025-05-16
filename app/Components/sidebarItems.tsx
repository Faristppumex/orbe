"use client";
import Link from "next/link";

import Image from "next/image";

export default function SidebarItem({ icon, name }) {
  return (
    <a className="flex my-3 w-40 h-10 hover:bg-amber-200 bg-white text-emerald-700 pl-3 py-2 rounded-3xl text-sm space-x-1 gap-1 items-center">
      <Image src={icon} alt={name} width={24} height={24} />
      <span>{name}</span>
    </a>
  );
}
