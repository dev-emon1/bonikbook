import { LogIn } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const logins = [
  "John Doe logged in from Dhaka",
  "Payroll Admin logged in from Chattogram",
  "HR Manager logged in from Dhaka",
];

export function LoginHistory() {
  return (
    <ReviewCard
      title="Login History"
      description="Recent successful logins."
      icon={LogIn}
    >
      <div className="space-y-3">
        {logins.map((login) => (
          <div key={login} className="rounded-xl border p-4">
            {login}
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
