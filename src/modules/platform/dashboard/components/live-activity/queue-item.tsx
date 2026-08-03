import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { QueueItem } from "../../types";

type Props = {
  queue: QueueItem;
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
    icon: AlertTriangle,
    className: "bg-destructive/10 text-destructive",
  },
} as const;

export default function QueueItem({ queue }: Props) {
  const config = statusConfig[queue.status];

  const Icon = config.icon;

  const total = queue.pending + queue.processing + queue.failed;

  const percentage = total === 0 ? 0 : (queue.processing / total) * 100;

  return (
    <div className="rounded-2xl border border-border bg-background p-5 transition-default hover:border-primary/20">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-foreground">{queue.name}</h4>

        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
            config.className,
          )}
        >
          <Icon className="size-3.5" />

          {queue.status}
        </span>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-muted-foreground">Pending</p>

          <p className="mt-1 font-semibold text-foreground">{queue.pending}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Processing</p>

          <p className="mt-1 font-semibold text-info">{queue.processing}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">Failed</p>

          <p className="mt-1 font-semibold text-destructive">{queue.failed}</p>
        </div>
      </div>
    </div>
  );
}
