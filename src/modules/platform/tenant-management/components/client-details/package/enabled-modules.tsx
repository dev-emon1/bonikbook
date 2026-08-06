import { Grid2x2 } from "lucide-react";

import { Badge } from "@/shared/ui/badge";

import { ReviewCard } from "@/shared/components/platform/review";

const modules = [
  "Core HR",
  "Attendance",
  "Leave",
  "Payroll",
  "Recruitment",
  "Performance",
  "Assets",
  "Documents",
  "Reports",
  "Announcements",
];

export function EnabledModules() {
  return (
    <ReviewCard
      title="Enabled Modules"
      description="Modules available for this client."
      icon={Grid2x2}
    >
      <div className="flex flex-wrap gap-3">
        {modules.map((module) => (
          <Badge key={module} variant="secondary">
            {module}
          </Badge>
        ))}
      </div>
    </ReviewCard>
  );
}
