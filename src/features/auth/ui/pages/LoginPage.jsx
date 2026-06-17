import React from "react";
import {
  Cloud,
  Sparkles,
  Users,
  Workflow,
  ShieldCheck,
  LogIn,
} from "lucide-react";
import { Link } from "react-router";

import useAuth from "../../hooks/useAuth";

import AuthBrand from "../components/AuthBrand";
import AuthSocialButton from "../components/AuthSocialButton";
import FormInput from "../components/FormInput";
import RememberCheckbox from "../components/RememberCheckbox";
import AuthFeatureItem from "../components/AuthFeatureItem";
import WorkspacePreview from "../components/WorkspacePreview";

const LoginPage = () => {
  const {
    loginForm,
    rememberMe,
    handleRememberChange,
    onLoginSubmit,
    navigate,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = loginForm;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-primary)]">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[var(--secondary-container)]/60 blur-[130px]" />

      <section className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-4 py-10 lg:grid-cols-[1fr_520px_1fr] lg:px-10">
        <div className="hidden justify-self-end lg:block">
          <div className="max-w-[360px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-4 py-2 text-sm font-medium text-[var(--secondary)] shadow-[var(--shadow-sm)]">
              <Sparkles size={16} className="text-[var(--primary)]" />
              AI Collaboration Framework
            </div>

            <h1 className="text-[40px] font-bold leading-[1.12] tracking-[-0.04em] text-[var(--on-surface)]">
              Manage teams with calm, clear workflow.
            </h1>

            <p className="mt-4 text-base leading-7 text-[var(--on-surface-variant)]">
              Team Sync helps admins, employees, and teams stay aligned with
              tasks, attendance, documents, and collaboration in one workspace.
            </p>

            <div className="mt-8 space-y-4">
              <AuthFeatureItem
                icon={Users}
                title="Employee Management"
                description="Manage roles, profiles, and departments easily."
                variant="primary"
              />

              <AuthFeatureItem
                icon={Workflow}
                title="Task Workflow"
                description="Track tasks, ownership, progress, and updates."
                variant="secondary"
              />

              <AuthFeatureItem
                icon={ShieldCheck}
                title="Secure Access"
                description="Role based login for admin and employees."
                variant="tertiary"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[460px]">
          <div className="rounded-3xl border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-7 shadow-[var(--shadow-md)] sm:p-8">
            <AuthBrand />

            <div className="grid grid-cols-2 gap-3">
              <AuthSocialButton icon={Cloud}>GOOGLE</AuthSocialButton>
              <AuthSocialButton>GITHUB</AuthSocialButton>
            </div>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[var(--outline-variant)]" />
              <span className="text-xs text-[var(--text-muted)]">
                or continue with email
              </span>
              <div className="h-px flex-1 bg-[var(--outline-variant)]" />
            </div>

            <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">
              <FormInput
                id="email"
                type="email"
                label="Email Address"
                placeholder="name@company.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-[var(--on-surface)]"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-[var(--primary)] transition hover:text-[var(--on-primary-fixed-variant)]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <FormInput
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  error={errors.password?.message}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
              </div>

              <RememberCheckbox
                checked={rememberMe}
                onChange={handleRememberChange}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] text-sm font-semibold text-[var(--on-primary)] shadow-[0_16px_35px_rgba(70,72,212,0.24)] transition hover:bg-[var(--primary-container)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
                <LogIn
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </button>
            </form>

            <div className="mt-8 border-t border-[var(--outline-variant)] pt-6 text-center">
              <p className="text-sm text-[var(--on-surface-variant)]">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="font-bold text-[var(--primary)] transition hover:text-[var(--on-primary-fixed-variant)]"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>

          <footer className="mt-6 text-center">
            <p className="text-xs text-[var(--text-muted)]">
              © 2026 Team Sync. Professional Collaboration Platform.
            </p>

            <div className="mt-3 flex items-center justify-center gap-5 text-xs text-[var(--text-muted)]">
              <Link
                to="/privacy"
                className="transition hover:text-[var(--primary)]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="transition hover:text-[var(--primary)]"
              >
                Terms of Service
              </Link>
            </div>
          </footer>
        </div>

        <WorkspacePreview />
      </section>
    </main>
  );
};

export default LoginPage;
