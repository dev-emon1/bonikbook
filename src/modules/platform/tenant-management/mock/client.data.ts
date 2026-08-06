import type { ClientItem } from "../types";

export const clients: ClientItem[] = [
  {
    id: "CL-1001",

    organization: "TechNova Ltd.",

    code: "TNL",

    industry: "Software",

    country: "Bangladesh",

    owner: {
      id: "USR-101",
      name: "Hasan Mahmud",
      email: "hasan@technova.com",
      phone: "+8801711000001",
    },

    package: {
      id: "PKG-4",
      name: "Enterprise",
    },

    usage: {
      employees: 1240,
      branches: 18,
      storage: 312,
      storageLimit: 500,
    },

    subscription: {
      startDate: "2026-01-01",
      expiryDate: "2027-01-01",
      billingStatus: "paid",
      trial: false,
    },

    status: "active",

    createdAt: "2025-11-18",
  },

  {
    id: "CL-1002",

    organization: "Bonik Fashion",

    code: "BFL",

    industry: "Retail",

    country: "Bangladesh",

    owner: {
      id: "USR-102",
      name: "Shakil Ahmed",
      email: "admin@bonikfashion.com",
      phone: "+8801711000002",
    },

    package: {
      id: "PKG-3",
      name: "Business",
    },

    usage: {
      employees: 410,
      branches: 9,
      storage: 98,
      storageLimit: 250,
    },

    subscription: {
      startDate: "2026-03-01",
      expiryDate: "2027-03-01",
      billingStatus: "paid",
      trial: false,
    },

    status: "active",

    createdAt: "2025-12-02",
  },

  {
    id: "CL-1003",

    organization: "Skyline Group",

    code: "SKG",

    industry: "Construction",

    country: "United Kingdom",

    owner: {
      id: "USR-103",
      name: "James Wilson",
      email: "james@skylinegroup.uk",
    },

    package: {
      id: "PKG-2",
      name: "Growth",
    },

    usage: {
      employees: 165,
      branches: 4,
      storage: 46,
      storageLimit: 100,
    },

    subscription: {
      startDate: "2026-02-15",
      expiryDate: "2027-02-15",
      billingStatus: "due",
      trial: false,
    },

    status: "pending",

    createdAt: "2026-02-12",
  },

  {
    id: "CL-1004",

    organization: "Prime Logistics",

    code: "PLG",

    industry: "Logistics",

    country: "Canada",

    owner: {
      id: "USR-104",
      name: "David Brown",
      email: "david@primelogistics.ca",
    },

    package: {
      id: "PKG-1",
      name: "Starter",
    },

    usage: {
      employees: 52,
      branches: 2,
      storage: 14,
      storageLimit: 50,
    },

    subscription: {
      startDate: "2026-05-10",
      expiryDate: "2026-08-10",
      billingStatus: "paid",
      trial: true,
    },

    status: "trial",

    createdAt: "2026-05-10",
  },

  {
    id: "CL-1005",

    organization: "Vertex Solutions",

    code: "VSL",

    industry: "Technology",

    country: "United States",

    owner: {
      id: "USR-105",
      name: "Michael Carter",
      email: "michael@vertex.io",
    },

    package: {
      id: "PKG-4",
      name: "Enterprise",
    },

    usage: {
      employees: 860,
      branches: 13,
      storage: 281,
      storageLimit: 500,
    },

    subscription: {
      startDate: "2025-09-01",
      expiryDate: "2026-09-01",
      billingStatus: "overdue",
      trial: false,
    },

    status: "suspended",

    createdAt: "2025-09-01",
  },

  {
    id: "CL-1006",

    organization: "Apex Holdings",

    code: "APH",

    industry: "Finance",

    country: "Singapore",

    owner: {
      id: "USR-106",
      name: "Daniel Lee",
      email: "daniel@apex.sg",
    },

    package: {
      id: "PKG-3",
      name: "Business",
    },

    usage: {
      employees: 332,
      branches: 6,
      storage: 105,
      storageLimit: 250,
    },

    subscription: {
      startDate: "2025-06-01",
      expiryDate: "2026-06-01",
      billingStatus: "paid",
      trial: false,
    },

    status: "archived",

    createdAt: "2025-05-21",
  },
];
