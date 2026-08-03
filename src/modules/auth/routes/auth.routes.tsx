import type { RouteObject } from "react-router";

import AuthLayout from "@/app/layouts/auth-layout";
import { GuestGuard } from "@/app/router/guards";
import { ROUTE_PATHS } from "@/app/router/route-paths";

import {
  ForgotPasswordPage,
  ResetPasswordPage,
  // VerifyEmailPage,
  // VerifyOtpPage,
} from "../pages";
import LoginPage from "../pages/login-page";

export const authenticationRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.ROOT,

    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),

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

      // {
      //   path: ROUTE_PATHS.AUTH.VERIFY_EMAIL,
      //   element: <VerifyEmailPage />,
      // },
      // {
      //   path: ROUTE_PATHS.AUTH.VERIFY_OTP,
      //   element: <VerifyOtpPage />,
      // },
    ],
  },
];
