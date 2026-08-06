import { AddressInformation } from "../sections/organization/address-information";
import { BusinessInformation } from "../sections/organization/business-information";
import { CompanyInformation } from "../sections/organization/company-information";
import { RegionalSettings } from "../sections/organization/regional-settings";

export function OrganizationStep() {
  return (
    <div className="space-y-6">
      <CompanyInformation />

      <BusinessInformation />

      <AddressInformation />

      <RegionalSettings />
    </div>
  );
}
