// src/app/config/env.ts

const env = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    environment: import.meta.env.VITE_APP_ENV,
  },

  api: {
    baseUrl: import.meta.env.VITE_API_URL,
  },

  auth: {
    enable2FA: import.meta.env.VITE_ENABLE_2FA === "true",

    enableEmailVerification:
      import.meta.env.VITE_ENABLE_EMAIL_VERIFICATION === "true",
  },
} as const;

export default env;
