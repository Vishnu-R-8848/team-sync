import React from "react";
import { Link } from "react-router";

const TermsCheckbox = ({ checked, onChange, error }) => {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-[var(--on-surface-variant)]">
        <button
          type="button"
          onClick={onChange}
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
            checked
              ? "border-[var(--primary)] bg-[var(--primary)]"
              : "border-[var(--outline-variant)] bg-[var(--surface-container-low)]"
          }`}
        >
          {checked && (
            <span className="h-2 w-2 rounded-sm bg-[var(--on-primary)]" />
          )}
        </button>

        <span>
          I agree to the{" "}
          <Link
            to="/terms"
            className="font-medium text-[var(--primary)] hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="font-medium text-[var(--primary)] hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error && (
        <p className="mt-2 text-xs font-medium text-[var(--error)]">{error}</p>
      )}
    </div>
  );
};

export default TermsCheckbox;