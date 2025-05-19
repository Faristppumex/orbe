import Image from "next/image";
import { title } from "process";
export default function News() {
  const avatar = "/avatar.svg";
  const data = [
    {
      title: "YC startup raises $120M",
      content:
        " GenX Lab Secures Funding to Propel Innovative Solutions Forward",
    },
    {
      title: "YC startup raises $120M",
      content:
        " GenX Lab Secures Funding to Propel Innovative Solutions Forward",
    },
    {
      title: "YC startup raises $120M",
      content:
        " GenX Lab Secures Funding to Propel Innovative Solutions Forward",
    },
    {
      title: "YC startup raises $120M",
      content:
        " GenX Lab Secures Funding to Propel Innovative Solutions Forward",
    },
    {
      title: "YC startup raises $120M",
      content:
        " GenX Lab Secures Funding to Propel Innovative Solutions Forward",
    },
    {
      title: "YC startup raises $120M",
      content:
        " GenX Lab Secures Funding to Propel Innovative Solutions Forward",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2  flex-1">
      {data.map((_, i) => (
        <div
          key={i}
          className="bg-white p-1 rounded-xl hover:shadow-md transition"
        >
          <div className="flex items-center mb-2 mr-1">
            <Image
              src={avatar} // Replace with your image
              alt="avatar"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold">
              YC startup raises $120M
            </span>
          </div>
          <div className="text-sm text-gray-500 font-normal">
            GenX Lab Secures Funding to Propel Innovative Solutions Forward
          </div>
        </div>
      ))}
    </div>
  );
}
