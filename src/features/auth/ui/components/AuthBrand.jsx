import React from "react";
import { Network } from "lucide-react";

const AuthBrand = () => {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--on-primary)] shadow-[0_16px_35px_rgba(70,72,212,0.22)]">
        <Network size={27} strokeWidth={2.3} />
      </div>

      <h1 className="text-[30px] font-bold tracking-[-0.03em] text-[var(--on-surface)]">
        Team Sync
      </h1>

      <p className="mt-2 text-sm text-[var(--on-surface-variant)]">
        Sign in to your professional workspace
      </p>
    </div>
  );
};

export default AuthBrand;