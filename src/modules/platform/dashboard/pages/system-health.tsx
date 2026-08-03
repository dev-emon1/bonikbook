import {
  BackgroundServices,
  CpuUsageChart,
  DiskUsageCard,
  HealthFilter,
  HealthHeader,
  HealthStatsGrid,
  HealthTimeline,
  MemoryUsageChart,
  NetworkTrafficChart,
  ServicesStatus,
} from "../components/system-health";

export default function SystemHealthPage() {
  return (
    <div className="space-y-8">
      <HealthHeader />

      <HealthFilter />

      <HealthStatsGrid />

      <div className="grid gap-6 xl:grid-cols-2">
        <CpuUsageChart />

        <MemoryUsageChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DiskUsageCard />

        <NetworkTrafficChart />
      </div>

      <ServicesStatus />

      <BackgroundServices />

      <HealthTimeline />
    </div>
  );
}
