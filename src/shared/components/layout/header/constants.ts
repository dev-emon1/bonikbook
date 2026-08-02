import type { Transition } from "motion/react";

export const HEADER = {
  HEIGHT: 72,

  SEARCH_WIDTH: 360,

  BORDER_RADIUS: 16,
} as const;

export const HEADER_ANIMATION: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
};
