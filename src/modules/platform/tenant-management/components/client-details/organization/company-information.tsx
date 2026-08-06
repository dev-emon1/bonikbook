import { Building2 } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function CompanyInformation() {
  return (
    <ReviewCard
      title="Company Information"
      description="Basic organization information."
      icon={Building2}
    >
      <ReviewGrid>
        <ReviewItem label="Company Name" value="TechNova Ltd." />

        <ReviewItem label="Company Code" value="TECH-001" />

        <ReviewItem label="Business Type" value="Private Limited" />

        <ReviewItem label="Industry" value="Software" />

        <ReviewItem label="Website" value="https://technova.com" />

        <ReviewItem label="Company Email" value="info@technova.com" />
      </ReviewGrid>
    </ReviewCard>
  );
}
