import { Globe, Laptop, MapPin } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { LoginSession } from "../../types";

type Props = {
  session: LoginSession;
};

const statusClasses = {
  active: "bg-success/10 text-success",

  expired: "bg-muted text-muted-foreground",
} as const;

export default function LoginSessionItem({ session }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-4",
        "transition-default hover:border-primary/20",
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-foreground">{session.user}</h4>

          <p className="mt-1 text-sm text-muted-foreground">
            {session.organization}
          </p>
        </div>

        <span
          className={cn(
            "rounded-full px-2 py-1 text-xs font-medium capitalize",
            statusClasses[session.status],
          )}
        >
          {session.status}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Laptop className="size-4" />

          <span>
            {session.device} • {session.browser}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="size-4" />

          <span>{session.ipAddress}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="size-4" />

          <span>{session.location}</span>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
        Login: {session.loginAt}
      </div>
    </div>
  );
}
