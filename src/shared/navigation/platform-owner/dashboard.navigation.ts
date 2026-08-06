import {
  Activity,
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const dashboardNavigation: NavigationGroup = {
  id: "dashboard",

  title: "Dashboard",

  sections: [
    {
      id: "dashboard",

      title: "Dashboard",
      icon: LayoutDashboard,

      items: [
        {
          id: "overview",

          title: "Overview",

          href: `${platformRoutes.dashboard}/overview`,

          icon: LayoutDashboard,

          exact: true,
        },

        {
          id: "analytics",

          title: "Business Analytics",

          href: `${platformRoutes.dashboard}/analytics`,

          icon: BarChart3,
        },

        {
          id: "activity",

          title: "Live Activity",

          href: `${platformRoutes.dashboard}/activity`,

          icon: Activity,
        },

        {
          id: "health",

          title: "System Health",

          href: `${platformRoutes.dashboard}/system-health`,

          icon: ShieldCheck,
        },
      ],
    },
  ],
};
