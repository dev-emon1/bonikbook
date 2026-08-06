import { Activity } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

export function OverviewActivity() {
  return (
    <ReviewCard
      title="Recent Activity"
      description="Latest workspace activity."
      icon={Activity}
    >
      <div className="space-y-4">
        <div className="rounded-xl border p-4">Administrator logged in.</div>

        <div className="rounded-xl border p-4">Subscription renewed.</div>

        <div className="rounded-xl border p-4">New employee added.</div>
      </div>
    </ReviewCard>
  );
}
