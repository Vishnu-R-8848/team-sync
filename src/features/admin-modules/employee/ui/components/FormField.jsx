const FormField = ({
  label,
  name,
  register,
  errors,
  icon,
  type = "text",
  placeholder = "",
  validation = {},
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
        {label}
      </label>

      <div className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 focus-within:border-[var(--primary)]">
        {icon && <span className="text-[var(--text-secondary)]">{icon}</span>}

        <input
          {...register(name, validation)}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
        />
      </div>

      {errors?.[name] && (
        <p className="mt-2 text-xs font-semibold text-red-500">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormField;