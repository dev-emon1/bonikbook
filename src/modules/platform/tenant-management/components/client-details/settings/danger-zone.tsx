import { TriangleAlert } from "lucide-react";

import { Button } from "@/shared/ui/button";

import { ReviewCard } from "@/shared/components/platform/review";

export function DangerZone() {
  return (
    <ReviewCard
      title="Danger Zone"
      description="High impact actions."
      icon={TriangleAlert}
    >
      <div className="flex flex-wrap gap-3">
        <Button variant="outline">Suspend Client</Button>

        <Button variant="outline">Archive Client</Button>

        <Button variant="destructive">Delete Client</Button>
      </div>
    </ReviewCard>
  );
}
