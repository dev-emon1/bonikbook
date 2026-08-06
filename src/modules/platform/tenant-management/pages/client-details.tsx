import { useState } from "react";

import { ClientDetailsHeader } from "../components/client-details/client-details-header";
import {
  ClientDetailsTabs,
  type ClientDetailsTab,
} from "../components/client-details/client-details-tabs";
import { ClientOverviewStats } from "../components/client-details/client-overview-stats";

import { OverviewTab } from "../components/client-details/overview/overview-tab";
import { OrganizationTab } from "../components/client-details/organization/organization-tab";
import { PackageTab } from "../components/client-details/package/package-tab";
import { SubscriptionTab } from "../components/client-details/subscription/subscription-tab";
import { UsersTab } from "../components/client-details/users/users-tab";
import { BillingTab } from "../components/client-details/billing/billing-tab";
import { ActivityTab } from "../components/client-details/activity/activity-tab";
import { AuditLogTab } from "../components/client-details/audit-log/audit-log-tab";
import { DocumentsTab } from "../components/client-details/documents/documents-tab";
import { SettingsTab } from "../components/client-details/settings/settings-tab";

export default function ClientDetailsPage() {
  const [activeTab, setActiveTab] = useState<ClientDetailsTab>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;

      case "organization":
        return <OrganizationTab />;

      case "package":
        return <PackageTab />;

      case "subscription":
        return <SubscriptionTab />;

      case "users":
        return <UsersTab />;

      case "billing":
        return <BillingTab />;

      case "activity":
        return <ActivityTab />;

      case "audit":
        return <AuditLogTab />;

      case "documents":
        return <DocumentsTab />;

      case "settings":
        return <SettingsTab />;

      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="space-y-6">
      <ClientDetailsHeader
        companyName="TechNova Ltd."
        workspace="technova.myhrlounge.com"
        packageName="Enterprise"
        status="active"
        createdAt="01 Aug 2026"
      />

      <ClientOverviewStats />

      <ClientDetailsTabs value={activeTab} onChange={setActiveTab} />

      {renderContent()}
    </div>
  );
}
