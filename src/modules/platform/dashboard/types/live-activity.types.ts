export interface LiveActivityItem {
  id: string;
  title: string;
  description: string;
  actor: string;
  organization: string;

  type:
    | "authentication"
    | "organization"
    | "subscription"
    | "billing"
    | "inventory"
    | "sales"
    | "system";

  severity: "info" | "success" | "warning" | "danger";

  createdAt: string;
}

export interface OnlineUser {
  id: string;
  name: string;
  organization: string;
  role: string;
  avatar?: string;
  lastSeen: string;

  status: "online" | "away" | "offline";
}

export interface LoginSession {
  id: string;
  user: string;
  organization: string;
  ipAddress: string;
  device: string;
  browser: string;
  location: string;

  status: "active" | "expired";

  loginAt: string;
}

export interface SecurityEvent {
  id: string;
  title: string;
  description: string;

  severity: "low" | "medium" | "high" | "critical";

  createdAt: string;
}

export interface QueueItem {
  id: string;
  name: string;
  pending: number;
  processing: number;
  failed: number;

  status: "healthy" | "warning" | "critical";
}
