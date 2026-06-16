import React from "react";
import { Sparkles } from "lucide-react";

const WorkspacePreview = () => {
  return (
    <div className="hidden justify-self-start lg:block">
      <div className="relative h-[360px] w-[360px] rounded-[2rem] border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-6 shadow-[var(--shadow-md)]">
        <div className="absolute inset-6 rounded-[1.5rem] bg-[var(--surface-container-low)]" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                Workspace Health
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[var(--on-surface)]">
                94%
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-fixed)] text-[var(--primary)]">
              <Sparkles size={22} />
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-[var(--outline-variant)] bg-white/70 p-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--on-surface)]">
                  Tasks Completed
                </span>
                <span className="text-[var(--success)]">+18%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface-container-high)]">
                <div className="h-2 w-[78%] rounded-full bg-[var(--primary)]" />
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--outline-variant)] bg-white/70 p-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-[var(--on-surface)]">
                  Team Sync Rate
                </span>
                <span className="text-[var(--primary)]">86%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface-container-high)]">
                <div className="h-2 w-[86%] rounded-full bg-[var(--secondary)]" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--primary)] p-4 text-[var(--on-primary)]">
            <p className="text-sm font-semibold">AI Suggestion</p>
            <p className="mt-1 text-xs leading-5 opacity-90">
              Assign pending design reviews before 4 PM to avoid tomorrow’s
              task delay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePreview;