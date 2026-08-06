import { StatsGrid } from "@/shared/components/platform/stats";

import { clientStats } from "../../mock";

export function ClientStats() {
  return <StatsGrid items={clientStats} />;
}
