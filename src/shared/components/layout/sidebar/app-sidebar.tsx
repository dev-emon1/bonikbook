import { useMemo } from "react";
import { motion } from "motion/react";

import { buildNavigation } from "@/shared/navigation";
import { cn } from "@/shared/lib/utils";

import { SIDEBAR, SIDEBAR_ANIMATION } from "./constants";

import type { AppSidebarProps } from "./types";

import { SidebarProvider, useSidebar } from "./context";

import { SidebarContent } from "./sidebar-content";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarHeader } from "./sidebar-header";

function SidebarLayout({ variant }: AppSidebarProps) {
  const { collapsed, toggleSidebar } = useSidebar();

  const groups = useMemo(
    () =>
      buildNavigation({
        type: variant ?? "platform",
      }),
    [variant],
  );

  return (
    <motion.aside
      layout
      transition={SIDEBAR_ANIMATION}
      animate={{
        width: collapsed ? SIDEBAR.COLLAPSED_WIDTH : SIDEBAR.WIDTH,
      }}
      className={cn(
        "sticky top-0 hidden h-screen shrink-0 overflow-hidden",
        "border-r border-sidebar-border",
        "bg-sidebar/95 backdrop-blur-2xl",
        "lg:flex lg:flex-col",
      )}
    >
      <SidebarHeader collapsed={collapsed} onToggle={toggleSidebar} />

      <SidebarContent groups={groups} />

      <SidebarFooter
        collapsed={collapsed}
        user={{
          name: "John Doe",
        }}
        workspace={{
          name: "BonikBook ERP",
          plan: "Enterprise",
        }}
      />
    </motion.aside>
  );
}

export function AppSidebar({ variant = "platform" }: AppSidebarProps) {
  return (
    <SidebarProvider variant={variant}>
      <SidebarLayout variant={variant} />
    </SidebarProvider>
  );
}
