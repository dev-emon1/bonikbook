import { Building2, BadgeCheck, Clock3, Ban, Banknote } from "lucide-react";

import type { ClientStatItem } from "../types";

export const clientStats: ClientStatItem[] = [
  {
    id: "total",

    title: "Total Clients",

    value: "1,248",

    description: "Registered organizations",

    icon: Building2,

    trend: {
      value: "+12.8%",
      direction: "up",
    },
  },

  {
    id: "active",

    title: "Active Clients",

    value: "1,102",

    description: "Currently operational",

    icon: BadgeCheck,

    trend: {
      value: "+8.4%",
      direction: "up",
    },
  },

  {
    id: "pending",

    title: "Pending Approval",

    value: "38",

    description: "Waiting for verification",

    icon: Clock3,

    trend: {
      value: "-5%",
      direction: "down",
    },
  },

  {
    id: "suspended",

    title: "Suspended",

    value: "17",

    description: "Temporarily restricted",

    icon: Ban,

    trend: {
      value: "+2",
      direction: "neutral",
    },
  },

  {
    id: "mrr",

    title: "Monthly Revenue",

    value: "৳ 42,580",

    description: "Recurring subscription revenue",

    icon: Banknote,

    trend: {
      value: "+18.2%",
      direction: "up",
    },
  },
];
