import {
  ActivityFeed,
  ActivityFilter,
  ActivityHeader,
  LoginSessions,
  OnlineUsers,
  SecurityEvents,
  SystemQueue,
} from "../components/live-activity";

export default function LiveActivityPage() {
  return (
    <div className="space-y-8">
      <ActivityHeader />

      <ActivityFilter />

      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <ActivityFeed />

        <OnlineUsers />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <LoginSessions />

        <SecurityEvents />
      </div>

      <SystemQueue />
    </div>
  );
}
