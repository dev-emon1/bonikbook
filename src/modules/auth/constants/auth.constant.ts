export const DEV_DEFAULT_LOGIN = {
  email: "hossainemonmd7@gmail.com",
  password: "password",
  remember: true,
} as const;

export const AUTH_STATUS = {
  INITIALIZING: "initializing",
  AUTHENTICATED: "authenticated",
  UNAUTHENTICATED: "unauthenticated",
} as const;
