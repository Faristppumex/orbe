"use client";

import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

const CustomCenterLabel = () => (
  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
    <tspan x="50%" dy="-0.6em" fontSize="12" fill="#111">
      Total Exit Value
    </tspan>
    <tspan x="50%" dy="1.6em" fontSize="16" fill="#333" fontWeight="bold">
      $4.5B
    </tspan>
  </text>
);

const data = [
  { name: "Enterprise", value: 4750000000 },
  { name: "Financial Services", value: 3750000000 },
  { name: "Learning & Development", value: 2900000000 },
  { name: "AI and Tech", value: 2000000000 },
  { name: "Media & Entertainment", value: 1850000000 },
];

const COLORS = ["#1E4841", "#BBF49C", "#ECF4E9", "#BCBEBD", "#E5E6E6"];

const totalValue = data.reduce((sum, item) => sum + item.value, 0);

export default function DonutChart() {
  return (
    <div className="bg-white p-6 rounded-lg  max-w-lg mx-auto">
      <PieChart width={500} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          paddingAngle={2}
          dataKey="value"
          isAnimationActive={false}
        >
          <Label content={<CustomCenterLabel />} position="center" />
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}

          <Label content={<CustomCenterLabel />} position="center" />
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          formatter={(value: number) => `$${(value / 1e9).toFixed(2)}B`}
        />
      </PieChart>

      {/* Line-by-line listing below the chart */}
      <div className="mt-6 space-y-2 text-sm text-gray-700">
        {data.map((item, index) => {
          const percentage = ((item.value / totalValue) * 100).toFixed(0);
          return (
            <div key={index} className="flex justify-between">
              <span className="">
                <div className="flex ">
                  <div
                    className="rounded w-8 pl-1 pr-2 mr-3 text-black"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  >
                    {percentage}%
                  </div>
                  {item.name}
                </div>
              </span>
              <span>${(item.value / 1e9).toFixed(2)}B</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
