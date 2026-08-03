import { Button } from "@/shared/ui/button";

import { servicesStatus } from "../../mock/system-health.data";

import { DashboardCard } from "../shared";

import ServiceStatusItem from "./service-status-item";

export default function ServicesStatus() {
  return (
    <DashboardCard
      title="Services Status"
      description="Real-time platform infrastructure status."
      action={
        <Button size="sm" variant="ghost">
          View Logs
        </Button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {servicesStatus.map((service) => (
          <ServiceStatusItem key={service.id} service={service} />
        ))}
      </div>
    </DashboardCard>
  );
}
