// shared/components/layout/sidebar/sidebar-group.tsx

import { AnimatePresence, motion } from "motion/react";

import { useSidebar } from "./context";

import { SIDEBAR_ANIMATION } from "./constants";

import { SidebarSection } from "./sidebar-section";

import type { SidebarGroupProps } from "./types";

export function SidebarGroup({ group }: SidebarGroupProps) {
  const { collapsed } = useSidebar();

  return (
    <motion.section layout transition={SIDEBAR_ANIMATION} className="space-y-2">
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              y: -6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -6,
            }}
            transition={{
              duration: 0.18,
            }}
            className="flex items-center justify-between px-3"
          >
            <h3 className="truncate text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              {group.title}
            </h3>

            {group.badge && (
              <span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {group.badge.value}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout transition={SIDEBAR_ANIMATION} className="space-y-1">
        {group.sections.map((section) => (
          <SidebarSection key={section.id} section={section} />
        ))}
      </motion.div>
    </motion.section>
  );
}
