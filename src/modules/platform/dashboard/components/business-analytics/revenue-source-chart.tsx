import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { revenueSources } from "../../mock/business-analytics.data";
import {
  chartColors,
  chartGridColor,
  chartTextColor,
} from "../../utils/chart-config";

import { ChartContainer, DashboardCard } from "../shared";

const COLORS = [
  chartColors.primary,
  chartColors.secondary,
  chartColors.success,
  chartColors.warning,
];

export default function RevenueSourceChart() {
  return (
    <DashboardCard
      title="Revenue Sources"
      description="Revenue contribution by subscription package."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={revenueSources}
            margin={{
              left: 20,
              right: 20,
            }}
          >
            <CartesianGrid
              horizontal={false}
              stroke={chartGridColor}
              strokeDasharray="3 3"
            />

            <XAxis
              type="number"
              tick={{
                fill: chartTextColor,
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              type="category"
              dataKey="source"
              tick={{
                fill: chartTextColor,
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
              width={110}
            />

            <Tooltip />

            <Bar dataKey="amount" radius={[0, 10, 10, 0]}>
              {revenueSources.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
