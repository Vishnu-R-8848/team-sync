import React from "react";
import { Sparkles } from "lucide-react";

const AuthVisualPanel = () => {
  return (
    <aside className="relative hidden min-h-screen overflow-hidden border-r border-[var(--outline-variant)] bg-[#0b1020] p-8 text-white lg:flex lg:flex-col lg:justify-between">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(96,99,238,0.35),transparent_35%),radial-gradient(circle_at_60%_55%,rgba(207,188,255,0.22),transparent_30%)]" />

      <div className="absolute inset-0 opacity-45">
        <div className="absolute left-[-80px] top-[120px] h-[360px] w-[360px] rounded-full border border-blue-300/20 blur-[1px]" />
        <div className="absolute left-[120px] top-[180px] h-[420px] w-[420px] rounded-full border border-indigo-300/20 blur-[1px]" />
        <div className="absolute left-[40px] top-[80px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold tracking-[-0.04em]">
          Synthetix AI
        </h2>
      </div>

      <div className="relative z-10 max-w-[460px] pb-16">
        <div className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-purple-100">
          <Sparkles size={18} />
          Next-gen intelligence
        </div>

        <h1 className="text-[38px] font-bold leading-[1.12] tracking-[-0.04em]">
          Accelerate your team&apos;s intelligence.
        </h1>

        <p className="mt-6 max-w-[420px] text-lg leading-8 text-white/80">
          Connect your enterprise data to specialized AI models and unlock
          strategic insights in seconds.
        </p>

        <div className="mt-12 flex gap-12">
          <div>
            <p className="text-2xl font-bold">99.9%</p>
            <p className="mt-1 text-sm text-white/60">Uptime SLA</p>
          </div>

          <div>
            <p className="text-2xl font-bold">ISO</p>
            <p className="mt-1 text-sm text-white/60">27001 Certified</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AuthVisualPanel;