import {
  AlertTriangle,
  CheckCircle2,
  ServerCrash,
  XCircle,
} from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { ServiceStatus } from "../../types";

type Props = {
  service: ServiceStatus;
};

const statusConfig = {
  healthy: {
    icon: CheckCircle2,
    className: "bg-success/10 text-success",
    label: "Healthy",
  },

  warning: {
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning",
    label: "Warning",
  },

  critical: {
    icon: ServerCrash,
    className: "bg-destructive/10 text-destructive",
    label: "Critical",
  },

  offline: {
    icon: XCircle,
    className: "bg-muted text-muted-foreground",
    label: "Offline",
  },
} as const;

export default function ServiceStatusItem({ service }: Props) {
  const config = statusConfig[service.status];

  const Icon = config.icon;

  return (
    <article className="rounded-2xl border border-border bg-background p-5 transition-default hover:border-primary/20">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{service.name}</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl",
            config.className,
          )}
        >
          <Icon className="size-5" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-muted-foreground">Uptime</p>

          <p className="mt-1 text-lg font-semibold text-foreground">
            {service.uptime.toFixed(2)}%
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Response</p>

          <p className="mt-1 text-lg font-semibold text-foreground">
            {service.responseTime} ms
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-muted-foreground">Current Status</span>

        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold",
            config.className,
          )}
        >
          {config.label}
        </span>
      </div>
    </article>
  );
}
