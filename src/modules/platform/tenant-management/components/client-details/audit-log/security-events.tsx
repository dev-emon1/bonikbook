import { Shield } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const events = [
  {
    title: "Administrator Login",
    description: "John Doe logged in from Dhaka.",
    time: "01 Aug 2026 • 09:20 AM",
  },
  {
    title: "Password Changed",
    description: "Primary administrator updated password.",
    time: "03 Aug 2026 • 04:15 PM",
  },
  {
    title: "Two-Factor Authentication Enabled",
    description: "2FA has been enabled successfully.",
    time: "05 Aug 2026 • 10:05 AM",
  },
];

export function SecurityEvents() {
  return (
    <ReviewCard
      title="Security Events"
      description="Authentication and security activities."
      icon={Shield}
    >
      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.title} className="rounded-xl border p-4">
            <h4 className="font-medium">{event.title}</h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {event.description}
            </p>

            <p className="mt-2 text-xs text-muted-foreground">{event.time}</p>
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
