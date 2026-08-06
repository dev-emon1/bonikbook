import { ActiveSessions } from "./active-sessions";
import { Administrators } from "./administrators";
import { RecentLogins } from "./recent-logins";

export function UsersTab() {
  return (
    <div className="space-y-6">
      <Administrators />

      <ActiveSessions />

      <RecentLogins />
    </div>
  );
}
