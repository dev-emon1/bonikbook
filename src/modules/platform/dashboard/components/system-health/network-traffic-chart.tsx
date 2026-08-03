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

export default function NetworkTrafficChart() {
  return (
    <DashboardCard
      title="Network Traffic"
      description="Incoming and outgoing network usage."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={resourceUsage}>
            <defs>
              <linearGradient id="networkGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartColors.success}
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor={chartColors.success}
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
              dataKey="network"
              stroke={chartColors.success}
              fill="url(#networkGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
