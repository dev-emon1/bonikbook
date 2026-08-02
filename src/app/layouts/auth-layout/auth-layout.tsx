import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background">
      <div className="w-full max-w-md px-6">
        <Outlet />
      </div>
    </main>
  );
}
