import { Button } from "@/shared/ui/button";

import { onlineUsers } from "../../mock/live-activity.data";

import { DashboardCard } from "../shared";

import OnlineUserItem from "./online-user-item";

export default function OnlineUsers() {
  return (
    <DashboardCard
      title="Online Users"
      description="Currently active users across the platform."
      action={
        <Button size="sm" variant="ghost">
          View All
        </Button>
      }
    >
      <div className="space-y-4">
        {onlineUsers.map((user) => (
          <OnlineUserItem key={user.id} user={user} />
        ))}
      </div>
    </DashboardCard>
  );
}
