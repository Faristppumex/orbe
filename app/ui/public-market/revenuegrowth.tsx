import React from "react";
import {
  ResponsiveContainer,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { quarter: "Q1 '23", revenue: 4, growth: 1.2 },
  { quarter: "Q2 '23", revenue: 8, growth: 1.6 },
  { quarter: "Q3 '23", revenue: 12, growth: 2.6 },
  { quarter: "Q4 '23", revenue: 14, growth: 1.9 },
  { quarter: "Q1 '24", revenue: 16, growth: 2.2 },
  { quarter: "Q2 '24", revenue: 15, growth: 1.8 },
  { quarter: "Q3 '24", revenue: 16, growth: 2.0 },
  { quarter: "Q4 '24", revenue: 18, growth: 1.6 },
];

export default function RevenueGrowthChart() {
  return (
    <div className="w-full h-fit p-4">
      <h2 className="text-xl font-semibold mb-4">Revenue and Revenue Growth</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <XAxis dataKey="quarter" />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 3.5]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            formatter={(value) =>
              typeof value === "number" ? value.toFixed(1) : value
            }
          />
          <Legend />
          <CartesianGrid strokeDasharray="0" vertical={false} />

          <Bar yAxisId="left" dataKey="revenu" fill="#0F2E2E" barSize={30} />

          <Line
            yAxisId="right"
            type="linear"
            dataKey="revenue"
            stroke="#B6FFB0"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
