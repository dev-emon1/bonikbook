import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { HealthTimelineItem } from "../../types";

type Props = {
  item: HealthTimelineItem;

  isLast: boolean;
};

const severityConfig = {
  info: {
    icon: Info,
    className: "bg-info/10 text-info",
  },

  success: {
    icon: CheckCircle2,
    className: "bg-success/10 text-success",
  },

  warning: {
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning",
  },

  danger: {
    icon: XCircle,
    className: "bg-destructive/10 text-destructive",
  },
} as const;

export default function HealthTimelineItem({ item, isLast }: Props) {
  const config = severityConfig[item.severity];

  const Icon = config.icon;

  return (
    <div className="relative flex gap-4">
      <div className="relative flex flex-col items-center">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            config.className,
          )}
        >
          <Icon className="size-5" />
        </div>

        {!isLast && <div className="mt-2 h-full w-px bg-border" />}
      </div>

      <div className="flex-1 rounded-2xl border border-border bg-background p-4 transition-default hover:border-primary/20">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-foreground">{item.title}</h3>

          <span className="text-xs text-muted-foreground">
            {item.createdAt}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
}
