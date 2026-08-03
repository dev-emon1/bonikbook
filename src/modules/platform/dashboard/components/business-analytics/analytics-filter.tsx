import { CalendarRange, Download, RefreshCcw } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function AnalyticsFilter() {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 card-shadow">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="grid flex-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <Input placeholder="Date Range" className="h-11" />

          <Input placeholder="Organization" className="h-11" />

          <Input placeholder="Package" className="h-11" />

          <div className="relative">
            <CalendarRange className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input placeholder="Custom Date" className="h-11 pl-10" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <RefreshCcw className="size-4" />
            Refresh
          </Button>

          <Button className="gap-2">
            <Download className="size-4" />
            Export
          </Button>
        </div>
      </div>
    </section>
  );
}
