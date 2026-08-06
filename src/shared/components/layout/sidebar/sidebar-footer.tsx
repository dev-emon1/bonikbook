// shared/components/layout/sidebar/sidebar-footer.tsx

import { AnimatePresence, motion } from "motion/react";
import { Building2, Crown, UserCircle2 } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import { SIDEBAR_ANIMATION } from "./constants";

import type { SidebarFooterProps } from "./types";

export function SidebarFooter({
  collapsed,
  user,
  workspace,
}: SidebarFooterProps) {
  return (
    <footer className="border-t border-sidebar-border bg-sidebar/95 p-2 backdrop-blur-xl">
      <motion.div
        layout
        transition={SIDEBAR_ANIMATION}
        className={cn(
          "overflow-hidden rounded-2xl border",
          collapsed ? "p-0" : "",
        )}
      >
        <div
          className={cn(
            "flex items-center p-3",
            collapsed ? "justify-center" : "gap-3",
          )}
        >
          {/* Avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-full w-full rounded-xl object-cover"
              />
            ) : (
              <UserCircle2 size={22} />
            )}
          </div>

          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                layout
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={SIDEBAR_ANIMATION}
                className="min-w-0 flex-1"
              >
                <p className="truncate text-sm font-semibold">
                  {user?.name ?? "Platform Owner"}
                </p>

                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Building2 size={12} />

                  <span className="truncate">
                    {workspace?.name ?? "BonikBook"}
                  </span>
                </div>

                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
                  <Crown size={10} />

                  {workspace?.plan ?? "Enterprise"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </footer>
  );
}
