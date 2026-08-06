import { Package } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function OverviewPackage() {
  return (
    <ReviewCard
      title="Package"
      description="Current assigned package."
      icon={Package}
    >
      <ReviewGrid>
        <ReviewItem label="Plan" value="Enterprise" />

        <ReviewItem label="Billing" value="Yearly" />

        <ReviewItem label="Employees" value="1000" />

        <ReviewItem label="Branches" value="Unlimited" />
      </ReviewGrid>
    </ReviewCard>
  );
}
