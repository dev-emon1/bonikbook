import { Clock3 } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const timeline = [
  {
    title: "Workspace Created",
    description: "Tenant workspace has been created.",
    time: "01 Aug 2026 • 09:15 AM",
  },
  {
    title: "Administrator Added",
    description: "John Doe has been assigned as Primary Administrator.",
    time: "01 Aug 2026 • 09:20 AM",
  },
  {
    title: "Package Assigned",
    description: "Enterprise package assigned successfully.",
    time: "01 Aug 2026 • 09:25 AM",
  },
  {
    title: "Subscription Activated",
    description: "Yearly subscription activated.",
    time: "01 Aug 2026 • 09:30 AM",
  },
];

export function ActivityTimeline() {
  return (
    <ReviewCard
      title="Activity Timeline"
      description="Recent client activities."
      icon={Clock3}
    >
      <div className="space-y-5">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-2 h-3 w-3 rounded-full bg-primary" />

            <div className="flex-1 border-b pb-5 last:border-none">
              <h4 className="font-medium">{item.title}</h4>

              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>

              <p className="mt-2 text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
