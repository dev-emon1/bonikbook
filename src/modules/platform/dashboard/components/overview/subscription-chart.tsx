import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { subscriptionGrowthData } from "../../mock/overview.data";

import {
  chartColors,
  chartGridColor,
  chartTextColor,
} from "../../utils/chart-config";

import { ChartContainer } from "../shared";

export default function SubscriptionChart() {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={subscriptionGrowthData}>
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
            dataKey="enterprise"
            stroke={chartColors.secondary}
            fill={chartColors.secondary}
            fillOpacity={0.15}
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="gold"
            stroke={chartColors.warning}
            fill={chartColors.warning}
            fillOpacity={0.12}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
