import React, { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormInput = forwardRef(
  (
    {
      label,
      type = "text",
      icon: Icon,
      error,
      className = "",
      inputClassName = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={props.id}
            className="mb-2 block text-xs font-semibold text-[var(--on-surface)]"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <Icon
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--outline)]"
            />
          )}

          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={`h-[58px] w-full rounded-xl border bg-[var(--surface-container-low)] px-4 text-sm text-[var(--on-surface)] outline-none transition placeholder:text-[var(--outline)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 ${
              Icon ? "pl-12" : ""
            } ${isPassword ? "pr-12" : ""} ${
              error
                ? "border-[var(--error)]"
                : "border-[var(--outline-variant)]"
            } ${inputClassName}`}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--outline)] transition hover:text-[var(--primary)]"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        {error && (
          <p className="mt-2 text-xs font-medium text-[var(--error)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;