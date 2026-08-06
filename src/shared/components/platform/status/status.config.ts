import {
  AlertTriangle,
  Archive,
  Ban,
  CheckCircle2,
  Clock3,
  FileText,
  Globe,
  PauseCircle,
  ShieldAlert,
  Wallet,
  XCircle,
} from "lucide-react";

import type { PlatformStatus, StatusConfig } from "./status.types";

export const STATUS_CONFIG: Record<PlatformStatus, StatusConfig> = {
  active: {
    label: "Active",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  inactive: {
    label: "Inactive",
    icon: PauseCircle,
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground",
  },

  pending: {
    label: "Pending",
    icon: Clock3,
    className: "bg-warning/10 text-warning border-warning/20",
    dotClassName: "bg-warning",
  },

  trial: {
    label: "Trial",
    icon: Globe,
    className: "bg-info/10 text-info border-info/20",
    dotClassName: "bg-info",
  },

  approved: {
    label: "Approved",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "bg-destructive/10 text-destructive border-destructive/20",
    dotClassName: "bg-destructive",
  },

  suspended: {
    label: "Suspended",
    icon: Ban,
    className: "bg-destructive/10 text-destructive border-destructive/20",
    dotClassName: "bg-destructive",
  },

  archived: {
    label: "Archived",
    icon: Archive,
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground",
  },

  published: {
    label: "Published",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  draft: {
    label: "Draft",
    icon: FileText,
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground",
  },

  paid: {
    label: "Paid",
    icon: Wallet,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  due: {
    label: "Due",
    icon: Clock3,
    className: "bg-warning/10 text-warning border-warning/20",
    dotClassName: "bg-warning",
  },

  overdue: {
    label: "Overdue",
    icon: AlertTriangle,
    className: "bg-destructive/10 text-destructive border-destructive/20",
    dotClassName: "bg-destructive",
  },

  healthy: {
    label: "Healthy",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  warning: {
    label: "Warning",
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning border-warning/20",
    dotClassName: "bg-warning",
  },

  critical: {
    label: "Critical",
    icon: ShieldAlert,
    className: "bg-destructive/10 text-destructive border-destructive/20",
    dotClassName: "bg-destructive",
  },

  online: {
    label: "Online",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  offline: {
    label: "Offline",
    icon: XCircle,
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground",
  },

  enabled: {
    label: "Enabled",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
    dotClassName: "bg-success",
  },

  disabled: {
    label: "Disabled",
    icon: Ban,
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground",
  },
};
