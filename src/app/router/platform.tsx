import type { RouteObject } from "react-router";

import DashboardPage from "@/modules/platform/dashboard/pages/dashboard-page";
import DashboardLayout from "../layouts/dashboard-layout";

export const platformRoutes: RouteObject[] = [
  {
    path: "/platform",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },

      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
];
