import { Boxes } from "lucide-react";

import { FormSectionCard } from "@/shared/components/platform/forms";

import { PackageCard } from "../../sections/package/package-card";
import type { PackagePlan } from "@/modules/platform/tenant-management/types/package.types";
import { PACKAGE_PLANS } from "@/modules/platform/tenant-management/mock/package-plans";

type Props = {
  billingCycle: "monthly" | "yearly";

  selectedPackage: string;

  onSelect: (id: string) => void;
};

export function PackageSelection({
  billingCycle,
  selectedPackage,
  onSelect,
}: Props) {
  return (
    <FormSectionCard
      title="Select Package"
      description="Choose the package that best fits this client."
      icon={Boxes}
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {PACKAGE_PLANS.map((pkg: PackagePlan) => (
          <PackageCard
            key={pkg.id}
            package={pkg}
            billingCycle={billingCycle}
            selected={selectedPackage === pkg.id}
            onSelect={() => onSelect(pkg.id)}
          />
        ))}
      </div>
    </FormSectionCard>
  );
}
