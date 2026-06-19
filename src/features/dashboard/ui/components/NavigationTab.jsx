import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, icon }) => {
  return (
    <NavLink
      to={path}
      end={path === "/home"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 text-sm font-medium transition ${
          isActive
            ? "border-r-4 border-[var(--tertiary-fixed-dim)] bg-[var(--secondary)] text-[var(--tertiary-fixed-dim)]"
            : "text-[var(--on-surface-variant)] hover:bg-[var(--surface-container)] hover:text-[var(--on-surface)]"
        }`
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
};

export default NavigationTab;