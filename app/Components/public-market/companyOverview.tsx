import Image from "next/image";
export default function CompanyOverview() {
  const points = [
    "IBM (International Business Machines Corporation) is a global technology and consulting company that provides enterprise solutions in cloud computing, artificial intelligence, cybersecurity, and hybrid cloud infrastructure.",
    "IBM offers products and services across key domains including IBM Cloud, IBM Watson (AI), infrastructure services, data & analytics, quantum computing, and security through a mix of software, hardware, and consulting solutions.",
    "IBM delivers its solutions via a hybrid cloud platform and supports digital transformation through its Red Hat acquisition, strategic partnerships (e.g., AWS, Microsoft), and a strong focus on open-source technologies.",
    "Founded in 1911, IBM is headquartered in Armonk, New York. It operates in over 175 countries, serves thousands of enterprise clients, and employs more than 280,000 professionals globally.",
  ];
  return (
    <div>
      <h1
        className="flex font-semibold space-x-2 ml-3"
        style={{ fontSize: "20px" }}
      >
        {" "}
        <Image
          src={"/hotel.svg"}
          alt="img"
          width={20}
          height={20}
          className="mr-2"
        />
        Company OverView
        <Image
          src={"/DotsThreeVertical.svg"}
          alt="more"
          width={16}
          height={16}
          className="ml-auto mr-3"
        />
      </h1>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <ul className="space-y-3 text-gray-800 text-sm pl-2 pt-2 pr-1 ">
        {points.map((point, index) => (
          <li key={index} className="relative pl-6 leading-relaxed">
            <span className="absolute left-0 top-2 w-2 h-2 bg-gray-800 rounded-full"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
