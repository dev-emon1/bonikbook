import AllClientsPage from "../pages/all-clients-page";
import ClientOnboardingPage from "../pages/client-onboarding-page";

export const tenantsRoutes = [
  {
    path: "tenants",
    element: <AllClientsPage />,
  },
  {
    path: "onboarding",
    element: <ClientOnboardingPage />,
  },
];
