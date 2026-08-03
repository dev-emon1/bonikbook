import { HardDrive } from "lucide-react";

import { DashboardCard } from "../shared";

import { healthStats } from "../../mock/system-health.data";

export default function DiskUsageCard() {
  const disk = healthStats.find((item) => item.id === "storage");

  if (!disk) return null;

  return (
    <DashboardCard
      title="Disk Usage"
      description="Current storage utilization."
    >
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Storage Used</span>

            <span className="font-semibold text-foreground">{disk.value}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{
                width: `${disk.value}%`,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Total</p>

            <p className="mt-1 font-semibold">2 TB</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Used</p>

            <p className="mt-1 font-semibold">1.46 TB</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Free</p>

            <p className="mt-1 font-semibold text-success">540 GB</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-primary/5 p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HardDrive className="size-5" />
          </div>

          <div>
            <p className="font-medium">Healthy Storage</p>

            <p className="text-sm text-muted-foreground">
              Capacity is within acceptable range.
            </p>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
