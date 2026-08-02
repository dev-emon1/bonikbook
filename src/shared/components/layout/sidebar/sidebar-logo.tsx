import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/shared/lib/utils";

import type { SidebarLogoProps } from "./types";

export function SidebarLogo({ collapsed, brand }: SidebarLogoProps) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <motion.div
        layout
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center",
          "overflow-hidden rounded-2xl",
          "border border-primary/10",
          "bg-background shadow-sm",
        )}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-8 w-8 object-contain"
        />
      </motion.div>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{
              opacity: 0,
              x: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -8,
            }}
            transition={{
              duration: 0.18,
            }}
            className="min-w-0"
          >
            <h2 className="truncate text-[15px] font-bold tracking-tight">
              {brand.name}
            </h2>

            <p className="truncate text-xs text-muted-foreground">
              {brand.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
