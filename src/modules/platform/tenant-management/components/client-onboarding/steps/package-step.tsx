import { useMemo, useState } from "react";

import { PACKAGE_PLANS } from "../../../mock/package-plans";

import { BillingCycle } from "../sections/package/billing-cycle";
import { PackageSelection } from "../sections/package/package-selection";
import { PackageSummary } from "../sections/package/package-summary";
import { PackageComparison } from "../sections/package/package-comparison";

export function PackageStep() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const [selectedPackage, setSelectedPackage] = useState("professional");

  const selectedPlan = useMemo(
    () => PACKAGE_PLANS.find((pkg) => pkg.id === selectedPackage)!,
    [selectedPackage],
  );

  return (
    <div className="space-y-6">
      <BillingCycle value={billingCycle} onChange={setBillingCycle} />

      <PackageSelection
        billingCycle={billingCycle}
        selectedPackage={selectedPackage}
        onSelect={setSelectedPackage}
      />

      <PackageSummary package={selectedPlan} billingCycle={billingCycle} />

      <PackageComparison />
    </div>
  );
}
