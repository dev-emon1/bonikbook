import { createBrowserRouter, RouterProvider } from "react-router";

import { platformRoutes } from "./platform";
import { publicRoutes } from "./public";
import { workspaceRoutes } from "./workspace";

const router = createBrowserRouter([
  ...publicRoutes,
  ...platformRoutes,
  ...workspaceRoutes,
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
