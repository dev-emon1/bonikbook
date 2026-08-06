import { Settings2 } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const events = [
  "Workspace created.",
  "Subscription renewed.",
  "Package upgraded to Enterprise.",
  "Storage limit updated.",
];

export function SystemEvents() {
  return (
    <ReviewCard
      title="System Events"
      description="Platform generated events."
      icon={Settings2}
    >
      <div className="space-y-3">
        {events.map((event) => (
          <div key={event} className="rounded-xl border p-4">
            {event}
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
