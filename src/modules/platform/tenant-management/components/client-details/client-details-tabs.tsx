import type { Dispatch, SetStateAction } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";

export type ClientDetailsTab =
  | "overview"
  | "organization"
  | "package"
  | "subscription"
  | "users"
  | "billing"
  | "activity"
  | "audit"
  | "documents"
  | "settings";

const tabs = [
  {
    value: "overview",
    label: "Overview",
  },
  {
    value: "organization",
    label: "Organization",
  },
  {
    value: "package",
    label: "Package",
  },
  {
    value: "subscription",
    label: "Subscription",
  },
  {
    value: "users",
    label: "Users",
  },
  {
    value: "billing",
    label: "Billing",
  },
  {
    value: "activity",
    label: "Activity",
  },
  {
    value: "audit",
    label: "Audit Log",
  },
  {
    value: "documents",
    label: "Documents",
  },
  {
    value: "settings",
    label: "Settings",
  },
] satisfies {
  value: ClientDetailsTab;
  label: string;
}[];

type Props = {
  value: ClientDetailsTab;

  onChange: Dispatch<SetStateAction<ClientDetailsTab>>;
};

export function ClientDetailsTabs({ value, onChange }: Props) {
  return (
    <Tabs
      value={value}
      onValueChange={(tab) => onChange(tab as ClientDetailsTab)}
    >
      <TabsList className="h-auto w-full justify-start overflow-x-auto rounded-2xl p-1">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
