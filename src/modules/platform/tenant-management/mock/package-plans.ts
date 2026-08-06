import type { PackagePlan } from "../types/package.types";

export const PACKAGE_PLANS: PackagePlan[] = [
  {
    id: "starter",

    name: "Starter",

    description: "Perfect for small businesses.",

    monthlyPrice: 999,

    yearlyPrice: 9990,

    features: [
      "Employee Management",
      "Attendance",
      "Leave Management",
      "Basic Reports",
    ],

    limits: {
      employees: 50,
      branches: 1,
      storage: "5 GB",
      admins: 1,
    },
  },

  {
    id: "professional",

    name: "Professional",

    description: "Most popular for growing companies.",

    monthlyPrice: 2999,

    yearlyPrice: 29990,

    recommended: true,

    features: [
      "Payroll",
      "Recruitment",
      "Performance",
      "Shift Management",
      "Advanced Reports",
    ],

    limits: {
      employees: 500,
      branches: 10,
      storage: "50 GB",
      admins: 10,
    },
  },

  {
    id: "enterprise",

    name: "Enterprise",

    description: "Advanced solution for large organizations.",

    monthlyPrice: 0,

    yearlyPrice: 0,

    features: [
      "Everything in Professional",
      "Unlimited Employees",
      "Unlimited Branches",
      "API Access",
      "Priority Support",
    ],

    limits: {
      employees: "Unlimited",
      branches: "Unlimited",
      storage: "Unlimited",
      admins: "Unlimited",
    },
  },
];
