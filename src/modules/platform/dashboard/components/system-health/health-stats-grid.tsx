import { healthStats } from "../../mock/system-health.data";

import { StatCard } from "../overview";

export default function HealthStatsGrid() {
  return (
    <section
      aria-label="System Health Statistics"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {healthStats.map((item) => (
        <StatCard key={item.id} data={item} />
      ))}
    </section>
  );
}
