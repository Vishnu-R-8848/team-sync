import React from "react";

const AuthFeatureItem = ({ icon: Icon, title, description, variant = "primary" }) => {
  const colorMap = {
    primary: "bg-[var(--primary-fixed)] text-[var(--primary)]",
    secondary: "bg-[var(--secondary-container)] text-[var(--secondary)]",
    tertiary: "bg-[var(--tertiary-fixed)] text-[var(--tertiary)]",
  };

  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          colorMap[variant]
        }`}
      >
        <Icon size={19} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[var(--on-surface)]">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[var(--on-surface-variant)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AuthFeatureItem;