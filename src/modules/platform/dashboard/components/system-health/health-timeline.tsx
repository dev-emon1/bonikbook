import { Button } from "@/shared/ui/button";

import { healthTimeline } from "../../mock/system-health.data";

import { DashboardCard } from "../shared";

import HealthTimelineItem from "./health-timeline-item";

export default function HealthTimeline() {
  return (
    <DashboardCard
      title="Health Timeline"
      description="Recent infrastructure events and system changes."
      action={
        <Button variant="ghost" size="sm">
          View History
        </Button>
      }
    >
      <div className="space-y-6">
        {healthTimeline.map((item, index) => (
          <HealthTimelineItem
            key={item.id}
            item={item}
            isLast={index === healthTimeline.length - 1}
          />
        ))}
      </div>
    </DashboardCard>
  );
}
