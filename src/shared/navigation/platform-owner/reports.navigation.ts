import {
  BarChart3,
  Building2,
  ChartColumn,
  CreditCard,
  DollarSign,
  FileSpreadsheet,
  Package,
  ShieldCheck,
  TrendingUp,
  LayoutDashboard,
  Briefcase,
  Gauge,
  Users,
  Activity,
  ChartNoAxesCombined,
  BadgeDollarSign,
  CircleDollarSign,
  Receipt,
  RotateCcw,
  Boxes,
  Sparkles,
  Cable,
  Shield,
  ShieldAlert,
  CalendarClock,
  History,
  FileChartColumn,
  PieChart,
  PanelsTopLeft,
  FileBarChart,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const reportsNavigation: NavigationGroup = {
  id: "reports",

  title: "Reports & Analytics",

  sections: [
    {
      id: "executive-reports",

      title: "Executive Reports",

      icon: TrendingUp,

      items: [
        {
          id: "executive-dashboard",

          title: "Executive Dashboard",

          href: `${platformRoutes.reports}/executive-dashboard`,

          icon: LayoutDashboard,
        },

        {
          id: "business-overview",

          title: "Business Overview",

          href: `${platformRoutes.reports}/business-overview`,

          icon: Briefcase,
        },

        {
          id: "kpi-dashboard",

          title: "KPI Dashboard",

          href: `${platformRoutes.reports}/kpi-dashboard`,

          icon: Gauge,
        },
      ],
    },

    {
      id: "tenant-analytics",

      title: "Tenant Analytics",

      icon: Building2,

      items: [
        {
          id: "tenant-growth",

          title: "Tenant Growth",

          href: `${platformRoutes.reports}/tenant-growth`,

          icon: TrendingUp,
        },

        {
          id: "tenant-activity",

          title: "Tenant Activity",

          href: `${platformRoutes.reports}/tenant-activity`,

          icon: Activity,
        },

        {
          id: "tenant-usage",

          title: "Tenant Usage",

          href: `${platformRoutes.reports}/tenant-usage`,

          icon: Users,
        },
      ],
    },

    {
      id: "subscription-analytics",

      title: "Subscription Analytics",

      icon: CreditCard,

      items: [
        {
          id: "subscription-overview",

          title: "Subscription Overview",

          href: `${platformRoutes.reports}/subscription-overview`,

          icon: CreditCard,
        },

        {
          id: "trial-conversion",

          title: "Trial Conversion",

          href: `${platformRoutes.reports}/trial-conversion`,

          icon: ChartNoAxesCombined,
        },

        {
          id: "churn-analysis",

          title: "Churn Analysis",

          href: `${platformRoutes.reports}/churn-analysis`,

          icon: BarChart3,
        },

        {
          id: "renewal-analysis",

          title: "Renewal Analysis",

          href: `${platformRoutes.reports}/renewal-analysis`,

          icon: RotateCcw,
        },
      ],
    },

    {
      id: "financial-analytics",

      title: "Financial Analytics",

      icon: DollarSign,

      items: [
        {
          id: "revenue",

          title: "Revenue Reports",

          href: `${platformRoutes.reports}/revenue`,

          icon: BadgeDollarSign,
        },

        {
          id: "payments",

          title: "Payment Reports",

          href: `${platformRoutes.reports}/payments`,

          icon: CircleDollarSign,
        },

        {
          id: "refunds",

          title: "Refund Reports",

          href: `${platformRoutes.reports}/refunds`,

          icon: Receipt,
        },
      ],
    },

    {
      id: "platform-insights",

      title: "Platform Insights",

      icon: Package,

      items: [
        {
          id: "module-usage",

          title: "Module Usage",

          href: `${platformRoutes.reports}/module-usage`,

          icon: Boxes,
        },

        {
          id: "feature-usage",

          title: "Feature Usage",

          href: `${platformRoutes.reports}/feature-usage`,

          icon: Sparkles,
        },

        {
          id: "api-usage",

          title: "API Usage",

          href: `${platformRoutes.reports}/api-usage`,

          icon: Cable,
        },
      ],
    },

    {
      id: "security-reports",

      title: "Security Reports",

      icon: ShieldCheck,

      items: [
        {
          id: "audit-reports",

          title: "Audit Reports",

          href: `${platformRoutes.reports}/audit`,

          icon: Shield,
        },

        {
          id: "security-events",

          title: "Security Events",

          href: `${platformRoutes.reports}/security-events`,

          icon: ShieldAlert,
        },
      ],
    },

    {
      id: "exports",

      title: "Export Center",

      icon: FileSpreadsheet,

      items: [
        {
          id: "scheduled-exports",

          title: "Scheduled Exports",

          href: `${platformRoutes.reports}/scheduled-exports`,

          icon: CalendarClock,
        },

        {
          id: "export-history",

          title: "Export History",

          href: `${platformRoutes.reports}/export-history`,

          icon: History,
        },

        {
          id: "custom-reports",

          title: "Custom Reports",

          href: `${platformRoutes.reports}/custom-reports`,

          icon: FileChartColumn,
        },
      ],
    },

    {
      id: "visualization",

      title: "Charts & Insights",

      icon: ChartColumn,

      items: [
        {
          id: "charts",

          title: "Charts",

          href: `${platformRoutes.reports}/charts`,

          icon: PieChart,
        },

        {
          id: "saved-dashboards",

          title: "Saved Dashboards",

          href: `${platformRoutes.reports}/saved-dashboards`,

          icon: PanelsTopLeft,
        },

        {
          id: "report-builder",

          title: "Report Builder",

          href: `${platformRoutes.reports}/builder`,

          icon: FileBarChart,
        },
      ],
    },
  ],
};
