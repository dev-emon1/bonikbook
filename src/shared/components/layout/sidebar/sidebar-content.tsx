// shared/components/layout/sidebar/sidebar-content.tsx

import { motion } from "motion/react";

import { cn } from "@/shared/lib/utils";

import { SIDEBAR_ANIMATION } from "./constants";

import { SidebarGroup } from "./sidebar-group";

import type { SidebarContentProps } from "./types";

export function SidebarContent({ groups }: SidebarContentProps) {
  return (
    <div className="relative flex-1 overflow-hidden">
      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-sidebar to-transparent" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-gradient-to-t from-sidebar to-transparent" />

      <motion.div
        layout
        transition={SIDEBAR_ANIMATION}
        className={cn(
          "h-full overflow-y-auto",
          "px-3 py-4",
          "scrollbar-thin scrollbar-thumb-sidebar-border scrollbar-track-transparent",
        )}
      >
        <div className="space-y-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.id ?? group.title ?? index}
              layout
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...SIDEBAR_ANIMATION,
                delay: index * 0.04,
              }}
            >
              <SidebarGroup group={group} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
