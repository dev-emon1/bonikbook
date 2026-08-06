import { Package } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const events = [
  "Enterprise package assigned",
  "Storage limit updated",
  "Employee limit increased",
];

export function PackageEvents() {
  return (
    <ReviewCard
      title="Package Events"
      description="Package related activities."
      icon={Package}
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
