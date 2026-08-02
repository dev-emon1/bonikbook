import type { RouteObject } from "react-router-dom";

import { AuthLayout } from "@/app/layouts";
import { ROUTE_PATHS } from "@/app/router/route-paths";

import { ForgotPasswordPage, ResetPasswordPage } from "../pages";
import LoginPage from "../pages/login-page";

export const authenticationRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.AUTH.FORGOT_PASSWORD,
        element: <ForgotPasswordPage />,
      },
      {
        path: ROUTE_PATHS.AUTH.RESET_PASSWORD,
        element: <ResetPasswordPage />,
      },
    ],
  },
];
