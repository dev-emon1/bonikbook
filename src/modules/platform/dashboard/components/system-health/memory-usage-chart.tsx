import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { resourceUsage } from "../../mock/system-health.data";

import {
  chartColors,
  chartGridColor,
  chartTextColor,
} from "../../utils/chart-config";

import { ChartContainer, DashboardCard } from "../shared";

export default function MemoryUsageChart() {
  return (
    <DashboardCard title="Memory Usage" description="RAM consumption trend.">
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={resourceUsage}>
            <CartesianGrid
              vertical={false}
              stroke={chartGridColor}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
              tick={{
                fill: chartTextColor,
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 100]}
              tick={{
                fill: chartTextColor,
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="memory"
              stroke={chartColors.primary}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
