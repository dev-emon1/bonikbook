// shared/components/layout/header/app-header.tsx

import { motion } from "motion/react";

import { HEADER, HEADER_ANIMATION } from "./constants";

import { AppBreadcrumb } from "./app-breadcrumb";
import { AppSearch } from "./app-search";
import { NotificationMenu } from "./notification-menu";
import { ProfileMenu } from "./profile-menu";
import { QuickActions } from "./quick-actions";
import ThemeToggle from "./theme-toggle";

export function AppHeader() {
  return (
    <motion.header
      layout
      transition={HEADER_ANIMATION}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-2xl"
      style={{
        height: HEADER.HEIGHT,
      }}
    >
      <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
        {/* Left */}
        <div className="min-w-0">
          <AppBreadcrumb />
        </div>

        {/* Center */}
        <div className="hidden xl:block">
          <AppSearch />
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-2">
          <QuickActions />

          <ThemeToggle />

          <NotificationMenu />

          <ProfileMenu />
        </div>
      </div>
    </motion.header>
  );
}
