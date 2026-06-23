const EmployeeButton = ({
  children,
  icon,
  variant = "primary",
  handleClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:opacity-90",
    secondary:
      "border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]",
    ghost:
      "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]",
    danger:
      "bg-red-500/10 text-red-500 hover:bg-red-500/20",
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default EmployeeButton;