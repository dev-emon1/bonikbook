import type { RouteObject } from "react-router";

// import WorkspaceLayout from "@/app/layouts/workspace-layout/workspace-layout";

// import AuthGuard from "./guards/auth-guard";
// import TenantGuard from "./guards/tenant-guard";

// import { dashboardRoutes } from "@/modules/dashboard/routes";

export const workspaceRoutes: RouteObject[] = [
  {
    path: "/",

    element:
      "",
      // <AuthGuard>
      //   <TenantGuard>
      //     <WorkspaceLayout />
      //   </TenantGuard>
      // </AuthGuard>

    children: [
      // ...dashboardRoutes,
      // inventory
      // crm
      // purchase
      // sales
      // accounts
    ],
  },
];
