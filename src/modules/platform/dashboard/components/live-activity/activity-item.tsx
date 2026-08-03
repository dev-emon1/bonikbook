import {
  BadgeDollarSign,
  Boxes,
  Building2,
  CreditCard,
  Shield,
  ShoppingCart,
  Server,
} from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { LiveActivityItem } from "../../types";

type Props = {
  activity: LiveActivityItem;
};

const typeConfig = {
  authentication: {
    icon: Shield,
    color: "bg-warning/10 text-warning",
  },

  organization: {
    icon: Building2,
    color: "bg-primary/10 text-primary",
  },

  subscription: {
    icon: BadgeDollarSign,
    color: "bg-success/10 text-success",
  },

  billing: {
    icon: CreditCard,
    color: "bg-info/10 text-info",
  },

  inventory: {
    icon: Boxes,
    color: "bg-secondary/10 text-secondary",
  },

  sales: {
    icon: ShoppingCart,
    color: "bg-success/10 text-success",
  },

  system: {
    icon: Server,
    color: "bg-muted text-muted-foreground",
  },
} as const;

const severityClasses = {
  info: "bg-info/10 text-info",

  success: "bg-success/10 text-success",

  warning: "bg-warning/10 text-warning",

  danger: "bg-destructive/10 text-destructive",
} as const;

export default function ActivityItem({ activity }: Props) {
  const config = typeConfig[activity.type];

  const Icon = config.icon;

  return (
    <article
      className={cn(
        "flex items-start gap-4 rounded-2xl border border-border bg-background p-4",
        "transition-default hover:border-primary/20",
      )}
    >
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          config.color,
        )}
      >
        <Icon className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-foreground">{activity.title}</h3>

          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-medium capitalize",
              severityClasses[activity.severity],
            )}
          >
            {activity.severity}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {activity.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>{activity.actor}</span>

          <span>•</span>

          <span>{activity.organization}</span>

          <span>•</span>

          {/* later date-fns */}
          <span>{activity.createdAt}</span>
        </div>
      </div>
    </article>
  );
}
