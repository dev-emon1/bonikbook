import {
  BellRing,
  BookOpen,
  ClipboardList,
  LifeBuoy,
  MessageCircleMore,
  MessagesSquare,
  Rocket,
  Sparkles,
  Ticket,
  CircleDot,
  UserCheck,
  CheckCheck,
  MessageCircle,
  History,
  Megaphone,
  FileText,
  FolderOpen,
  CircleHelp,
  MessageSquareText,
  Lightbulb,
  Bug,
  Wrench,
  ScrollText,
  ClipboardCheck,
  Activity,
  Bot,
  GraduationCap,
  TimerReset,
  Users,
  ChartColumn,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const supportNavigation: NavigationGroup = {
  id: "support-center",

  title: "Support Center",

  sections: [
    {
      id: "ticket-management",

      title: "Ticket Management",

      icon: LifeBuoy,

      items: [
        {
          id: "all-tickets",

          title: "All Tickets",

          href: `${platformRoutes.support}/tickets`,

          icon: Ticket,
        },

        {
          id: "open-tickets",

          title: "Open Tickets",

          href: `${platformRoutes.support}/tickets/open`,

          icon: CircleDot,
        },

        {
          id: "assigned-tickets",

          title: "Assigned Tickets",

          href: `${platformRoutes.support}/tickets/assigned`,

          icon: UserCheck,
        },

        {
          id: "closed-tickets",

          title: "Closed Tickets",

          href: `${platformRoutes.support}/tickets/closed`,

          icon: CheckCheck,
        },
      ],
    },

    {
      id: "customer-communication",

      title: "Customer Communication",

      icon: MessageCircleMore,

      items: [
        {
          id: "live-chat",

          title: "Live Chat",

          href: `${platformRoutes.support}/live-chat`,

          icon: MessageCircle,
        },

        {
          id: "conversation-history",

          title: "Conversation History",

          href: `${platformRoutes.support}/conversations`,

          icon: History,
        },

        {
          id: "broadcast-messages",

          title: "Broadcast Messages",

          href: `${platformRoutes.support}/broadcast`,

          icon: Megaphone,
        },
      ],
    },

    {
      id: "knowledge-base",

      title: "Knowledge Base",

      icon: BookOpen,

      items: [
        {
          id: "articles",

          title: "Articles",

          href: `${platformRoutes.support}/articles`,

          icon: FileText,
        },

        {
          id: "categories",

          title: "Categories",

          href: `${platformRoutes.support}/categories`,

          icon: FolderOpen,
        },

        {
          id: "faqs",

          title: "FAQs",

          href: `${platformRoutes.support}/faqs`,

          icon: CircleHelp,
        },
      ],
    },

    {
      id: "customer-feedback",

      title: "Customer Feedback",

      icon: MessagesSquare,

      items: [
        {
          id: "feedback",

          title: "Feedback",

          href: `${platformRoutes.support}/feedback`,

          icon: MessageSquareText,
        },

        {
          id: "feature-requests",

          title: "Feature Requests",

          href: `${platformRoutes.support}/feature-requests`,

          icon: Lightbulb,
        },

        {
          id: "bug-reports",

          title: "Bug Reports",

          href: `${platformRoutes.support}/bug-reports`,

          icon: Bug,
        },
      ],
    },

    {
      id: "announcements",

      title: "Announcements",

      icon: BellRing,

      items: [
        {
          id: "system-announcements",

          title: "System Announcements",

          href: `${platformRoutes.support}/announcements`,

          icon: BellRing,
        },

        {
          id: "maintenance-notices",

          title: "Maintenance Notices",

          href: `${platformRoutes.support}/maintenance`,

          icon: Wrench,
        },

        {
          id: "release-notes",

          title: "Release Notes",

          href: `${platformRoutes.support}/release-notes`,

          icon: ScrollText,
        },
      ],
    },

    {
      id: "customer-success",

      title: "Customer Success",

      icon: Rocket,

      items: [
        {
          id: "onboarding-checklists",

          title: "Onboarding Checklists",

          href: `${platformRoutes.support}/onboarding`,

          icon: ClipboardCheck,
        },

        {
          id: "health-score",

          title: "Customer Health Score",

          href: `${platformRoutes.support}/health-score`,

          icon: Activity,
        },

        {
          id: "adoption",

          title: "Feature Adoption",

          href: `${platformRoutes.support}/adoption`,

          icon: Rocket,
        },
      ],
    },

    {
      id: "ai-assistant",

      title: "AI Assistant",

      icon: Sparkles,

      items: [
        {
          id: "ai-chat",

          title: "AI Support",

          href: `${platformRoutes.support}/ai-support`,

          icon: Bot,
        },

        {
          id: "ai-training",

          title: "AI Training",

          href: `${platformRoutes.support}/ai-training`,

          icon: GraduationCap,
        },
      ],
    },

    {
      id: "operations",

      title: "Operations",

      icon: ClipboardList,

      items: [
        {
          id: "sla-management",

          title: "SLA Management",

          href: `${platformRoutes.support}/sla`,

          icon: TimerReset,
        },

        {
          id: "support-teams",

          title: "Support Teams",

          href: `${platformRoutes.support}/teams`,

          icon: Users,
        },

        {
          id: "agent-performance",

          title: "Agent Performance",

          href: `${platformRoutes.support}/performance`,

          icon: ChartColumn,
        },
      ],
    },
  ],
};
