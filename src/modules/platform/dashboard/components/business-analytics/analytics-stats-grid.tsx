import { analyticsStats } from "../../mock/business-analytics.data";

import { StatCard } from "../overview";

export default function AnalyticsStatsGrid() {
  return (
    <section
      aria-label="Business Analytics Statistics"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {analyticsStats.map((item) => (
        <StatCard key={item.id} data={item} />
      ))}
    </section>
  );
}
