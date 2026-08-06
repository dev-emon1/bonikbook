import type { AppSelectOption } from "@/shared/ui/app-select";

export const statusOptions: AppSelectOption[] = [
  { label: "All Status", value: "all" },

  { label: "Pending", value: "pending" },

  { label: "Trial", value: "trial" },

  { label: "Active", value: "active" },

  { label: "Suspended", value: "suspended" },

  { label: "Archived", value: "archived" },
];

export const packageOptions: AppSelectOption[] = [
  {
    label: "All Packages",
    value: "all",
  },

  {
    label: "Starter",
    value: "starter",
  },

  {
    label: "Growth",
    value: "growth",
  },

  {
    label: "Business",
    value: "business",
  },

  {
    label: "Enterprise",
    value: "enterprise",
  },
];

export const countryOptions: AppSelectOption[] = [
  {
    label: "All Countries",
    value: "all",
  },

  {
    label: "Bangladesh",
    value: "bd",
  },

  {
    label: "United States",
    value: "us",
  },

  {
    label: "United Kingdom",
    value: "uk",
  },

  {
    label: "Canada",
    value: "ca",
  },
];
