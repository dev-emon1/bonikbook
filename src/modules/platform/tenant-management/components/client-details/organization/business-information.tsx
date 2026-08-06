import { BriefcaseBusiness } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function BusinessInformation() {
  return (
    <ReviewCard
      title="Business Information"
      description="Business profile."
      icon={BriefcaseBusiness}
    >
      <ReviewGrid>
        <ReviewItem label="TIN" value="123456789" />

        <ReviewItem label="Trade License" value="TL-2026-1001" />

        <ReviewItem label="Employee Size" value="500+" />

        <ReviewItem label="Founded" value="2018" />
      </ReviewGrid>
    </ReviewCard>
  );
}
