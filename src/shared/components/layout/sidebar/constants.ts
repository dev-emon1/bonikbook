// shared/components/layout/sidebar/constants.ts

import type { Transition } from "motion/react";

export const SIDEBAR = {
  WIDTH: 288,
  COLLAPSED_WIDTH: 76,
  MOBILE_WIDTH: 320,

  HEADER_HEIGHT: 72,
  FOOTER_HEIGHT: 84,

  ITEM_HEIGHT: 44,
  ICON_SIZE: 18,

  GROUP_GAP: 10,
  SECTION_GAP: 24,

  BORDER_RADIUS: 16,
} as const;

export const SIDEBAR_ANIMATION: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 28,
  mass: 0.8,
};

export const SIDEBAR_ITEM_ANIMATION: Transition = {
  duration: 0.18,
};

export const SIDEBAR_OVERLAY_ANIMATION: Transition = {
  duration: 0.25,
};

// shared/components/layout/sidebar/constants.ts

import logo from "@/assets/logos/bonikbook-logo.png";

export const SIDEBAR_BRAND = {
  name: "BonikBook",
  tagline: "Business Operating System",
  logo,
} as const;
