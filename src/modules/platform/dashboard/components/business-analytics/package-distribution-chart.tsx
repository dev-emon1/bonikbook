import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { packageDistribution } from "../../mock/business-analytics.data";

import { chartColors } from "../../utils/chart-config";

import { ChartContainer, DashboardCard } from "../shared";

const COLORS = [
  chartColors.primary,
  chartColors.secondary,
  chartColors.success,
  chartColors.warning,
];

export default function PackageDistributionChart() {
  return (
    <DashboardCard
      title="Package Distribution"
      description="Active organizations by subscription package."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={packageDistribution}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
            >
              {packageDistribution.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
