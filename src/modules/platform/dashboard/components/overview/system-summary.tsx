import { Button } from "@/shared/ui/button";

import { systemSummary } from "../../mock/overview.data";

import { DashboardCard } from "../shared";

import SystemSummaryItem from "./system-summary-item";

export default function SystemSummary() {
  return (
    <DashboardCard
      title="System Summary"
      description="Current platform infrastructure status."
      action={
        <Button variant="ghost" size="sm">
          View Details
        </Button>
      }
    >
      <div className="space-y-4">
        {systemSummary.map((item) => (
          <SystemSummaryItem key={item.id} item={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
