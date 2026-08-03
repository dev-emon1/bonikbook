export const ROUTE_PATHS = {
  ROOT: "/",

  AUTH: {
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",

    VERIFY_EMAIL: "/verify-email",
    VERIFY_OTP: "/verify-otp",
  },

  PLATFORM: {
    ROOT: "/platform",
    DASHBOARD: "/platform/dashboard",
  },

  WORKSPACE: {
    ROOT: "/workspace",
    DASHBOARD: "/workspace/dashboard",
  },
} as const;
