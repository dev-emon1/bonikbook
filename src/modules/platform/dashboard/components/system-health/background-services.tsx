import { Button } from "@/shared/ui/button";

import { backgroundServices } from "../../mock/system-health.data";

import { DashboardCard } from "../shared";

import BackgroundServiceItem from "./background-service-item";

export default function BackgroundServices() {
  return (
    <DashboardCard
      title="Background Services"
      description="Current status of workers and scheduled services."
      action={
        <Button size="sm" variant="ghost">
          Manage Services
        </Button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {backgroundServices.map((service) => (
          <BackgroundServiceItem key={service.id} service={service} />
        ))}
      </div>
    </DashboardCard>
  );
}
