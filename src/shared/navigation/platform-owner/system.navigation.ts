import {
  Activity,
  Archive,
  Bell,
  Database,
  HardDrive,
  Mail,
  Server,
  Settings2,
  ShieldAlert,
  TimerReset,
  HeartPulse,
  Gauge,
  Cpu,
  Blocks,
  ListOrdered,
  CalendarClock,
  Timer,
  FolderOpen,
  Image,
  Trash2,
  DatabaseBackup,
  RotateCcw,
  BellRing,
  Send,
  Mailbox,
  Wrench,
  BrushCleaning,
  Rocket,
  FileText,
  TriangleAlert,
  ShieldCheck,
  Cog,
  SlidersHorizontal,
  Flag,
  FolderArchive,
  ArchiveRestore,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const systemNavigation: NavigationGroup = {
  id: "system-administration",

  title: "System Administration",

  sections: [
    {
      id: "system-monitoring",

      title: "System Monitoring",

      icon: Activity,

      items: [
        {
          id: "system-health",

          title: "System Health",

          href: `${platformRoutes.system}/health`,

          icon: HeartPulse,
        },

        {
          id: "performance-monitor",

          title: "Performance Monitor",

          href: `${platformRoutes.system}/performance`,

          icon: Gauge,
        },

        {
          id: "resource-usage",

          title: "Resource Usage",

          href: `${platformRoutes.system}/resources`,

          icon: Cpu,
        },

        {
          id: "service-status",

          title: "Service Status",

          href: `${platformRoutes.system}/services`,

          icon: Blocks,
        },
      ],
    },

    {
      id: "background-services",

      title: "Background Services",

      icon: Server,

      items: [
        {
          id: "job-queue",

          title: "Job Queue",

          href: `${platformRoutes.system}/queue`,

          icon: ListOrdered,
        },

        {
          id: "scheduler",

          title: "Task Scheduler",

          href: `${platformRoutes.system}/scheduler`,

          icon: CalendarClock,
        },

        {
          id: "cron-jobs",

          title: "Cron Jobs",

          href: `${platformRoutes.system}/cron`,

          icon: Timer,
        },
      ],
    },

    {
      id: "storage",

      title: "Storage Management",

      icon: HardDrive,

      items: [
        {
          id: "file-storage",

          title: "File Storage",

          href: `${platformRoutes.system}/storage`,

          icon: FolderOpen,
        },

        {
          id: "media-library",

          title: "Media Library",

          href: `${platformRoutes.system}/media`,

          icon: Image,
        },

        {
          id: "storage-cleanup",

          title: "Storage Cleanup",

          href: `${platformRoutes.system}/cleanup`,

          icon: Trash2,
        },
      ],
    },

    {
      id: "database",

      title: "Database",

      icon: Database,

      items: [
        {
          id: "database-status",

          title: "Database Status",

          href: `${platformRoutes.system}/database`,

          icon: Database,
        },

        {
          id: "database-backups",

          title: "Backups",

          href: `${platformRoutes.system}/backups`,

          icon: DatabaseBackup,
        },

        {
          id: "restore",

          title: "Restore",

          href: `${platformRoutes.system}/restore`,

          icon: RotateCcw,
        },
      ],
    },

    {
      id: "notifications",

      title: "Notification Services",

      icon: Bell,

      items: [
        {
          id: "notification-queue",

          title: "Notification Queue",

          href: `${platformRoutes.system}/notifications`,

          icon: BellRing,
        },

        {
          id: "push-notifications",

          title: "Push Notifications",

          href: `${platformRoutes.system}/push`,

          icon: Send,
        },
      ],
    },

    {
      id: "mail-services",

      title: "Mail Services",

      icon: Mail,

      items: [
        {
          id: "email-queue",

          title: "Email Queue",

          href: `${platformRoutes.system}/emails`,

          icon: Mailbox,
        },

        {
          id: "smtp-settings",

          title: "SMTP Settings",

          href: `${platformRoutes.system}/smtp`,

          icon: Settings2,
        },

        {
          id: "email-templates",

          title: "Email Templates",

          href: `${platformRoutes.system}/email-templates`,

          icon: FileText,
        },
      ],
    },

    {
      id: "maintenance",

      title: "Maintenance",

      icon: TimerReset,

      items: [
        {
          id: "maintenance-mode",

          title: "Maintenance Mode",

          href: `${platformRoutes.system}/maintenance`,

          icon: Wrench,
        },

        {
          id: "cache-management",

          title: "Cache Management",

          href: `${platformRoutes.system}/cache`,

          icon: BrushCleaning,
        },

        {
          id: "system-optimization",

          title: "System Optimization",

          href: `${platformRoutes.system}/optimization`,

          icon: Rocket,
        },
      ],
    },

    {
      id: "security",

      title: "Security",

      icon: ShieldAlert,

      items: [
        {
          id: "system-logs",

          title: "System Logs",

          href: `${platformRoutes.system}/logs`,

          icon: FileText,
        },

        {
          id: "error-logs",

          title: "Error Logs",

          href: `${platformRoutes.system}/errors`,

          icon: TriangleAlert,
        },

        {
          id: "security-alerts",

          title: "Security Alerts",

          href: `${platformRoutes.system}/security-alerts`,

          icon: ShieldCheck,
        },
      ],
    },

    {
      id: "configuration",

      title: "Configuration",

      icon: Settings2,

      items: [
        {
          id: "environment",

          title: "Environment",

          href: `${platformRoutes.system}/environment`,

          icon: Cog,
        },

        {
          id: "system-settings",

          title: "System Settings",

          href: `${platformRoutes.system}/settings`,

          icon: Settings2,
        },

        {
          id: "feature-config",

          title: "Feature Configuration",

          href: `${platformRoutes.system}/feature-config`,

          icon: SlidersHorizontal,
        },
      ],
    },

    {
      id: "archives",

      title: "Archives",

      icon: Archive,

      items: [
        {
          id: "archived-data",

          title: "Archived Data",

          href: `${platformRoutes.system}/archives`,

          icon: FolderArchive,
        },

        {
          id: "retention-policy",

          title: "Retention Policies",

          href: `${platformRoutes.system}/retention`,

          icon: Flag,
        },
      ],
    },
  ],
};
