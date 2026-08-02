/**
 * Route Prefixes
 */
export const PLATFORM_OWNER_PREFIX = "/platform";

export const WORKSPACE_PREFIX = "/app";

/**
 * Navigation Types
 */
export const NAVIGATION_TYPES = {
  PLATFORM: "platform",
  WORKSPACE: "workspace",
} as const;

/**
 * Navigation Status
 */
export const NAVIGATION_STATUS = {
  ACTIVE: "active",
  DISABLED: "disabled",
  HIDDEN: "hidden",
} as const;

/**
 * Navigation Badge Variants
 */
export const NAVIGATION_BADGE_VARIANTS = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
} as const;

/**
 * Sidebar
 */
export const SIDEBAR_WIDTH = "18rem";

export const SIDEBAR_COLLAPSED_WIDTH = "4.5rem";

export const SIDEBAR_COOKIE_NAME = "bonikbook-sidebar-state";
