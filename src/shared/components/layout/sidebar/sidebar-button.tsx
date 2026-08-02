import { ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/shared/lib/utils";

import { SIDEBAR } from "./constants";
import type { SidebarButtonProps } from "./types";
import { SidebarTooltip } from "./sidebar-tooltip";

export function SidebarButton({
  active = false,
  collapsed = false,
  level = 0,
  hasChildren = false,
  open = false,
  icon: Icon,
  title,
  badge,
  external,
  onClick,
}: SidebarButtonProps) {
  return (
    <SidebarTooltip label={title} disabled={!collapsed}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "group relative flex w-full items-center rounded-xl transition-all duration-200",

          collapsed ? "justify-center px-0" : "justify-start",

          active
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15"
            : "hover:bg-accent",
        )}
        style={{
          height: SIDEBAR.ITEM_HEIGHT,
          paddingLeft: collapsed ? 0 : 16 + level * 12,
          paddingRight: collapsed ? 0 : 16,
        }}
      >
        {active && (
          <motion.div
            layoutId="sidebar-active-indicator"
            className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-primary-foreground"
          />
        )}

        {Icon && (
          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
            <Icon size={SIDEBAR.ICON_SIZE} />
          </div>
        )}

        {!collapsed && (
          <>
            <span className="ml-3 flex-1 text-left text-sm font-medium">
              {title}
            </span>

            {badge && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {badge.value}
              </span>
            )}

            {external && <ExternalLink size={14} className="ml-2 opacity-60" />}

            {hasChildren && (
              <motion.div
                animate={{
                  rotate: open ? 90 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <ChevronRight size={16} />
              </motion.div>
            )}
          </>
        )}
      </button>
    </SidebarTooltip>
  );
}
