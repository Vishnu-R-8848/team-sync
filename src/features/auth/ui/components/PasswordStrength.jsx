import React from "react";

const getStrength = (password = "") => {
  let score = 0;

  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (!password) {
    return {
      label: "",
      active: 0,
    };
  }

  if (score <= 2) {
    return {
      label: "Weak password",
      active: 1,
    };
  }

  if (score <= 4) {
    return {
      label: "Good password",
      active: 3,
    };
  }

  return {
    label: "Strong password",
    active: 4,
  };
};

const PasswordStrength = ({ password }) => {
  const strength = getStrength(password);

  return (
    <div className="mt-2">
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className={`h-1 rounded-full ${
              item <= strength.active
                ? "bg-[var(--primary)]"
                : "bg-[var(--outline-variant)]/50"
            }`}
          />
        ))}
      </div>

      {strength.label && (
        <p className="mt-2 text-xs font-medium text-[var(--primary)]">
          {strength.label}
        </p>
      )}
    </div>
  );
};

export default PasswordStrength;