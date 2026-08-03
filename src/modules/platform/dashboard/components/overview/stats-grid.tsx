import { dashboardStats } from "../../mock/overview.data";

import StatCard from "./stat-card";

export default function StatsGrid() {
  return (
    <section
      aria-label="Dashboard Statistics"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6"
    >
      {dashboardStats.map((item) => (
        <StatCard key={item.id} data={item} />
      ))}
    </section>
  );
}
