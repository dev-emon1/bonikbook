import { Activity } from "lucide-react";

export default function ActivityHeader() {
  return (
    <header className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        <Activity className="size-4" />
        Real-Time Monitoring
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Live Activity
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          Monitor platform activities, user sessions, security events and
          background jobs in real time.
        </p>
      </div>
    </header>
  );
}
