import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { SecurityEvent } from "../../types";

type Props = {
  event: SecurityEvent;
};

const severityConfig = {
  low: {
    icon: CheckCircle2,
    className: "bg-success/10 text-success",
  },

  medium: {
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning",
  },

  high: {
    icon: ShieldAlert,
    className: "bg-destructive/10 text-destructive",
  },

  critical: {
    icon: ShieldCheck,
    className: "bg-primary/10 text-primary",
  },
} as const;

export default function SecurityEventItem({ event }: Props) {
  const config = severityConfig[event.severity];

  const Icon = config.icon;

  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-background p-4",
        "transition-default hover:border-primary/20",
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
            config.className,
          )}
        >
          <Icon className="size-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h4 className="font-semibold text-foreground">{event.title}</h4>

            <span
              className={cn(
                "rounded-full px-2 py-1 text-[11px] font-semibold capitalize",
                config.className,
              )}
            >
              {event.severity}
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {event.description}
          </p>

          <p className="mt-3 text-xs text-muted-foreground">
            {event.createdAt}
          </p>
        </div>
      </div>
    </article>
  );
}
