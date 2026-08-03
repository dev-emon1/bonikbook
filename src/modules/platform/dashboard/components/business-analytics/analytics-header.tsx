import { BarChart3 } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <header className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        <BarChart3 className="size-4" />
        Business Intelligence
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Business Analytics
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          Analyze revenue, expenses, subscriptions, customer growth and overall
          business performance across your platform.
        </p>
      </div>
    </header>
  );
}
