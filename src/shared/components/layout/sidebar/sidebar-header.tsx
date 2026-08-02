import { motion } from "motion/react";

import { SIDEBAR_ANIMATION, SIDEBAR_BRAND } from "./constants";

import { SidebarLogo } from "./sidebar-logo";
import { SidebarToggle } from "./sidebar-toggle";

import type { SidebarHeaderProps } from "./types";

export function SidebarHeader({
  collapsed,
  onToggle,
}: SidebarHeaderProps) {
  return (
    <header className="relative shrink-0 border-b border-sidebar-border bg-sidebar/95 backdrop-blur-xl">
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Bottom Divider Glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative flex h-[72px] items-center justify-between px-4">
        {/* Brand */}
        <motion.div
          layout
          transition={SIDEBAR_ANIMATION}
          className="min-w-0 flex-1"
        >
          <SidebarLogo
            collapsed={collapsed}
            brand={SIDEBAR_BRAND}
          />
        </motion.div>

        {/* Toggle */}
        <SidebarToggle
          collapsed={collapsed}
          onToggle={onToggle}
        />
      </div>
    </header>
  );
}