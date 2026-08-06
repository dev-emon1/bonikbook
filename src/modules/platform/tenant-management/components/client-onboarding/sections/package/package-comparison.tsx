import { Check, X, TableProperties } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

import { FormSectionCard } from "@/shared/components/platform/forms";

import { PACKAGE_PLANS } from "../../../../mock/package-plans";

const FEATURES = [
  {
    category: "Core HR",
    items: [
      "Employee Management",
      "Attendance",
      "Leave Management",
      "Payroll",
      "Recruitment",
      "Performance",
    ],
  },
  {
    category: "Platform",
    items: ["API Access", "Priority Support", "Multi Branch", "Audit Logs"],
  },
];

export function PackageComparison() {
  return (
    <FormSectionCard
      title="Package Comparison"
      description="Compare package capabilities before assigning a plan."
      icon={TableProperties}
    >
      <Accordion
        //   type="multiple"
        className="space-y-4"
      >
        {FEATURES.map((group) => (
          <AccordionItem
            key={group.category}
            value={group.category}
            className="rounded-2xl border px-5"
          >
            <AccordionTrigger>{group.category}</AccordionTrigger>

            <AccordionContent>
              <div className="space-y-4">
                {group.items.map((feature) => (
                  <div
                    key={feature}
                    className="grid grid-cols-4 items-center gap-4 rounded-xl border p-4"
                  >
                    <div className="font-medium">{feature}</div>

                    {PACKAGE_PLANS.map((pkg) => {
                      const enabled = pkg.features.includes(feature);

                      return (
                        <div key={pkg.id} className="flex justify-center">
                          {enabled ? (
                            <Check className="size-5 text-primary" />
                          ) : (
                            <X className="size-5 text-muted-foreground/40" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FormSectionCard>
  );
}
