const EmployeeStatCard = ({ title, value, icon, badge, tone = "primary" }) => {
  const tones = {
    primary: "bg-indigo-500/15 text-[var(--primary)]",
    success: "bg-emerald-500/15 text-emerald-500",
    warning: "bg-orange-500/15 text-orange-500",
    danger: "bg-red-500/15 text-red-500",
  };

  return (
    <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${tones[tone]}`}
        >
          {icon}
        </div>

        {badge && (
          <span className="rounded-full bg-[var(--bg-main)] px-3 py-1 text-xs font-bold text-[var(--text-secondary)]">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-[var(--text-secondary)]">
          {title}
        </p>

        <h1 className="mt-2 text-4xl font-extrabold text-[var(--text-primary)]">
          {value}
        </h1>
      </div>
    </div>
  );
};

export default EmployeeStatCard;
