import { AdministratorSummary } from "../sections/review/administrator-summary";
import { Confirmation } from "../sections/review/confirmation";
import { OrganizationSummary } from "../sections/review/organization-summary";
import { PackageSummary } from "../sections/review/package-summary";
import { SubscriptionSummary } from "../sections/review/subscription-summary";

export function ReviewStep() {
  return (
    <>
      <div className="space-y-6">
        <OrganizationSummary />

        <AdministratorSummary />

        <PackageSummary />

        <SubscriptionSummary />

        <Confirmation />
      </div>
    </>
  );
}
