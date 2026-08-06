import { RoleChanges } from "./role-changes";
import { SecurityEvents } from "./security-events";
import { SystemEvents } from "./system-events";

export function AuditLogTab() {
  return (
    <div className="space-y-6">
      <SecurityEvents />

      <RoleChanges />

      <SystemEvents />
    </div>
  );
}
