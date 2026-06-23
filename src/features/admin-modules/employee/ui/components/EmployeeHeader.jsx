import { Download, UserPlus, UsersRound } from "lucide-react";
import { useNavigate } from "react-router";
import EmployeeButton from "./EmployeeButton";

const EmployeeHeader = () => {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden rounded-3xl bg-[var(--secondary)] text-white">
      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
            <UsersRound size={16} />
            Admin / Employees
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Employee Directory
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
            Manage your organization&apos;s workforce, roles, departments, and
            employee status from one clean workspace.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <EmployeeButton
              variant="secondary"
              icon={<Download size={18} />}
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Export
            </EmployeeButton>

            <EmployeeButton
              handleClick={() => navigate("/home/add-employee")}
              icon={<UserPlus size={18} />}
              className="bg-white/30 text-[var(--primary)] hover:bg-white/90"
            >
              Add Employee
            </EmployeeButton>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-medium text-white/60">System</p>
            <h3 className="mt-1 text-lg font-extrabold">Team Sync</h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-medium text-white/60">Module</p>
            <h3 className="mt-1 text-lg font-extrabold">Admin</h3>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-medium text-white/60">View</p>
            <h3 className="mt-1 text-lg font-extrabold">Employees</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeHeader;
