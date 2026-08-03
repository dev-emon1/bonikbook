import { HeartPulse } from "lucide-react";

export default function HealthHeader() {
  return (
    <header className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        <HeartPulse className="size-4" />
        Infrastructure Monitoring
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          System Health
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          Monitor infrastructure health, server resources, background services,
          queues and platform availability in real time.
        </p>
      </div>
    </header>
  );
}
