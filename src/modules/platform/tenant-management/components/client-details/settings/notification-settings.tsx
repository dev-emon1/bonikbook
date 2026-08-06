import { Bell } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function NotificationSettings() {
  return (
    <ReviewCard
      title="Notification Settings"
      description="Workspace notifications."
      icon={Bell}
    >
      <ReviewGrid>
        <ReviewItem label="Email Notification" value="Enabled" />

        <ReviewItem label="SMS Notification" value="Disabled" />

        <ReviewItem label="Renewal Reminder" value="7 Days Before" />

        <ReviewItem label="System Alerts" value="Enabled" />
      </ReviewGrid>
    </ReviewCard>
  );
}
