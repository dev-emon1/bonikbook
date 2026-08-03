import { Activity, Cpu, Database, HardDrive } from "lucide-react";

import type {
  BackgroundService,
  HealthStat,
  HealthTimelineItem,
  ResourceUsage,
  ServiceStatus,
} from "../types";

export const healthStats: HealthStat[] = [
  {
    id: "cpu",
    title: "CPU Usage",
    value: 42,
    unit: "%",
    change: -3.2,
    trend: "down",
    icon: Cpu,
    color: "primary",
  },

  {
    id: "memory",
    title: "Memory Usage",
    value: 61,
    unit: "%",
    change: 4.5,
    trend: "up",
    icon: Activity,
    color: "info",
  },

  {
    id: "storage",
    title: "Storage Used",
    value: 73,
    unit: "%",
    change: 2.1,
    trend: "up",
    icon: HardDrive,
    color: "warning",
  },

  {
    id: "api",
    title: "API Response",
    value: 148,
    unit: "ms",
    change: -12.6,
    trend: "down",
    icon: Database,
    color: "success",
  },
];

export const resourceUsage: ResourceUsage[] = [
  {
    time: "09:00",
    cpu: 28,
    memory: 49,
    disk: 71,
    network: 24,
  },
  {
    time: "10:00",
    cpu: 35,
    memory: 54,
    disk: 72,
    network: 31,
  },
  {
    time: "11:00",
    cpu: 42,
    memory: 58,
    disk: 72,
    network: 36,
  },
  {
    time: "12:00",
    cpu: 38,
    memory: 61,
    disk: 73,
    network: 40,
  },
  {
    time: "13:00",
    cpu: 45,
    memory: 63,
    disk: 73,
    network: 46,
  },
  {
    time: "14:00",
    cpu: 40,
    memory: 60,
    disk: 73,
    network: 39,
  },
  {
    time: "15:00",
    cpu: 42,
    memory: 61,
    disk: 73,
    network: 35,
  },
];

export const servicesStatus: ServiceStatus[] = [
  {
    id: "api",
    name: "API Gateway",
    description: "Handles all API requests",
    uptime: 99.99,
    responseTime: 148,
    status: "healthy",
  },

  {
    id: "database",
    name: "PostgreSQL",
    description: "Primary relational database",
    uptime: 99.95,
    responseTime: 18,
    status: "healthy",
  },

  {
    id: "redis",
    name: "Redis Cache",
    description: "Cache & session storage",
    uptime: 99.82,
    responseTime: 5,
    status: "healthy",
  },

  {
    id: "queue",
    name: "Queue Worker",
    description: "Background jobs",
    uptime: 98.12,
    responseTime: 0,
    status: "warning",
  },

  {
    id: "mail",
    name: "Mail Service",
    description: "SMTP provider",
    uptime: 92.36,
    responseTime: 0,
    status: "critical",
  },
];

export const backgroundServices: BackgroundService[] = [
  {
    id: "imports",
    name: "Import Queue",
    description: "CSV Import Worker",
    running: 3,
    queued: 12,
    failed: 0,
    status: "running",
  },

  {
    id: "exports",
    name: "Export Queue",
    description: "Report Generator",
    running: 1,
    queued: 4,
    failed: 0,
    status: "running",
  },

  {
    id: "invoice",
    name: "Invoice Generator",
    description: "Invoice Processing",
    running: 0,
    queued: 0,
    failed: 0,
    status: "idle",
  },

  {
    id: "email",
    name: "Email Sender",
    description: "SMTP Queue",
    running: 2,
    queued: 38,
    failed: 4,
    status: "failed",
  },

  {
    id: "backup",
    name: "Backup Service",
    description: "Nightly Backup",
    running: 0,
    queued: 0,
    failed: 0,
    status: "stopped",
  },
];

export const healthTimeline: HealthTimelineItem[] = [
  {
    id: "1",
    title: "Database Restarted",
    description: "PostgreSQL restarted successfully.",
    severity: "success",
    createdAt: "2026-08-03T10:05:00Z",
  },

  {
    id: "2",
    title: "Redis Cache Flushed",
    description: "Cache cleared after deployment.",
    severity: "info",
    createdAt: "2026-08-03T10:18:00Z",
  },

  {
    id: "3",
    title: "Queue Worker Warning",
    description: "Job processing delay detected.",
    severity: "warning",
    createdAt: "2026-08-03T10:42:00Z",
  },

  {
    id: "4",
    title: "SMTP Connection Failed",
    description: "Unable to reach mail provider.",
    severity: "danger",
    createdAt: "2026-08-03T11:08:00Z",
  },

  {
    id: "5",
    title: "Nightly Backup Completed",
    description: "Full database backup completed.",
    severity: "success",
    createdAt: "2026-08-03T11:30:00Z",
  },
];
