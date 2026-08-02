// src/app/config/app.ts

export const appConfig = {
  name: "BonikBook",
  shortName: "BB",
  version: "1.0.0",

  company: {
    name: "BonikBook",
    website: "",
    supportEmail: "",
  },

  ui: {
    defaultTheme: "system" as const,
    defaultSidebarCollapsed: false,
    defaultLocale: "en",
  },
} as const;
