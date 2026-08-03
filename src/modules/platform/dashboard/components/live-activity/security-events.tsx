import { Button } from "@/shared/ui/button";

import { securityEvents } from "../../mock/live-activity.data";

import { DashboardCard } from "../shared";

import SecurityEventItem from "./security-event-item";

export default function SecurityEvents() {
  return (
    <DashboardCard
      title="Security Events"
      description="Recent authentication and security activities."
      action={
        <Button variant="ghost" size="sm">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {securityEvents.map((event) => (
          <SecurityEventItem key={event.id} event={event} />
        ))}
      </div>
    </DashboardCard>
  );
}
