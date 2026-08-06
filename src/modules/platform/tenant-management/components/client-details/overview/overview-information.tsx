import { Building2 } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function OverviewInformation() {
  return (
    <ReviewCard
      title="Organization Information"
      description="Basic company information."
      icon={Building2}
    >
      <ReviewGrid>
        <ReviewItem label="Company" value="TechNova Ltd." />

        <ReviewItem label="Industry" value="Software" />

        <ReviewItem label="Country" value="Bangladesh" />

        <ReviewItem label="Timezone" value="Asia/Dhaka" />

        <ReviewItem label="Currency" value="BDT" />

        <ReviewItem label="Website" value="https://technova.com" />
      </ReviewGrid>
    </ReviewCard>
  );
}
