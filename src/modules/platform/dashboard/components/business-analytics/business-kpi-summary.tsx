import { businessSummary } from "../../mock/business-analytics.data";

import { DashboardCard } from "../shared";

import BusinessKpiItem from "./business-kpi-item";

export default function BusinessKpiSummary() {
  return (
    <DashboardCard
      title="Business KPI Summary"
      description="Key business performance indicators."
    >
      <div className="space-y-4">
        {businessSummary.map((item) => (
          <BusinessKpiItem key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
