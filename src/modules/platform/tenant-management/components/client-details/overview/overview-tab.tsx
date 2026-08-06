import { OverviewActivity } from "./overview-activity";
import { OverviewInformation } from "./overview-information";
import { OverviewPackage } from "./overview-package";
import { OverviewSubscription } from "./overview-subscription";

export function OverviewTab() {
  return (
    <div className="space-y-6">
      <OverviewInformation />

      <OverviewPackage />

      <OverviewSubscription />

      <OverviewActivity />
    </div>
  );
}
