import type { RouteObject } from "react-router";

import LoginPage from "@/modules/auth/pages/login-page";

export const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    Component: LoginPage,
  },
];
