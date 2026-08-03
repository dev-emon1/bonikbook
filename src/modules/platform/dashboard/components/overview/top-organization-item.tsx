import { Building2, Users } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { TopOrganization } from "../../types";

type Props = {
  organization: TopOrganization;
  rank: number;
};

const statusClasses = {
  active: "bg-success/10 text-success",

  trial: "bg-warning/10 text-warning",

  expired: "bg-destructive/10 text-destructive",
} as const;

export default function TopOrganizationItem({ organization, rank }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border border-border",
        "bg-background p-4 transition-default hover:border-primary/20",
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold">
          #{rank}
        </div>

        <div>
          <h4 className="font-medium text-foreground">
            {organization.organization}
          </h4>

          <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="size-3.5" />

              {organization.package}
            </span>

            <span className="flex items-center gap-1">
              <Users className="size-3.5" />

              {organization.employees}
            </span>
          </div>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold text-foreground">
          ৳ {organization.revenue.toLocaleString()}
        </p>

        <span
          className={cn(
            "mt-2 inline-flex rounded-full px-2 py-1 text-xs font-medium",
            statusClasses[organization.status],
          )}
        >
          {organization.status}
        </span>
      </div>
    </div>
  );
}
