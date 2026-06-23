import { useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordField = ({ register, watch, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const password = watch("password");

  const passwordStrength = useMemo(() => {
    let score = 0;

    if (password?.length >= 8) score += 1;
    if (/[A-Z]/.test(password || "")) score += 1;
    if (/[0-9]/.test(password || "")) score += 1;
    if (/[^A-Za-z0-9]/.test(password || "")) score += 1;

    if (score <= 1) {
      return { label: "Weak", width: "25%", color: "bg-red-500" };
    }

    if (score === 2) {
      return { label: "Medium", width: "50%", color: "bg-orange-500" };
    }

    if (score === 3) {
      return { label: "Good", width: "75%", color: "bg-blue-500" };
    }

    return { label: "Strong", width: "100%", color: "bg-emerald-500" };
  }, [password]);

  return (
    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
        Temporary Password
      </label>

      <div className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 focus-within:border-[var(--primary)]">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          type={showPassword ? "text" : "password"}
          placeholder="Temporary password"
          className="w-full bg-transparent text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[var(--text-secondary)]">
        <span>Password Strength</span>
        <span>{passwordStrength.label}</span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--bg-main)]">
        <div
          className={`h-full rounded-full ${passwordStrength.color}`}
          style={{ width: passwordStrength.width }}
        />
      </div>

      {errors.password && (
        <p className="mt-2 text-xs font-semibold text-red-500">
          {errors.password.message}
        </p>
      )}
    </div>
  );
};

export default PasswordField;