import { AddressInformation } from "./address-information";
import { BusinessInformation } from "./business-information";
import { CompanyInformation } from "./company-information";

export function OrganizationTab() {
  return (
    <div className="space-y-6">
      <CompanyInformation />

      <BusinessInformation />

      <AddressInformation />
    </div>
  );
}
