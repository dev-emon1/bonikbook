import type { LucideIcon } from "lucide-react";

export type ClientStatus =
  | "pending"
  | "active"
  | "trial"
  | "suspended"
  | "archived";

export type BillingStatus = "paid" | "due" | "overdue";

export interface ClientPackage {
  id: string;

  name: string;

  color?: string;
}

export interface ClientOwner {
  id: string;

  name: string;

  email: string;

  phone?: string;

  avatar?: string;
}

export interface ClientUsage {
  employees: number;

  branches: number;

  storage: number;

  storageLimit: number;
}

export interface ClientSubscription {
  startDate: string;

  expiryDate: string;

  billingStatus: BillingStatus;

  trial: boolean;
}

export interface ClientItem {
  id: string;

  organization: string;

  code: string;

  logo?: string;

  industry: string;

  country: string;

  owner: ClientOwner;

  package: ClientPackage;

  usage: ClientUsage;

  subscription: ClientSubscription;

  status: ClientStatus;

  createdAt: string;
}
