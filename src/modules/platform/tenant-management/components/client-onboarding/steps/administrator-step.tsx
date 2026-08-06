import { AccountSecurity } from "../sections/administrator/account-security";
import { PersonalInformation } from "../sections/administrator/personal-information";

export function AdministratorStep() {
  return (
    <div className="space-y-6">
      <PersonalInformation />

      <AccountSecurity />
    </div>
  );
}
