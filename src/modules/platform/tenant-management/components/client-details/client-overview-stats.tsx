import {
  Building2,
  Database,
  FolderTree,
  HardDrive,
  Users,
  UserRound,
} from "lucide-react";

import { StatsGrid } from "@/shared/components/platform/stats";

import type { StatItem } from "@/shared/components/platform/stats";

const overviewStats: StatItem[] = [
  {
    id: "employees",
    title: "Employees",
    value: "1,240",
    description: "Registered employees",
    icon: UserRound,
    trend: {
      value: "+18",
      direction: "up",
    },
  },

  {
    id: "departments",
    title: "Departments",
    value: "12",
    description: "Active departments",
    icon: FolderTree,
  },

  {
    id: "branches",
    title: "Branches",
    value: "8",
    description: "Registered branches",
    icon: Building2,
  },

  {
    id: "storage",
    title: "Storage",
    value: "42 GB",
    description: "Used storage",
    icon: HardDrive,
  },

  {
    id: "subscription",
    title: "Subscription",
    value: "Enterprise",
    description: "Current package",
    icon: Database,
  },

  {
    id: "users",
    title: "Active Users",
    value: "186",
    description: "Currently online",
    icon: Users,
    trend: {
      value: "+12",
      direction: "up",
    },
  },
];

export function ClientOverviewStats() {
  return <StatsGrid items={overviewStats} />;
}
