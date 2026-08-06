import { PageContainer, PageSection } from "@/shared/components/platform/page";

import {
  ClientPageHeader,
  ClientStats,
  ClientTable,
  ClientToolbar,
} from "../components/all-clients";

export default function AllClientsPage() {
  return (
    <PageContainer>
      <ClientPageHeader />

      <PageSection>
        <ClientStats />
      </PageSection>

      <PageSection>
        <ClientToolbar />

        <ClientTable />
      </PageSection>
    </PageContainer>
  );
}
