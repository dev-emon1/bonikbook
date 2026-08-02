export const AUTH_STORAGE_KEY = "bonikbook.auth.session";

export const PLATFORM_OWNER = {
  email: "owner@bonikbook.com",
  password: "123456",
} as const;

export const DEV_DEFAULT_LOGIN = import.meta.env.DEV
  ? {
      email: PLATFORM_OWNER.email,
      password: PLATFORM_OWNER.password,
      remember: true,
    }
  : {
      email: "",
      password: "",
      remember: false,
    };
