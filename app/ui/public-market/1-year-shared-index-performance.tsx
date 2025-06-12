import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/app/store/store";
import { fetchSharedIndex } from "@/app/store/slices/sharedIndexSlice";

const lineColors = {
  AAPL: "blue",
  MSFT: "red",
  GOOGL: "green",
  HPQ: "#6B7280",
  DELL: "#00C49F",
};

const TRADING_DAYS = 252; // Approximate number of trading days in a year

export default function IndexedSharePerformanceChart() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.sharedIndex
  );

  useEffect(() => {
    dispatch(fetchSharedIndex());
  }, [dispatch]);

  // Transform API data to recharts format, using date and only last 1 year
  // Define the expected structure of each data point
  type StockDataPoint = { date: string; close: number };

  const chartData = React.useMemo(() => {
    const keys = Object.keys(data);
    if (keys.length === 0) return [];

    // Use the first stock's data as reference
    const reference: StockDataPoint[] =
      Array.isArray(data[keys[0]]) &&
      (data[keys[0]] as unknown[]).every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          "date" in item &&
          "close" in item
      )
        ? (data[keys[0]] as unknown[]).filter(
            (item): item is StockDataPoint =>
              typeof item === "object" &&
              item !== null &&
              "date" in item &&
              "close" in item
          )
        : [];
    // Sort by date descending (most recent first)
    const sortedDesc = [...reference].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    // Take the most recent 252 trading days, then sort ascending for chart
    const lastYear = sortedDesc
      .slice(0, TRADING_DAYS)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Build chart data for each date, doubling the values
    type ChartPoint = { date: string } & { [key: string]: number | null | string };
    return lastYear.map((entry, idx) => {
      const point: ChartPoint = { date: entry.date };
      keys.forEach((k) => {
        // Double the close value
        const dataPoint = data[k][data[k].length - lastYear.length + idx];
        const close =
          dataPoint && typeof dataPoint === "object" && "close" in dataPoint
            ? (dataPoint as { close: number }).close
            : null;
        point[k] = typeof close === "number" ? close * 2 : null;
      });
      return point;
    });
  }, [data]);

  // Calculate ticks for every 4 months
  const xTicks = React.useMemo(() => {
    if (!chartData.length) return [];
    const result: string[] = [];
    let lastMonth: number | null = null;
    chartData.forEach((point) => {
      const d = new Date(point.date);
      const month = d.getMonth();
      const year = d.getFullYear();
      if (
        lastMonth === null ||
        (month % 3 === 0 &&
          (result.length === 0 ||
            year !== new Date(result[result.length - 1]).getFullYear() ||
            month !== new Date(result[result.length - 1]).getMonth()))
      ) {
        result.push(point.date);
        lastMonth = month;
      }
    });
    // Always include the last date
    if (result[result.length - 1] !== chartData[chartData.length - 1].date) {
      result.push(chartData[chartData.length - 1].date);
    }
    return result;
  }, [chartData]);

  return (
    <div className="p-4 bg-white ">
      <h2 className="font-semibold text-gray-800 mb-3 text-lg">
        1 Year - Index Share Performance
      </h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis
              dataKey="date"
              minTickGap={30}
              ticks={xTicks}
              stroke="#9CA3AF" // lighter gray for axis and tick text
              tickFormatter={(date) => {
                const d = new Date(date);
                if (isNaN(d.getTime())) return date;
                const month = d.toLocaleString("en-US", { month: "short" });
                const year = d.getFullYear().toString().slice(-2);
                return `${month} ${year}`;
              }}
            />
            <YAxis
              stroke="#9CA3AF" // lighter gray for axis and tick text
              label={{
                value: "Price (USD)",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                style: { textAnchor: "middle", fontSize: 14, fill: "#9CA3AF" }, // lighter gray for label
              }}
            />
            <Tooltip
              contentStyle={{
                color: "#9CA3AF",
                fontWeight: "normal",
                lineHeight: "1",
              }} // lighter and bold text in tooltip
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value) =>
                typeof value === "number" ? value.toFixed(2) : value
              }
            />
            {Object.keys(data).map((company) => (
              <Line
                key={company}
                type="linear"
                dataKey={company}
                stroke={
                  lineColors[company as keyof typeof lineColors] || "#8884d8"
                }
                dot={false}
                strokeWidth={1}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
      {/* Legend below the chart */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {Object.keys(data).map((company) => (
          <div key={company} className="flex items-center space-x-2">
            <span
              className="inline-block w-4 h-4 "
              style={{
                backgroundColor:
                  lineColors[company as keyof typeof lineColors] || "#8884d8",
              }}
            ></span>
            <span className="text-xs text-gray-500 font-medium">{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
