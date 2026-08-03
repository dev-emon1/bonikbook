import { Button } from "@/shared/ui/button";

import { loginSessions } from "../../mock/live-activity.data";

import { DashboardCard } from "../shared";

import LoginSessionItem from "./login-session-item";

export default function LoginSessions() {
  return (
    <DashboardCard
      title="Login Sessions"
      description="Current authenticated user sessions."
      action={
        <Button size="sm" variant="ghost">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {loginSessions.map((session) => (
          <LoginSessionItem key={session.id} session={session} />
        ))}
      </div>
    </DashboardCard>
  );
}
