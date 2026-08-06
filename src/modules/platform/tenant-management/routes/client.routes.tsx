import AllClientsPage from "../pages/all-clients-page";
import ClientDetailsPage from "../pages/client-details";
import ClientOnboardingPage from "../pages/client-onboarding-page";

export const tenantsRoutes = [
  {
    path: "tenants",
    children: [
      {
        index: true,
        path: "all-clients",
        element: <AllClientsPage />,
      },
      {
        path: "onboarding",
        element: <ClientOnboardingPage />,
      },
      {
        path: ":tenantId",
        element: <ClientDetailsPage />,
      },
    ],
  },
];
