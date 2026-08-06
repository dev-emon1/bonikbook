import { ShieldCheck } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function PackageLimits() {
  return (
    <ReviewCard
      title="Package Limits"
      description="Current package limits."
      icon={ShieldCheck}
    >
      <ReviewGrid columns={3}>
        <ReviewItem label="Employees" value="1000" />

        <ReviewItem label="Branches" value="Unlimited" />

        <ReviewItem label="Storage" value="100 GB" />

        <ReviewItem label="Departments" value="Unlimited" />

        <ReviewItem label="Administrators" value="10" />

        <ReviewItem label="API Access" value="Enabled" />
      </ReviewGrid>
    </ReviewCard>
  );
}
