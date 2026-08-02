import { accessControlNavigation } from "./access-control.navigation";
import { businessManagementNavigation } from "./business-management.navigation";
import { dashboardNavigation } from "./dashboard.navigation";
import { integrationsNavigation } from "./integrations.navigation";
import { platformManagementNavigation } from "./platform-management.navigation";
import { reportsNavigation } from "./reports.navigation";
import { settingsNavigation } from "./settings.navigation";
import { supportNavigation } from "./support.navigation";
import { systemNavigation } from "./system.navigation";

export const platformOwnerNavigation = [
  dashboardNavigation,

  businessManagementNavigation,

  platformManagementNavigation,

  accessControlNavigation,

  reportsNavigation,

  supportNavigation,

  systemNavigation,

  integrationsNavigation,

  settingsNavigation,
];
