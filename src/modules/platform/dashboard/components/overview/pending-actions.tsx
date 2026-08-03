import { Button } from "@/shared/ui/button";

import { pendingActions } from "../../mock/overview.data";

import { DashboardCard } from "../shared";

import PendingActionItem from "./pending-action-item";

export default function PendingActions() {
  return (
    <DashboardCard
      title="Pending Actions"
      description="Items that require your attention."
      action={
        <Button size="sm" variant="ghost">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {pendingActions.map((item) => (
          <PendingActionItem key={item.id} action={item} />
        ))}
      </div>
    </DashboardCard>
  );
}
