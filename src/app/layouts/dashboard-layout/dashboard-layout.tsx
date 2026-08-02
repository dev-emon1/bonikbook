import { Outlet } from "react-router";

import DashboardContent from "./dashboard-content";
import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-dvh bg-background">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />

        <DashboardContent>
          <Outlet />
        </DashboardContent>
      </div>
    </div>
  );
}
