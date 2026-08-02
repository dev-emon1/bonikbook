import {
  Brush,
  Building2,
  Globe,
  Languages,
  Palette,
  Settings,
  Shield,
  SlidersHorizontal,
  Wrench,
  Cog,
  ContactRound,
  BadgeInfo,
  Image,
  SwatchBook,
  MonitorCog,
  PanelLeft,
  LayoutDashboard,
  Map,
  Coins,
  Clock3,
  CalendarDays,
  Languages as LanguagesIcon,
  FileText,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Sliders,
  Settings2,
  FlaskConical,
  Code2,
  KeyRound,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const settingsNavigation: NavigationGroup = {
  id: "settings",

  title: "Settings",

  sections: [
    {
      id: "general",

      title: "General",

      icon: Settings,

      items: [
        {
          id: "platform-settings",

          title: "Platform Settings",

          href: `${platformRoutes.settings}/platform`,

          icon: Cog,
        },

        {
          id: "business-profile",

          title: "Business Profile",

          href: `${platformRoutes.settings}/business-profile`,

          icon: Building2,
        },

        {
          id: "contact-information",

          title: "Contact Information",

          href: `${platformRoutes.settings}/contact`,

          icon: ContactRound,
        },
      ],
    },

    {
      id: "branding",

      title: "Branding",

      icon: Palette,

      items: [
        {
          id: "brand-identity",

          title: "Brand Identity",

          href: `${platformRoutes.settings}/branding`,

          icon: BadgeInfo,
        },

        {
          id: "logos",

          title: "Logos & Assets",

          href: `${platformRoutes.settings}/logos`,

          icon: Image,
        },

        {
          id: "themes",

          title: "Themes",

          href: `${platformRoutes.settings}/themes`,

          icon: SwatchBook,
        },
      ],
    },

    {
      id: "appearance",

      title: "Appearance",

      icon: Brush,

      items: [
        {
          id: "ui-preferences",

          title: "UI Preferences",

          href: `${platformRoutes.settings}/ui`,

          icon: MonitorCog,
        },

        {
          id: "navigation-layout",

          title: "Navigation Layout",

          href: `${platformRoutes.settings}/navigation`,

          icon: PanelLeft,
        },

        {
          id: "dashboard-layout",

          title: "Dashboard Layout",

          href: `${platformRoutes.settings}/dashboard`,

          icon: LayoutDashboard,
        },
      ],
    },

    {
      id: "regional",

      title: "Regional Settings",

      icon: Globe,

      items: [
        {
          id: "countries",

          title: "Countries",

          href: `${platformRoutes.settings}/countries`,

          icon: Map,
        },

        {
          id: "currencies",

          title: "Currencies",

          href: `${platformRoutes.settings}/currencies`,

          icon: Coins,
        },

        {
          id: "timezones",

          title: "Time Zones",

          href: `${platformRoutes.settings}/timezones`,

          icon: Clock3,
        },

        {
          id: "date-formats",

          title: "Date & Time Formats",

          href: `${platformRoutes.settings}/date-formats`,

          icon: CalendarDays,
        },
      ],
    },

    {
      id: "language",

      title: "Localization",

      icon: Languages,

      items: [
        {
          id: "languages",

          title: "Languages",

          href: `${platformRoutes.settings}/languages`,

          icon: LanguagesIcon,
        },

        {
          id: "translations",

          title: "Translations",

          href: `${platformRoutes.settings}/translations`,

          icon: FileText,
        },
      ],
    },

    {
      id: "security",

      title: "Platform Security",

      icon: Shield,

      items: [
        {
          id: "security-settings",

          title: "Security Settings",

          href: `${platformRoutes.settings}/security`,

          icon: ShieldCheck,
        },

        {
          id: "compliance",

          title: "Compliance",

          href: `${platformRoutes.settings}/compliance`,

          icon: ShieldAlert,
        },

        {
          id: "privacy",

          title: "Privacy",

          href: `${platformRoutes.settings}/privacy`,

          icon: Lock,
        },
      ],
    },

    {
      id: "defaults",

      title: "Global Defaults",

      icon: SlidersHorizontal,

      items: [
        {
          id: "default-values",

          title: "Default Values",

          href: `${platformRoutes.settings}/defaults`,

          icon: Sliders,
        },

        {
          id: "system-preferences",

          title: "System Preferences",

          href: `${platformRoutes.settings}/preferences`,

          icon: Settings2,
        },
      ],
    },

    {
      id: "advanced",

      title: "Advanced",

      icon: Wrench,

      items: [
        {
          id: "experimental-features",

          title: "Experimental Features",

          href: `${platformRoutes.settings}/experimental`,

          icon: FlaskConical,
        },

        {
          id: "developer-options",

          title: "Developer Options",

          href: `${platformRoutes.settings}/developer`,

          icon: Code2,
        },

        {
          id: "platform-license",

          title: "Platform License",

          href: `${platformRoutes.settings}/license`,

          icon: KeyRound,
        },
      ],
    },
  ],
};
