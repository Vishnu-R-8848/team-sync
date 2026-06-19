import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import SideNavbar from "../../features/dashboard/ui/components/SideNavbar";
import HeaderNavbar from "../../features/dashboard/ui/components/HeaderNavbar";

const DashboardLayout = () => {
  const { mode } = useSelector((store) => store.theme);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className="grid min-h-screen grid-cols-[257px_1fr] bg-[var(--bg-main)] text-[var(--text-primary)]">
      <SideNavbar />

      <div className="flex min-w-0 flex-col bg-[var(--bg-main)]">
        <HeaderNavbar />

        <main className="flex-1 bg-[var(--bg-main)] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
