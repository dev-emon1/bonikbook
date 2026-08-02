import {
  Banknote,
  Building2,
  CreditCard,
  Package,
  Users,
  UserPlus,
  Clock3,
  BadgeCheck,
  UserX,
  Archive,
  Boxes,
  WandSparkles,
  Copy,
  BadgeDollarSign,
  Receipt,
  FileText,
  RotateCcw,
  Landmark,
  Percent,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const businessManagementNavigation: NavigationGroup = {
  id: "business-management",

  title: "Business Management",

  sections: [
    {
      id: "tenant-management",

      title: "Tenant Management",

      icon: Building2,

      items: [
        {
          id: "all-tenants",

          title: "All Tenants",

          href: platformRoutes.tenants,

          icon: Users,
        },

        {
          id: "tenant-onboarding",

          title: "Tenant Onboarding",

          href: `${platformRoutes.tenants}/onboarding`,

          icon: UserPlus,
        },

        {
          id: "pending-tenants",

          title: "Pending Approval",

          href: `${platformRoutes.tenants}/pending`,

          icon: Clock3,
        },

        {
          id: "active-tenants",

          title: "Active Tenants",

          href: `${platformRoutes.tenants}/active`,

          icon: BadgeCheck,
        },

        {
          id: "suspended-tenants",

          title: "Suspended Tenants",

          href: `${platformRoutes.tenants}/suspended`,

          icon: UserX,
        },

        {
          id: "archived-tenants",

          title: "Archived Tenants",

          href: `${platformRoutes.tenants}/archived`,

          icon: Archive,
        },
      ],
    },

    {
      id: "package-management",

      title: "Package Management",

      icon: Package,

      items: [
        {
          id: "all-packages",

          title: "All Packages",

          href: platformRoutes.packages,

          icon: Boxes,
        },

        {
          id: "package-builder",

          title: "Package Builder",

          href: `${platformRoutes.packages}/builder`,

          icon: WandSparkles,
        },

        {
          id: "package-templates",

          title: "Package Templates",

          href: `${platformRoutes.packages}/templates`,

          icon: Copy,
        },

        {
          id: "package-pricing",

          title: "Pricing Plans",

          href: `${platformRoutes.packages}/pricing`,

          icon: BadgeDollarSign,
        },
      ],
    },

    {
      id: "subscription-management",

      title: "Subscription Management",

      icon: CreditCard,

      items: [
        {
          id: "subscriptions",

          title: "All Subscriptions",

          href: platformRoutes.subscriptions,

          icon: CreditCard,
        },

        {
          id: "trials",

          title: "Trial Subscriptions",

          href: `${platformRoutes.subscriptions}/trials`,

          icon: Clock3,
        },

        {
          id: "expiring",

          title: "Expiring Soon",

          href: `${platformRoutes.subscriptions}/expiring`,

          icon: Clock3,
        },

        {
          id: "renewals",

          title: "Renewals",

          href: `${platformRoutes.subscriptions}/renewals`,

          icon: RotateCcw,
        },

        {
          id: "cancelled",

          title: "Cancelled",

          href: `${platformRoutes.subscriptions}/cancelled`,

          icon: UserX,
        },
      ],
    },

    {
      id: "billing-finance",

      title: "Billing & Finance",

      icon: Banknote,

      items: [
        {
          id: "transactions",

          title: "Transactions",

          href: platformRoutes.billing,

          icon: Receipt,
        },

        {
          id: "invoices",

          title: "Invoices",

          href: `${platformRoutes.billing}/invoices`,

          icon: FileText,
        },

        {
          id: "refunds",

          title: "Refund Requests",

          href: `${platformRoutes.billing}/refunds`,

          icon: RotateCcw,
        },

        {
          id: "payment-gateways",

          title: "Payment Gateways",

          href: `${platformRoutes.billing}/payment-gateways`,

          icon: Landmark,
        },

        {
          id: "tax-settings",

          title: "Tax Settings",

          href: `${platformRoutes.billing}/tax`,

          icon: Percent,
        },
      ],
    },
  ],
};
