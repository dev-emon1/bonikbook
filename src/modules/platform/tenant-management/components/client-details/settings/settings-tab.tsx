import { DangerZone } from "./danger-zone";
import { NotificationSettings } from "./notification-settings";
import { SecuritySettings } from "./security-settings";
import { WorkspaceSettings } from "./workspace-settings";

export function SettingsTab() {
  return (
    <div className="space-y-6">
      <WorkspaceSettings />

      <SecuritySettings />

      <NotificationSettings />

      <DangerZone />
    </div>
  );
}
