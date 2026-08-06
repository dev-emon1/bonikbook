import { Building2 } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function WorkspaceSettings() {
  return (
    <ReviewCard
      title="Workspace Settings"
      description="Workspace configuration."
      icon={Building2}
    >
      <ReviewGrid>
        <ReviewItem label="Workspace" value="technova.myhrlounge.com" />

        <ReviewItem label="Timezone" value="Asia/Dhaka" />

        <ReviewItem label="Currency" value="BDT" />

        <ReviewItem label="Language" value="English" />

        <ReviewItem label="Date Format" value="DD/MM/YYYY" />

        <ReviewItem label="Status" value="Active" />
      </ReviewGrid>
    </ReviewCard>
  );
}
