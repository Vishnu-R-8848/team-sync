import { BriefcaseBusiness } from "lucide-react";

import SelectField from "./SelectField";
import StatusToggle from "./StatusToggle";

const EmploymentForm = ({ register, watch, setValue }) => {
  return (
    <section className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-7">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-container)] text-[var(--primary)]">
          <BriefcaseBusiness size={21} />
        </div>

        <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
          Employment
        </h2>
      </div>

      <div className="space-y-6">
        <SelectField
          label="System Role"
          name="role"
          register={register}
          options={[
            { label: "Employee", value: "employee" },
            { label: "Admin", value: "admin" },
          ]}
        />

        <SelectField
          label="Department"
          name="department"
          register={register}
          options={[
            { label: "Common", value: "common" },
            { label: "Developer", value: "developer" },
            { label: "Administrative", value: "administrative" },
            { label: "Security", value: "security" },
            { label: "Management", value: "management" },
          ]}
        />

        <StatusToggle watch={watch} setValue={setValue} />
      </div>
    </section>
  );
};

export default EmploymentForm;