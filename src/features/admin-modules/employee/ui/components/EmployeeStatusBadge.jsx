const EmployeeStatusBadge = ({ status = "inactive" }) => {
  const isActive = status === "active";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
        isActive
          ? "bg-emerald-500/15 text-emerald-500"
          : "bg-red-500/15 text-red-500"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {isActive ? "Active" : "Inactive"}
    </div>
  );
};

export default EmployeeStatusBadge;