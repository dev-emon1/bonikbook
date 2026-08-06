import { ShieldCheck } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function SecuritySettings() {
  return (
    <ReviewCard
      title="Security Settings"
      description="Security configuration."
      icon={ShieldCheck}
    >
      <ReviewGrid>
        <ReviewItem label="Two Factor Authentication" value="Enabled" />

        <ReviewItem label="Password Policy" value="Strong" />

        <ReviewItem label="Session Timeout" value="30 Minutes" />

        <ReviewItem label="IP Restriction" value="Disabled" />
      </ReviewGrid>
    </ReviewCard>
  );
}
