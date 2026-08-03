import { Button } from "@/shared/ui/button";

import { liveActivities } from "../../mock/live-activity.data";

import { DashboardCard } from "../shared";

import ActivityItem from "./activity-item";

export default function ActivityFeed() {
  return (
    <DashboardCard
      title="Live Activity Feed"
      description="Latest platform activities."
      action={
        <Button size="sm" variant="ghost">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {liveActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </DashboardCard>
  );
}
