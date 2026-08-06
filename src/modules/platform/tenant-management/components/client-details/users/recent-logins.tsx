import { LogIn } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const logins = [
  "John Doe signed in from Dhaka",
  "HR Manager signed in from Chattogram",
  "Payroll Admin signed in from Dhaka",
];

export function RecentLogins() {
  return (
    <ReviewCard
      title="Recent Logins"
      description="Latest successful logins."
      icon={LogIn}
    >
      <div className="space-y-3">
        {logins.map((item) => (
          <div key={item} className="rounded-xl border p-4">
            {item}
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
