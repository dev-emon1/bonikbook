import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DashboardCard, ChartContainer } from "../shared";

import { revenueProfitChartData } from "../../mock/business-analytics.data";

import {
  chartColors,
  chartGridColor,
  chartTextColor,
} from "../../utils/chart-config";

export default function RevenueProfitChart() {
  return (
    <DashboardCard
      title="Revenue vs Expense vs Profit"
      description="Financial performance overview over the selected period."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={revenueProfitChartData}>
            <defs>
              <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
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

            <Legend />

            <Bar
              dataKey="expense"
              fill={chartColors.warning}
              radius={[8, 8, 0, 0]}
              maxBarSize={28}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke={chartColors.primary}
              fill="url(#profitGradient)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke={chartColors.success}
              fill="transparent"
              strokeWidth={3}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
