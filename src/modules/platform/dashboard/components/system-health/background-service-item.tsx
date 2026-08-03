import {
  AlertTriangle,
  PauseCircle,
  PlayCircle,
  StopCircle,
} from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { BackgroundService } from "../../types";

type Props = {
  service: BackgroundService;
};

const statusConfig = {
  running: {
    icon: PlayCircle,
    className: "bg-success/10 text-success",
    label: "Running",
  },

  idle: {
    icon: PauseCircle,
    className: "bg-info/10 text-info",
    label: "Idle",
  },

  stopped: {
    icon: StopCircle,
    className: "bg-muted text-muted-foreground",
    label: "Stopped",
  },

  failed: {
    icon: AlertTriangle,
    className: "bg-destructive/10 text-destructive",
    label: "Failed",
  },
} as const;

export default function BackgroundServiceItem({ service }: Props) {
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

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-muted-foreground">Running</p>

          <p className="mt-1 text-lg font-semibold text-foreground">
            {service.running}
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Queued</p>

          <p className="mt-1 text-lg font-semibold text-info">
            {service.queued}
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Failed</p>

          <p className="mt-1 text-lg font-semibold text-destructive">
            {service.failed}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
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
