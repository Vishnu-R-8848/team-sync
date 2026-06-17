import React from "react";
import { Lock, Mail, Network, User, Cloud } from "lucide-react";
import { useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";

import AuthVisualPanel from "../components/AuthVisualPanel";
import AuthSocialButton from "../components/AuthSocialButton";
import FormInput from "../components/FormInput";
import PasswordStrength from "../components/PasswordStrength";
import TermsCheckbox from "../components/TermsCheckbox";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    registerForm,
    acceptedTerms,
    handleTermsChange,
    password,
    onRegisterSubmit,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = registerForm;

  const handleRegisterSubmit = async (data) => {
    await onRegisterSubmit(data);
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
      <div className="grid min-h-screen lg:grid-cols-[48%_52%]">
        <AuthVisualPanel />

        <section className="flex min-h-screen items-center justify-center px-5 py-10">
          <div className="w-full max-w-[560px]">
            <div className="mb-10 lg:hidden">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--on-primary)]">
                  <Network size={23} />
                </div>

                <h2 className="text-2xl font-bold tracking-[-0.04em] text-[var(--on-surface)]">
                  Synthetix AI
                </h2>
              </div>
            </div>

            <div>
              <h1 className="text-[38px] font-bold leading-tight tracking-[-0.04em] text-[var(--on-surface)]">
                Create your account
              </h1>

              <p className="mt-3 text-base text-[var(--on-surface-variant)]">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(handleRegisterSubmit)}
              className="mt-10 space-y-7"
            >
              <FormInput
                id="fullName"
                label="Full Name"
                type="text"
                icon={User}
                placeholder="Enter your full name"
                autoComplete="name"
                error={errors.fullName?.message}
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Full name must be at least 3 characters",
                  },
                })}
              />

              <FormInput
                id="email"
                label="Email Address"
                type="email"
                icon={Mail}
                placeholder="name@company.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <div>
                <FormInput
                  id="password"
                  label="Password"
                  type="password"
                  icon={Lock}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  error={errors.password?.message}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />

                <PasswordStrength password={password} />
              </div>

              <TermsCheckbox
                checked={acceptedTerms}
                onChange={handleTermsChange}
                error={errors.terms?.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[60px] w-full rounded-xl bg-gradient-to-r from-[var(--primary-container)] to-[var(--primary-fixed-dim)] text-base font-bold text-[#16002f] shadow-[0_18px_40px_rgba(96,99,238,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="my-10 flex items-center gap-5">
              <div className="h-px flex-1 bg-[var(--outline-variant)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--outline)]">
                Or continue with
              </p>
              <div className="h-px flex-1 bg-[var(--outline-variant)]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <AuthSocialButton icon={Cloud}>Google</AuthSocialButton>
              <AuthSocialButton icon={Network}>SSO</AuthSocialButton>
            </div>

            <p className="mt-10 text-center text-base text-[var(--on-surface-variant)]">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-bold text-[var(--primary)] transition hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t border-[var(--outline-variant)] bg-[var(--bg-main)] px-6 py-8">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 text-sm text-[var(--on-surface-variant)] md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-bold tracking-[-0.03em] text-[var(--on-surface)]">
            Synthetix AI
          </h2>

          <div className="flex flex-wrap gap-7">
            <button
              type="button"
              onClick={() => navigate("/privacy")}
              className="hover:text-[var(--primary)]"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => navigate("/terms")}
              className="hover:text-[var(--primary)]"
            >
              Terms of Service
            </button>

            <button
              type="button"
              onClick={() => navigate("/security")}
              className="hover:text-[var(--primary)]"
            >
              Security
            </button>

            <button
              type="button"
              onClick={() => navigate("/status")}
              className="hover:text-[var(--primary)]"
            >
              System Status
            </button>
          </div>

          <p>© 2026 Team Sync. Professional Collaboration Platform.</p>
        </div>
      </footer>
    </main>
  );
};

export default RegisterPage;