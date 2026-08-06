import { ActivityTimeline } from "./activity-timeline";
import { LoginHistory } from "./login-history";
import { PackageEvents } from "./package-events";

export function ActivityTab() {
  return (
    <div className="space-y-6">
      <ActivityTimeline />

      <LoginHistory />

      <PackageEvents />
    </div>
  );
}
