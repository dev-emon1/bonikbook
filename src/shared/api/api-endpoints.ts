// src/shared/api/api-endpoints.ts

export const apiEndpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    me: "/auth/me",
    refresh: "/auth/refresh",
  },
} as const;
