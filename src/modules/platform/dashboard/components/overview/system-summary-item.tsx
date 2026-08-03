import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { SystemSummaryItem } from "../../types";

type Props = {
  item: SystemSummaryItem;
};

const statusConfig = {
  healthy: {
    icon: CheckCircle2,
    className: "bg-success/10 text-success",
  },

  warning: {
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning",
  },

  critical: {
    icon: XCircle,
    className: "bg-destructive/10 text-destructive",
  },
} as const;

export default function SystemSummaryItem({ item }: Props) {
  const config = statusConfig[item.status];

  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border border-border",
        "bg-background p-4 transition-default hover:border-primary/20",
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl",
            config.className,
          )}
        >
          <Icon className="size-5" />
        </div>

        <div>
          <h4 className="font-medium text-foreground">{item.title}</h4>

          <p className="text-sm text-muted-foreground">{item.value}</p>
        </div>
      </div>

      <span
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-semibold capitalize",
          config.className,
        )}
      >
        {item.status}
      </span>
    </div>
  );
}
