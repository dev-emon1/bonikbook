export interface PackageLimit {
  employees: number | "Unlimited";

  branches: number | "Unlimited";

  storage: string;

  admins: number | "Unlimited";
}

export interface PackagePlan {
  id: string;

  name: string;

  description: string;

  monthlyPrice: number;

  yearlyPrice: number;

  recommended?: boolean;

  features: string[];

  limits: PackageLimit;
}
