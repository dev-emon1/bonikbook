import { Package } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function CurrentPackage() {
  return (
    <ReviewCard
      title="Current Package"
      description="Assigned package information."
      icon={Package}
    >
      <ReviewGrid>
        <ReviewItem label="Package" value="Enterprise" />

        <ReviewItem label="Billing Cycle" value="Yearly" />

        <ReviewItem label="Status" value="Active" />

        <ReviewItem label="Assigned On" value="01 Aug 2026" />
      </ReviewGrid>
    </ReviewCard>
  );
}
