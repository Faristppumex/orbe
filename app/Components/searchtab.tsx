import Image from "next/image";
export default function Search() {
  return (
    <div className="flex my-3 w-40 h-10 hover:bg-emerald-900 bg-emerald-700 text-yellow-200 px-3 py-2 rounded-3xl text-sm space-x-1 gap-1 items-center">
      <Image src="/Search.svg" alt="Search" width={24} height={24} />
      <span>Search</span>
    </div>
  );
}
