import React from "react";

const AuthSocialButton = ({ icon: Icon, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[58px] items-center justify-center gap-3 rounded-xl border border-[var(--outline-variant)] bg-[var(--surface-container-low)] text-sm font-semibold text-[var(--on-surface)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-container)]"
    >
      {Icon && <Icon size={19} />}
      {children}
    </button>
  );
};

export default AuthSocialButton;