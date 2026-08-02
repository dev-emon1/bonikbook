import {
  CreditCard,
  Globe,
  Link2,
  Mail,
  MessageSquare,
  Puzzle,
  ShieldCheck,
  Webhook,
  WalletCards,
  HandCoins,
  Send,
  MessageCircle,
  MailCheck,
  Cloud,
  Database,
  Image,
  AppWindow,
  Store,
  Settings2,
  KeyRound,
  Shield,
  Building2,
  Boxes,
  Calculator,
  ShoppingCart,
  FileText,
  ScrollText,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const integrationsNavigation: NavigationGroup = {
  id: "integrations",

  title: "Integrations",

  sections: [
    {
      id: "payment-integrations",

      title: "Payment Gateways",

      icon: CreditCard,

      items: [
        {
          id: "payment-providers",

          title: "Payment Providers",

          href: `${platformRoutes.integrations}/payments`,

          icon: WalletCards,
        },

        {
          id: "payment-methods",

          title: "Payment Methods",

          href: `${platformRoutes.integrations}/payment-methods`,

          icon: HandCoins,
        },

        {
          id: "transaction-webhooks",

          title: "Payment Webhooks",

          href: `${platformRoutes.integrations}/payment-webhooks`,

          icon: Send,
        },
      ],
    },

    {
      id: "communication",

      title: "Communication",

      icon: MessageSquare,

      items: [
        {
          id: "sms-providers",

          title: "SMS Providers",

          href: `${platformRoutes.integrations}/sms`,

          icon: MessageCircle,
        },

        {
          id: "email-providers",

          title: "Email Providers",

          href: `${platformRoutes.integrations}/email`,

          icon: Mail,
        },

        {
          id: "whatsapp",

          title: "WhatsApp",

          href: `${platformRoutes.integrations}/whatsapp`,

          icon: MailCheck,
        },
      ],
    },

    {
      id: "cloud-services",

      title: "Cloud Services",

      icon: Globe,

      items: [
        {
          id: "storage",

          title: "Cloud Storage",

          href: `${platformRoutes.integrations}/storage`,

          icon: Cloud,
        },

        {
          id: "cdn",

          title: "CDN",

          href: `${platformRoutes.integrations}/cdn`,

          icon: Globe,
        },

        {
          id: "media-services",

          title: "Media Services",

          href: `${platformRoutes.integrations}/media`,

          icon: Image,
        },
      ],
    },

    {
      id: "developer",

      title: "Developer",

      icon: Webhook,

      items: [
        {
          id: "webhooks",

          title: "Webhooks",

          href: `${platformRoutes.integrations}/webhooks`,

          icon: Webhook,
        },

        {
          id: "api-clients",

          title: "API Clients",

          href: `${platformRoutes.integrations}/api-clients`,

          icon: AppWindow,
        },

        {
          id: "api-credentials",

          title: "API Credentials",

          href: `${platformRoutes.integrations}/credentials`,

          icon: KeyRound,
        },
      ],
    },

    {
      id: "third-party-apps",

      title: "Third-Party Apps",

      icon: Puzzle,

      items: [
        {
          id: "installed-integrations",

          title: "Installed Apps",

          href: `${platformRoutes.integrations}/installed`,

          icon: Boxes,
        },

        {
          id: "available-integrations",

          title: "Available Apps",

          href: `${platformRoutes.integrations}/marketplace`,

          icon: Store,
        },

        {
          id: "integration-settings",

          title: "Integration Settings",

          href: `${platformRoutes.integrations}/settings`,

          icon: Settings2,
        },
      ],
    },

    {
      id: "identity",

      title: "Identity Providers",

      icon: ShieldCheck,

      items: [
        {
          id: "oauth",

          title: "OAuth Providers",

          href: `${platformRoutes.integrations}/oauth`,

          icon: Shield,
        },

        {
          id: "sso",

          title: "Single Sign-On",

          href: `${platformRoutes.integrations}/sso`,

          icon: ShieldCheck,
        },

        {
          id: "directory-services",

          title: "Directory Services",

          href: `${platformRoutes.integrations}/directory-services`,

          icon: Building2,
        },
      ],
    },

    {
      id: "external-services",

      title: "External Services",

      icon: Link2,

      items: [
        {
          id: "erp-connectors",

          title: "ERP Connectors",

          href: `${platformRoutes.integrations}/erp`,

          icon: Boxes,
        },

        {
          id: "accounting",

          title: "Accounting",

          href: `${platformRoutes.integrations}/accounting`,

          icon: Calculator,
        },

        {
          id: "ecommerce",

          title: "E-Commerce",

          href: `${platformRoutes.integrations}/ecommerce`,

          icon: ShoppingCart,
        },
      ],
    },

    {
      id: "templates",

      title: "Templates",

      icon: Mail,

      items: [
        {
          id: "email-templates",

          title: "Email Templates",

          href: `${platformRoutes.integrations}/email-templates`,

          icon: FileText,
        },

        {
          id: "sms-templates",

          title: "SMS Templates",

          href: `${platformRoutes.integrations}/sms-templates`,

          icon: ScrollText,
        },
      ],
    },
  ],
};
