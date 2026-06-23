import React from "react";
import { UserRound } from "lucide-react";

const EmployeeAvatar = ({ src = "", name = "Employee", size = "md" }) => {
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-14 w-14 text-lg",
  };

  const initial = name?.charAt(0)?.toUpperCase() || "E";

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[var(--primary-container)] font-bold text-[var(--on-primary-container)] ${sizes[size]}`}
    >
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : initial ? (
        initial
      ) : (
        <UserRound size={18} />
      )}
    </div>
  );
};

export default EmployeeAvatar;