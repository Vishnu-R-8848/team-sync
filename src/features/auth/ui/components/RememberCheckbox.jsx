import React from "react";

const RememberCheckbox = ({ checked, onChange, label = "Stay signed in" }) => {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-[var(--on-surface-variant)]">
      <button
        type="button"
        onClick={onChange}
        className={`flex h-4 w-4 items-center justify-center rounded border transition ${
          checked
            ? "border-[var(--primary)] bg-[var(--primary)]"
            : "border-[var(--outline-variant)] bg-[var(--surface-container-lowest)]"
        }`}
      >
        {checked && (
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--on-primary)]" />
        )}
      </button>

      {label}
    </label>
  );
};

export default RememberCheckbox;