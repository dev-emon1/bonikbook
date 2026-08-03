import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { revenueChartData } from "../../mock/overview.data";

import {
  chartColors,
  chartGridColor,
  chartTextColor,
} from "../../utils/chart-config";

import { ChartContainer } from "../shared";

export default function RevenueChart() {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueChartData}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={chartColors.primary}
                stopOpacity={0.35}
              />

              <stop
                offset="95%"
                stopColor={chartColors.primary}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke={chartGridColor}
            vertical={false}
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            tick={{
              fill: chartTextColor,
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{
              fill: chartTextColor,
              fontSize: 12,
            }}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke={chartColors.primary}
            strokeWidth={3}
            fill="url(#revenueGradient)"
            activeDot={{
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
