import { CalendarDays, RefreshCw } from "lucide-react";

import { Button } from "@/shared/ui/button";

type OverviewHeaderProps = {
  userName?: string;
  onRefresh?: () => void;
};

export default function OverviewHeader({
  userName = "Super Admin",
  onRefresh,
}: OverviewHeaderProps) {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Platform Dashboard
        </span>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Welcome back, {userName} 👋
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Here's an overview of your platform performance, subscriptions,
          organizations and business activities.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 card-shadow">
          <CalendarDays className="size-4 text-primary" />

          <span className="text-sm text-muted-foreground">{currentDate}</span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="gap-2"
          onClick={onRefresh}
        >
          <RefreshCw className="size-4" />
          Refresh
        </Button>
      </div>
    </header>
  );
}
