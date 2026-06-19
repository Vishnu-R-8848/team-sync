import React from "react";
import { useSelector } from "react-redux";

import NavigationTab from "./NavigationTab";

import {
  adminNavigationLinks,
  employeeNavigationLinks,
} from "../../../../app/constants/navigationLinks";

const AsideNav = () => {
  const { employee } = useSelector((store) => store.auth);

  const navigationLinks =
    employee?.role === "admin"
      ? adminNavigationLinks
      : employeeNavigationLinks

  return (
    <aside className="min-h-screen w-[260px] border-r-4 border-[var(--outline-variant)] bg-[var(--surface-container-lowest)]">
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-3xl font-semibold text-[#CAB8F9]">team-sync</h1>

        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {navigationLinks.map((link) => (
          <NavigationTab
            key={link.path}
            path={link.path}
            icon={link.icon}
            title={link.title}
          />
        ))}
      </div>
    </aside>
  );
};

export default AsideNav;