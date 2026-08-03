import { TrendingUp } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { TopRevenueOrganization } from "../../types";

type Props = {
  organization: TopRevenueOrganization;
  rank: number;
};

export default function TopRevenueOrganizationItem({
  organization,
  rank,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border border-border",
        "bg-background p-4 transition-default hover:border-primary/20",
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 font-semibold text-primary">
          #{rank}
        </div>

        <div>
          <h4 className="font-medium text-foreground">
            {organization.organization}
          </h4>

          <p className="mt-1 text-sm text-muted-foreground">
            {organization.package}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold text-foreground">
          ৳ {organization.revenue.toLocaleString()}
        </p>

        <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
          <TrendingUp className="size-3" />
          {organization.growth}%
        </div>
      </div>
    </div>
  );
}
