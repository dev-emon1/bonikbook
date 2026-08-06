import { FolderOpen } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const files = ["Company Logo.png", "Employee Handbook.pdf", "Office Photo.jpg"];

export function UploadedFiles() {
  return (
    <ReviewCard
      title="Uploaded Files"
      description="Additional uploaded files."
      icon={FolderOpen}
    >
      <div className="space-y-3">
        {files.map((file) => (
          <div key={file} className="rounded-xl border p-4">
            {file}
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
