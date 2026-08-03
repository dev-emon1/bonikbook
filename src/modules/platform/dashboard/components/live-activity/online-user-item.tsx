import { User } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { OnlineUser } from "../../types";

type Props = {
  user: OnlineUser;
};

const statusClasses = {
  online: "bg-success",

  away: "bg-warning",

  offline: "bg-muted-foreground",
} as const;

export default function OnlineUserItem({ user }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border border-border",
        "bg-background p-4 transition-default hover:border-primary/20",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="size-5" />
          </div>

          <span
            className={cn(
              "absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-card",
              statusClasses[user.status],
            )}
          />
        </div>

        <div>
          <h4 className="font-medium text-foreground">{user.name}</h4>

          <p className="text-sm text-muted-foreground">{user.role}</p>

          <p className="text-xs text-muted-foreground">{user.organization}</p>
        </div>
      </div>

      <span className="text-xs text-muted-foreground">{user.lastSeen}</span>
    </div>
  );
}
