import { FileSignature } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const agreements = [
  "Service Agreement",
  "Data Processing Agreement",
  "Privacy Agreement",
];

export function Agreements() {
  return (
    <ReviewCard
      title="Agreements"
      description="Signed legal agreements."
      icon={FileSignature}
    >
      <div className="space-y-3">
        {agreements.map((agreement) => (
          <div key={agreement} className="rounded-xl border p-4">
            {agreement}
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
