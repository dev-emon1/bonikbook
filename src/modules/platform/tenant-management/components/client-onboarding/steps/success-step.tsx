import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  Mail,
  Package,
  UserRound,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";

export function SuccessStep() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Success */}

      <Card className="rounded-3xl">
        <CardContent className="flex flex-col items-center py-14 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="size-10" />
          </div>

          <h1 className="text-4xl font-bold">Client Created Successfully</h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            The client workspace has been created successfully and is now ready
            for onboarding.
          </p>
        </CardContent>
      </Card>

      {/* Summary */}

      <Card className="rounded-3xl">
        <CardContent className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">
          <SummaryItem
            icon={<Building2 className="size-5" />}
            label="Workspace"
            value="technova.myhrlounge.com"
          />

          <SummaryItem
            icon={<Package className="size-5" />}
            label="Package"
            value="Professional"
          />

          <SummaryItem
            icon={<UserRound className="size-5" />}
            label="Administrator"
            value="john@technova.com"
          />

          <SummaryItem
            icon={<Package className="size-5" />}
            label="Subscription"
            value="Yearly"
          />
        </CardContent>
      </Card>

      {/* Actions */}

      <Card className="rounded-3xl">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4">
          <Button>
            <ArrowRight className="size-4" />
            Client Details
          </Button>

          <Button variant="outline">
            <UserRound className="size-4" />
            Login as Client
          </Button>

          <Button variant="outline">
            <Mail className="size-4" />
            Send Welcome Email
          </Button>

          <Button variant="outline">
            <Download className="size-4" />
            Download Summary
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" variant="secondary">
          Create Another Client
        </Button>
      </div>
    </div>
  );
}

type SummaryItemProps = {
  icon: React.ReactNode;

  label: string;

  value: string;
};

function SummaryItem({ icon, label, value }: SummaryItemProps) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="mb-3 flex items-center gap-2 text-primary">
        {icon}

        <span className="text-sm font-medium">{label}</span>
      </div>

      <p className="font-semibold break-all">{value}</p>
    </div>
  );
}
