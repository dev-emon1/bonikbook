import {
  Area,
  AreaChart,
  CartesianGrid,
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

export default function CpuUsageChart() {
  return (
    <DashboardCard
      title="CPU Usage"
      description="Server CPU utilization over time."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={resourceUsage}>
            <defs>
              <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
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

            <Area
              type="monotone"
              dataKey="cpu"
              stroke={chartColors.primary}
              fill="url(#cpuGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
