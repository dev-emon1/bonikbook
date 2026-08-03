import type {
  LiveActivityItem,
  LoginSession,
  OnlineUser,
  QueueItem,
  SecurityEvent,
} from "../types";

export const liveActivities: LiveActivityItem[] = [
  {
    id: "1",
    title: "Organization Created",
    description: "ABC Fashion Ltd has been onboarded.",
    actor: "Super Admin",
    organization: "BonikBook",
    type: "organization",
    severity: "success",
    createdAt: "2026-08-03T10:10:00Z",
  },

  {
    id: "2",
    title: "Subscription Upgraded",
    description: "Gold package upgraded to Enterprise.",
    actor: "Sales Team",
    organization: "Gold Corp",
    type: "subscription",
    severity: "info",
    createdAt: "2026-08-03T10:18:00Z",
  },

  {
    id: "3",
    title: "Payment Received",
    description: "Monthly subscription payment completed.",
    actor: "SSLCommerz",
    organization: "Dream IT",
    type: "billing",
    severity: "success",
    createdAt: "2026-08-03T10:24:00Z",
  },

  {
    id: "4",
    title: "Inventory Imported",
    description: "2,850 products imported successfully.",
    actor: "Inventory Manager",
    organization: "ABC Fashion",
    type: "inventory",
    severity: "success",
    createdAt: "2026-08-03T10:28:00Z",
  },

  {
    id: "5",
    title: "Failed Login Attempt",
    description: "Multiple failed login attempts detected.",
    actor: "Security Service",
    organization: "Gold Corp",
    type: "authentication",
    severity: "warning",
    createdAt: "2026-08-03T10:31:00Z",
  },

  {
    id: "6",
    title: "Sales Order Created",
    description: "New sales invoice generated.",
    actor: "Sales Executive",
    organization: "Easy ERP",
    type: "sales",
    severity: "info",
    createdAt: "2026-08-03T10:35:00Z",
  },
];

export const onlineUsers: OnlineUser[] = [
  {
    id: "1",
    name: "Super Admin",
    organization: "BonikBook",
    role: "Platform Owner",
    lastSeen: "Active now",
    status: "online",
  },

  {
    id: "2",
    name: "Rahim Ahmed",
    organization: "Gold Corp",
    role: "Administrator",
    lastSeen: "Active now",
    status: "online",
  },

  {
    id: "3",
    name: "Karim Hasan",
    organization: "ABC Fashion",
    role: "Inventory Manager",
    lastSeen: "2 minutes ago",
    status: "away",
  },

  {
    id: "4",
    name: "John Smith",
    organization: "Dream IT",
    role: "Accountant",
    lastSeen: "5 minutes ago",
    status: "online",
  },
];

export const loginSessions: LoginSession[] = [
  {
    id: "1",
    user: "Super Admin",
    organization: "BonikBook",
    ipAddress: "103.102.22.10",
    device: "Windows 11",
    browser: "Chrome",
    location: "Dhaka",
    status: "active",
    loginAt: "2026-08-03T09:12:00Z",
  },

  {
    id: "2",
    user: "Rahim Ahmed",
    organization: "Gold Corp",
    ipAddress: "103.14.81.2",
    device: "macOS",
    browser: "Edge",
    location: "Chattogram",
    status: "active",
    loginAt: "2026-08-03T08:42:00Z",
  },

  {
    id: "3",
    user: "John Smith",
    organization: "Dream IT",
    ipAddress: "202.52.14.98",
    device: "Ubuntu",
    browser: "Firefox",
    location: "Khulna",
    status: "expired",
    loginAt: "2026-08-03T07:20:00Z",
  },
];

export const securityEvents: SecurityEvent[] = [
  {
    id: "1",
    title: "Failed Login Attempts",
    description: "Five consecutive failed logins detected.",
    severity: "high",
    createdAt: "2026-08-03T10:05:00Z",
  },

  {
    id: "2",
    title: "Password Changed",
    description: "Administrator updated password.",
    severity: "low",
    createdAt: "2026-08-03T09:52:00Z",
  },

  {
    id: "3",
    title: "Permission Updated",
    description: "Role permissions modified.",
    severity: "medium",
    createdAt: "2026-08-03T09:44:00Z",
  },

  {
    id: "4",
    title: "API Token Generated",
    description: "New API token created.",
    severity: "critical",
    createdAt: "2026-08-03T09:36:00Z",
  },
];

export const systemQueues: QueueItem[] = [
  {
    id: "1",
    name: "Email Queue",
    pending: 18,
    processing: 4,
    failed: 0,
    status: "healthy",
  },

  {
    id: "2",
    name: "Notification Queue",
    pending: 42,
    processing: 7,
    failed: 1,
    status: "warning",
  },

  {
    id: "3",
    name: "Export Queue",
    pending: 5,
    processing: 2,
    failed: 0,
    status: "healthy",
  },

  {
    id: "4",
    name: "Import Queue",
    pending: 26,
    processing: 3,
    failed: 6,
    status: "critical",
  },
];
