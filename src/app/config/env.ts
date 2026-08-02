// src/app/config/env.ts

export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? "BonikBook",

  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api",

  appUrl: import.meta.env.VITE_APP_URL ?? "http://localhost:5173",

  isDev: import.meta.env.DEV,

  isProd: import.meta.env.PROD,
} as const;
