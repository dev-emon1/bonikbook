import { Bell } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/shared/ui/button";

import { HEADER_ANIMATION } from "./constants";

export function NotificationMenu() {
  // TODO: Replace with API
  const unreadCount = 3;

  return (
    <motion.div layout transition={HEADER_ANIMATION}>
      <Button
        variant="ghost"
        size="icon"
        className="relative h-10 w-10 rounded-xl"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />

        {unreadCount > 0 && (
          <span className="absolute right-2 top-2 flex h-2.5 w-2.5 rounded-full bg-destructive ring-2 ring-background" />
        )}
      </Button>
    </motion.div>
  );
}
