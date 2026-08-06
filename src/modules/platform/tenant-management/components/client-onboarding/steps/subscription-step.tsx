import { BillingConfiguration } from "../sections/subscription/billing-configuration";
import { SubscriptionDetails } from "../sections/subscription/subscription-details";
import { SubscriptionSummary } from "../sections/subscription/subscription-summary";
import { TrialConfiguration } from "../sections/subscription/trial-configuration";

export function SubscriptionStep() {
  return (
    <div className="space-y-6">
      <SubscriptionDetails />

      <TrialConfiguration />

      <BillingConfiguration />

      <SubscriptionSummary
        packageName="Professional"
        billingCycle="yearly"
        startDate="01 Aug 2026"
        renewalDate="01 Aug 2027"
        isTrial
        trialDays={30}
        total={29990}
      />
    </div>
  );
}
