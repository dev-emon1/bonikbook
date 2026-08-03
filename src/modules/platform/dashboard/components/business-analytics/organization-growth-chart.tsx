import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { organizationGrowth } from "../../mock/business-analytics.data";

import {
  chartColors,
  chartGridColor,
  chartTextColor,
} from "../../utils/chart-config";

import { ChartContainer, DashboardCard } from "../shared";

export default function OrganizationGrowthChart() {
  return (
    <DashboardCard
      title="Organization Growth"
      description="Monthly organization acquisition."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={organizationGrowth}>
            <defs>
              <linearGradient
                id="organizationGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={chartColors.secondary}
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor={chartColors.secondary}
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
              dataKey="organizations"
              stroke={chartColors.secondary}
              fill="url(#organizationGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
