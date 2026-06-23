import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const AddEmployeeHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <button
        type="button"
        onClick={() => navigate("/home/employees")}
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
      >
        <ArrowLeft size={17} />
        Employees
        <span className="text-[var(--text-muted)]">/</span>
        Add New Employee
      </button>

      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
        Create New Employee
      </h1>

      <p className="mt-2 text-lg text-[var(--text-secondary)]">
        Add a new employee with role, department, status, and login access.
      </p>
    </div>
  );
};

export default AddEmployeeHeader;