import { Mail, UserRound } from "lucide-react";

import AvatarUpload from "./AvatarUpload";
import FormField from "./FormField";
import PasswordField from "./PasswordField";

const PersonalInfoForm = ({ register, errors, watch, setValue }) => {
  return (
    <section className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-7">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-container)] text-[var(--primary)]">
          <UserRound size={21} />
        </div>

        <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
          Personal Information
        </h2>
      </div>

      <AvatarUpload register={register} watch={watch} setValue={setValue} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
          icon={<UserRound size={18} />}
          placeholder="e.g. Alex Henderson"
          validation={{
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          }}
        />

        <FormField
          label="Email Address"
          name="email"
          register={register}
          errors={errors}
          icon={<Mail size={18} />}
          placeholder="alex@teamsync.ai"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          }}
        />

        <PasswordField register={register} watch={watch} errors={errors} />
      </div>
    </section>
  );
};

export default PersonalInfoForm;