import { FlaskConical } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function TrialInformation() {
  return (
    <ReviewCard
      title="Trial Information"
      description="Trial configuration."
      icon={FlaskConical}
    >
      <ReviewGrid>
        <ReviewItem label="Trial Enabled" value="Yes" />

        <ReviewItem label="Duration" value="30 Days" />

        <ReviewItem label="Started" value="01 Aug 2026" />

        <ReviewItem label="Ends" value="30 Aug 2026" />
      </ReviewGrid>
    </ReviewCard>
  );
}
