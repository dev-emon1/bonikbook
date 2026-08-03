import { Activity, AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { RecentActivity } from "../../types";

type Props = {
  activity: RecentActivity;
};

const statusConfig = {
  success: {
    icon: CheckCircle2,
    className: "bg-success/10 text-success",
  },

  warning: {
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning",
  },

  danger: {
    icon: AlertTriangle,
    className: "bg-destructive/10 text-destructive",
  },

  info: {
    icon: Info,
    className: "bg-info/10 text-info",
  },
} as const;

export default function ActivityItem({ activity }: Props) {
  const config = statusConfig[activity.status];

  const Icon = config.icon;

  return (
    <div className="flex items-start gap-4">
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
          config.className,
        )}
      >
        <Icon className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-medium text-foreground">{activity.title}</h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {activity.description}
            </p>
          </div>

          <span className="whitespace-nowrap text-xs text-muted-foreground">
            {activity.createdAt}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="size-3.5" />

          <span>{activity.actor}</span>
        </div>
      </div>
    </div>
  );
}
