import Image from "next/image";
export default function LatestNewspublic() {
  const points = [
    "IBM (International Business Machines Corporation) is a global technology and consulting company that provides enterprise solutions in cloud computing, artificial intelligence, cybersecurity, and hybrid cloud infrastructure.",
    "IBM offers products and services across key domains including IBM Cloud, IBM Watson (AI), infrastructure services, data & analytics, quantum computing, and security through a mix of software, hardware, and consulting solutions.",
    "IBM delivers its solutions via a hybrid cloud platform and supports digital transformation through its Red Hat acquisition, strategic partnerships (e.g., AWS, Microsoft), and a strong focus on open-source technologies.",
    "Founded in 1911, IBM is headquartered in Armonk, New York. It operates in over 175 countries, serves thousands of enterprise clients, and employs more than 280,000 professionals globally.",
  ];
  return (
    <div className=" rounded ">
      <h1
        className="flex font-semibold space-x-2 ml-3 mb-2 mt-2"
        style={{ fontSize: "20px" }}
      >
        {" "}
        {/* <Image
          src={"/news.svg"}
          alt="img"
          width={20}
          height={20}
          className="mr-2"
        /> */}
        Latest News
        {/* <Image
          src={"/DotsThreeVertical.svg"}
          alt="more"
          width={16}
          height={16}
          className="ml-auto mr-3"
        /> */}
      </h1>
      <hr style={{ color: "#EDEDED", fontWeight: "bolder" }} />

      <ul
        className="space-y-3 text-gray-800 mt-4 mr-2 ml-2"
        style={{ fontSize: "12px" }}
      >
        {points.map((point, index) => (
          <li key={index} className="relative pl-6 leading-relaxed">
            <span className="absolute left-2 top-2 w-2 h-2 bg-gray-800 rounded-full"></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
