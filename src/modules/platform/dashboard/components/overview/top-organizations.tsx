import { Button } from "@/shared/ui/button";

import { topOrganizations } from "../../mock/overview.data";

import { DashboardCard } from "../shared";

import TopOrganizationItem from "./top-organization-item";

export default function TopOrganizations() {
  return (
    <DashboardCard
      title="Top Organizations"
      description="Highest performing organizations this month."
      action={
        <Button variant="ghost" size="sm">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {topOrganizations.map((organization, index) => (
          <TopOrganizationItem
            key={organization.id}
            organization={organization}
            rank={index + 1}
          />
        ))}
      </div>
    </DashboardCard>
  );
}
