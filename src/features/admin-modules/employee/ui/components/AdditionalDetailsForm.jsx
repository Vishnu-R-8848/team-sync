import { Info, Phone } from "lucide-react";
import FormField from "./FormField";

const AdditionalDetailsForm = ({ register }) => {
  return (
    <section className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-7">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-container)] text-[var(--primary)]">
          <Info size={21} />
        </div>

        <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
          Additional Details
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[330px_1fr]">
        <FormField
          label="Phone Number"
          name="phone"
          register={register}
          icon={<Phone size={18} />}
          placeholder="+91 00000 00000"
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">
            Bio / Professional Summary
          </label>

          <input
            {...register("bio")}
            placeholder="Brief description of skills, interests or professional history..."
            className="h-14 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)]"
          />
        </div>
      </div>
    </section>
  );
};

export default AdditionalDetailsForm;