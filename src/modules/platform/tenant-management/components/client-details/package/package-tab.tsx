import { CurrentPackage } from "./current-package";
import { EnabledModules } from "./enabled-modules";
import { PackageLimits } from "./package-limits";

export function PackageTab() {
  return (
    <div className="space-y-6">
      <CurrentPackage />

      <PackageLimits />

      <EnabledModules />
    </div>
  );
}
