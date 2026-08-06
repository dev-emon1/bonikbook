import { BillingInformation } from "./billing-information";
import { RenewalInformation } from "./renewal-information";
import { SubscriptionDetails } from "./subscription-details";
import { TrialInformation } from "./trial-information";

export function SubscriptionTab() {
  return (
    <div className="space-y-6">
      <SubscriptionDetails />

      <BillingInformation />

      <RenewalInformation />

      <TrialInformation />
    </div>
  );
}
