import { UserCog } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const changes = [
  "HR Manager role assigned to John Doe.",
  "Payroll Manager permissions updated.",
  "Recruitment module access granted.",
];

export function RoleChanges() {
  return (
    <ReviewCard
      title="Role & Permission Changes"
      description="Recent role and permission updates."
      icon={UserCog}
    >
      <div className="space-y-3">
        {changes.map((change) => (
          <div key={change} className="rounded-xl border p-4">
            {change}
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
