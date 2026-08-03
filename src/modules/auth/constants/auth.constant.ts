export const DEV_DEFAULT_LOGIN = {
  email: "admin@example.com",
  password: "password",
  remember: true,
} as const;

export const AUTH_STATUS = {
  INITIALIZING: "initializing",
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
} as const;
