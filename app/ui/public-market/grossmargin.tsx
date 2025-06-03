import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const marginData = [
  { quarter: "Q1 '23", dollars: 6, percent: 35 },
  { quarter: "Q2 '23", dollars: 3, percent: 20 },
  { quarter: "Q3 '23", dollars: 8, percent: 40 },
  { quarter: "Q4 '23", dollars: 5, percent: 25 },
  { quarter: "Q1 '24", dollars: 7, percent: 35 },
  { quarter: "Q2 '24", dollars: 10, percent: 50 },
  { quarter: "Q3 '24", dollars: 13, percent: 65 },
  { quarter: "Q4 '24", dollars: 6.5, percent: 30 },
];

export default function GrossChart() {
  return (
    <div className="w-full  p-4">
      <h2 className="text-xl font-semibold mb-4">Gross Margins</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={marginData}>
          <XAxis dataKey="quarter" />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 70]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            formatter={(value) =>
              typeof value === "number" ? value.toFixed(1) : value
            }
          />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Line
            yAxisId="left"
            type="linear"
            dataKey="dollars"
            stroke="#B6FFB0"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
