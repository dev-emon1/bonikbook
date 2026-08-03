import { CalendarRange, Search, RefreshCw } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function ActivityFilter() {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 card-shadow">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="grid flex-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
          <Input className="h-11" placeholder="Activity Type" />

          <Input className="h-11" placeholder="Organization" />

          <Input className="h-11" placeholder="Severity" />

          <div className="relative">
            <CalendarRange className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input className="h-11 pl-10" placeholder="Time Range" />
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input className="h-11 pl-10" placeholder="Search..." />
          </div>
        </div>

        <Button variant="outline" className="gap-2">
          <RefreshCw className="size-4" />
          Refresh
        </Button>
      </div>
    </section>
  );
}
