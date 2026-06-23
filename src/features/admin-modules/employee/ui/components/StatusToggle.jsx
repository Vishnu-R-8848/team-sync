const StatusToggle = ({ watch, setValue }) => {
  const status = watch("status");

  const handleStatusToggle = () => {
    setValue("status", status === "active" ? "inactive" : "active", {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] p-5">
      <div>
        <p className="font-semibold text-[var(--text-primary)]">
          Account Status
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          {status === "active" ? "Active upon creation" : "Inactive account"}
        </p>
      </div>

      <button
        type="button"
        onClick={handleStatusToggle}
        className={`flex h-8 w-14 items-center rounded-full p-1 transition ${
          status === "active" ? "bg-[var(--primary)]" : "bg-[var(--border-color)]"
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full bg-white transition ${
            status === "active" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default StatusToggle;