import type { RouteObject } from "react-router";

import OverviewPage from "../pages/overview";
import BusinessAnalyticsPage from "../pages/business-analytics";
import LiveActivityPage from "../pages/live-activity";
import SystemHealthPage from "../pages/system-health";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    children: [
      {
        index: true,
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "analytics",
        element: <BusinessAnalyticsPage />,
      },
      {
        path: "activity",
        element: <LiveActivityPage />,
      },
      {
        path: "system-health",
        element: <SystemHealthPage />,
      },
    ],
  },
];
