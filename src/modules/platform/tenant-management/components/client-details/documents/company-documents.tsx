import { FileText } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const documents = [
  {
    name: "Trade License",
    status: "Uploaded",
  },
  {
    name: "TIN Certificate",
    status: "Uploaded",
  },
  {
    name: "BIN Certificate",
    status: "Pending",
  },
  {
    name: "Certificate of Incorporation",
    status: "Uploaded",
  },
];

export function CompanyDocuments() {
  return (
    <ReviewCard
      title="Company Documents"
      description="Business registration documents."
      icon={FileText}
    >
      <div className="space-y-3">
        {documents.map((document) => (
          <div
            key={document.name}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <span>{document.name}</span>

            <span className="text-sm font-medium">{document.status}</span>
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
