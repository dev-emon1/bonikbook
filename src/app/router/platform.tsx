import type { RouteObject } from "react-router";

import DashboardLayout from "@/app/layouts/dashboard-layout";
import { AuthGuard } from "@/app/router/guards";

import { dashboardRoutes } from "@/modules/platform/dashboard/routes";
import { tenantsRoutes } from "@/modules/platform/tenant-management/routes/client.routes";

export const platformRoutes: RouteObject[] = [
  {
    path: "/platform",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,

      ...tenantsRoutes,
      // packagesRoutes
      // subscriptionsRoutes
    ],
  },
];
