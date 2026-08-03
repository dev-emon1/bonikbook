import { Button } from "@/shared/ui/button";

import { recentActivities } from "../../mock/overview.data";

import { DashboardCard } from "../shared";

import ActivityItem from "./activity-item";

export default function RecentActivity() {
  return (
    <DashboardCard
      title="Recent Activities"
      description="Latest platform activities."
      action={
        <Button variant="ghost" size="sm">
          View All
        </Button>
      }
    >
      <div className="space-y-6">
        {recentActivities.map((activity, index) => (
          <div key={activity.id}>
            <ActivityItem activity={activity} />

            {index !== recentActivities.length - 1 && (
              <div className="mt-6 border-b border-border" />
            )}
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
