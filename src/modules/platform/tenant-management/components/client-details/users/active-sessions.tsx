import { Laptop } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function ActiveSessions() {
  return (
    <ReviewCard
      title="Active Sessions"
      description="Current active user sessions."
      icon={Laptop}
    >
      <ReviewGrid columns={3}>
        <ReviewItem label="Online Users" value="12" />

        <ReviewItem label="Desktop" value="9" />

        <ReviewItem label="Mobile" value="3" />

        <ReviewItem label="Last Activity" value="2 min ago" />

        <ReviewItem label="Failed Logins" value="0" />

        <ReviewItem label="Locked Accounts" value="0" />
      </ReviewGrid>
    </ReviewCard>
  );
}
