import {
  Boxes,
  Component,
  LayoutPanelLeft,
  Puzzle,
  Workflow,
  Box,
  Boxes as SubModulesIcon,
  Sparkles,
  Flag,
  PanelLeft,
  Layers3,
  ArrowUpDown,
  ClipboardCheck,
  Bot,
  LayoutGrid,
  Blocks,
  Plug,
  Store,
  PackageCheck,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const platformManagementNavigation: NavigationGroup = {
  id: "platform-management",

  title: "Platform Management",

  sections: [
    {
      id: "module-management",

      title: "Module Management",

      icon: Boxes,

      items: [
        {
          id: "modules",

          title: "Modules",

          href: `${platformRoutes.platform}/modules`,

          icon: Box,
        },

        {
          id: "sub-modules",

          title: "Sub Modules",

          href: `${platformRoutes.platform}/sub-modules`,

          icon: SubModulesIcon,
        },

        {
          id: "features",

          title: "Features",

          href: `${platformRoutes.platform}/features`,

          icon: Sparkles,
        },

        {
          id: "feature-flags",

          title: "Feature Flags",

          href: `${platformRoutes.platform}/feature-flags`,

          icon: Flag,
        },
      ],
    },

    {
      id: "navigation-management",

      title: "Navigation Management",

      icon: LayoutPanelLeft,

      items: [
        {
          id: "sidebar-navigation",

          title: "Sidebar Navigation",

          href: `${platformRoutes.platform}/navigation/sidebar`,

          icon: PanelLeft,
        },

        {
          id: "menu-groups",

          title: "Menu Groups",

          href: `${platformRoutes.platform}/navigation/groups`,

          icon: Layers3,
        },

        {
          id: "menu-order",

          title: "Menu Ordering",

          href: `${platformRoutes.platform}/navigation/order`,

          icon: ArrowUpDown,
        },
      ],
    },

    {
      id: "workflow-management",

      title: "Workflow Management",

      icon: Workflow,

      items: [
        {
          id: "approval-workflows",

          title: "Approval Workflows",

          href: `${platformRoutes.platform}/workflows`,

          icon: ClipboardCheck,
        },

        {
          id: "automation-rules",

          title: "Automation Rules",

          href: `${platformRoutes.platform}/automation`,

          icon: Bot,
        },
      ],
    },

    {
      id: "platform-components",

      title: "Platform Components",

      icon: Component,

      items: [
        {
          id: "widgets",

          title: "Widgets",

          href: `${platformRoutes.platform}/widgets`,

          icon: LayoutGrid,
        },

        {
          id: "global-components",

          title: "Global Components",

          href: `${platformRoutes.platform}/components`,

          icon: Component,
        },

        {
          id: "extensions",

          title: "Extensions",

          href: `${platformRoutes.platform}/extensions`,

          icon: Blocks,
        },

        {
          id: "plugins",

          title: "Plugins",

          href: `${platformRoutes.platform}/plugins`,

          icon: Plug,
        },
      ],
    },

    {
      id: "integration-marketplace",

      title: "Marketplace",

      icon: Puzzle,

      items: [
        {
          id: "marketplace",

          title: "Marketplace",

          href: `${platformRoutes.platform}/marketplace`,

          icon: Store,
        },

        {
          id: "installed-apps",

          title: "Installed Apps",

          href: `${platformRoutes.platform}/installed-apps`,

          icon: PackageCheck,
        },
      ],
    },
  ],
};
