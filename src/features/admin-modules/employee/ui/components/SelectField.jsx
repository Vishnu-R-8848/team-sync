import { ChevronDown } from "lucide-react";

const SelectField = ({ label, name, register, options = [] }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
        {label}
      </label>

      <div className="relative">
        <select
          {...register(name)}
          className="h-14 w-full appearance-none rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 pr-12 text-[var(--text-primary)] outline-none focus:border-[var(--primary)]"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
        />
      </div>
    </div>
  );
};

export default SelectField;