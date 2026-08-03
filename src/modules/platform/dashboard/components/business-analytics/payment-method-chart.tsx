import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { paymentMethods } from "../../mock/business-analytics.data";
import { chartColors } from "../../utils/chart-config";

import { ChartContainer, DashboardCard } from "../shared";

const COLORS = [
  chartColors.primary,
  chartColors.secondary,
  chartColors.success,
  chartColors.warning,
];

export default function PaymentMethodChart() {
  return (
    <DashboardCard
      title="Payment Method Distribution"
      description="Revenue collection by payment channel."
    >
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={paymentMethods}
              dataKey="value"
              nameKey="method"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={4}
              stroke="none"
            >
              {paymentMethods.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />

            <Legend verticalAlign="bottom" align="center" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardCard>
  );
}
