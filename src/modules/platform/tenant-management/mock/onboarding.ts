// modules/platform/tenant-management/mock/onboarding.ts

import type { OnboardingStep } from "../types/onboarding.types";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 1,
    title: "Organization",
    description: "Business information",
  },
  {
    id: 2,
    title: "Administrator",
    description: "Primary account",
  },
  {
    id: 3,
    title: "Package",
    description: "Select plan",
  },
  {
    id: 4,
    title: "Subscription",
    description: "Billing setup",
  },
  {
    id: 5,
    title: "Review",
    description: "Verify information",
  },
  {
    id: 6,
    title: "Complete",
    description: "Provision account",
  },
];
