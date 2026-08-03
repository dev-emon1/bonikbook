import { Button } from "@/shared/ui/button";

import { topRevenueOrganizations } from "../../mock/business-analytics.data";

import { DashboardCard } from "../shared";

import TopRevenueOrganizationItem from "./top-revenue-organization-item";

export default function TopRevenueOrganizations() {
  return (
    <DashboardCard
      title="Top Revenue Organizations"
      description="Organizations generating the highest revenue."
      action={
        <Button variant="ghost" size="sm">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {topRevenueOrganizations.map((organization, index) => (
          <TopRevenueOrganizationItem
            key={organization.id}
            organization={organization}
            rank={index + 1}
          />
        ))}
      </div>
    </DashboardCard>
  );
}
