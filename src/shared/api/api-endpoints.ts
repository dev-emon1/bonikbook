// src/shared/api/api-endpoints.ts

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",

    OTP: {
      SEND: "/auth/otp/send",
      VERIFY: "/auth/otp/verify",
    },

    PASSWORD: {
      FORGOT: "/auth/forgot-password",
      RESET: "/auth/reset-password",
    },
  },
} as const;
