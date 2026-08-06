import { BadgeCheck, Building2, HardDrive, Users } from "lucide-react";

import { FormSectionCard } from "@/shared/components/platform/forms";

import { Badge } from "@/shared/ui/badge";
import { Separator } from "@/shared/ui/separator";

import type { PackagePlan } from "../../../../types/package.types";

type Props = {
  package: PackagePlan;

  billingCycle: "monthly" | "yearly";
};

export function PackageSummary({ package: pkg, billingCycle }: Props) {
  const price = billingCycle === "monthly" ? pkg.monthlyPrice : pkg.yearlyPrice;

  return (
    <FormSectionCard
      title="Selected Package Summary"
      description="Review the selected package before continuing."
      icon={BadgeCheck}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">{pkg.name}</h3>

            <p className="text-muted-foreground">{pkg.description}</p>
          </div>

          <Badge variant="secondary" className="rounded-full px-4 py-2">
            {billingCycle === "monthly" ? "Monthly" : "Yearly"}
          </Badge>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-4">
          <SummaryItem
            icon={<Users className="size-5" />}
            label="Employees"
            value={pkg.limits.employees}
          />

          <SummaryItem
            icon={<Building2 className="size-5" />}
            label="Branches"
            value={pkg.limits.branches}
          />

          <SummaryItem
            icon={<HardDrive className="size-5" />}
            label="Storage"
            value={pkg.limits.storage}
          />

          <SummaryItem
            icon={<BadgeCheck className="size-5" />}
            label="Admins"
            value={pkg.limits.admins}
          />
        </div>

        <Separator />

        <div>
          <h4 className="mb-4 font-semibold">Included Features</h4>

          <div className="grid gap-3 md:grid-cols-2">
            {pkg.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-primary" />

                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total Subscription</span>

          <span className="text-3xl font-bold text-primary">
            {price === 0 ? "Custom Pricing" : `৳${price.toLocaleString()}`}
          </span>
        </div>
      </div>
    </FormSectionCard>
  );
}

type SummaryItemProps = {
  icon: React.ReactNode;

  label: string;

  value: string | number;
};

function SummaryItem({ icon, label, value }: SummaryItemProps) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}

        <span className="text-sm font-medium">{label}</span>
      </div>

      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
