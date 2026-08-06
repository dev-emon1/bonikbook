import {
  Check,
  Crown,
  HardDrive,
  ShieldCheck,
  Users,
  Building2,
} from "lucide-react";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

import type { PackagePlan } from "../../../../types/package.types";

type Props = {
  package: PackagePlan;

  billingCycle: "monthly" | "yearly";

  selected?: boolean;

  onSelect?: () => void;
};

export function PackageCard({
  package: pkg,
  billingCycle,
  selected = false,
  onSelect,
}: Props) {
  const price = billingCycle === "monthly" ? pkg.monthlyPrice : pkg.yearlyPrice;

  const duration = billingCycle === "monthly" ? "month" : "year";

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-card p-6 transition-all duration-300",
        selected
          ? "border-primary shadow-xl shadow-primary/10"
          : "border-border hover:border-primary/40 hover:shadow-lg",
      )}
    >
      {pkg.recommended && (
        <Badge className="absolute right-5 top-5 gap-1 rounded-full px-3">
          <Crown className="size-3.5" />
          Recommended
        </Badge>
      )}

      {/* Header */}

      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{pkg.name}</h3>

        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </div>

      {/* Price */}

      <div className="mt-7">
        {price === 0 ? (
          <>
            <h2 className="text-4xl font-bold">Custom</h2>

            <p className="text-sm text-muted-foreground">Contact Sales</p>
          </>
        ) : (
          <>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold">
                ৳{price.toLocaleString()}
              </span>

              <span className="pb-2 text-muted-foreground">/{duration}</span>
            </div>
          </>
        )}
      </div>

      {/* Features */}

      <div className="my-8 space-y-3">
        {pkg.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check className="size-4 text-primary" />

            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Limits */}

      <div className="rounded-2xl border border-border bg-muted/30 p-4">
        <div className="grid grid-cols-2 gap-4">
          <LimitItem
            icon={<Users className="size-4" />}
            label="Employees"
            value={pkg.limits.employees}
          />

          <LimitItem
            icon={<Building2 className="size-4" />}
            label="Branches"
            value={pkg.limits.branches}
          />

          <LimitItem
            icon={<HardDrive className="size-4" />}
            label="Storage"
            value={pkg.limits.storage}
          />

          <LimitItem
            icon={<ShieldCheck className="size-4" />}
            label="Admins"
            value={pkg.limits.admins}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          onClick={onSelect}
          className="w-full rounded-xl"
          variant={selected ? "default" : "outline"}
        >
          {selected ? "Selected Package" : "Select Package"}
        </Button>
      </div>
    </div>
  );
}

type LimitItemProps = {
  icon: React.ReactNode;

  label: string;

  value: string | number;
};

function LimitItem({ icon, label, value }: LimitItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}

        <span className="text-xs">{label}</span>
      </div>

      <p className="font-semibold">{value}</p>
    </div>
  );
}
