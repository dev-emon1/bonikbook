import type { LucideIcon } from "lucide-react";

export interface HealthStat {
  id: string;
  title: string;
  value: number;
  unit: "%" | "ms" | "GB" | "MB" | "TB";
  change: number;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
  color: "primary" | "success" | "warning" | "danger" | "info";
}

export interface ResourceUsage {
  time: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
}

export interface ServiceStatus {
  id: string;
  name: string;
  description: string;
  uptime: number;
  responseTime: number;
  status: "healthy" | "warning" | "critical" | "offline";
}

export interface BackgroundService {
  id: string;
  name: string;
  description: string;
  running: number;
  queued: number;
  failed: number;
  status: "running" | "idle" | "stopped" | "failed";
}

export interface HealthTimelineItem {
  id: string;
  title: string;
  description: string;
  severity: "info" | "success" | "warning" | "danger";
  createdAt: string;
}
