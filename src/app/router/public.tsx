import type { RouteObject } from "react-router";

import { authenticationRoutes } from "@/modules/auth/routes";

export const publicRoutes: RouteObject[] = [...authenticationRoutes];
