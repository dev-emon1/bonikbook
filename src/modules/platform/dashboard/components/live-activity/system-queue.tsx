import { Button } from "@/shared/ui/button";

import { systemQueues } from "../../mock/live-activity.data";

import { DashboardCard } from "../shared";

import QueueItem from "./queue-item";

export default function SystemQueue() {
  return (
    <DashboardCard
      title="Background Queues"
      description="Current processing status of platform background jobs."
      action={
        <Button variant="ghost" size="sm">
          View Queue
        </Button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {systemQueues.map((queue) => (
          <QueueItem key={queue.id} queue={queue} />
        ))}
      </div>
    </DashboardCard>
  );
}
