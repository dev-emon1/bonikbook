import { Agreements } from "./agreements";
import { CompanyDocuments } from "./company-documents";
import { UploadedFiles } from "./uploaded-files";

export function DocumentsTab() {
  return (
    <div className="space-y-6">
      <CompanyDocuments />

      <Agreements />

      <UploadedFiles />
    </div>
  );
}
