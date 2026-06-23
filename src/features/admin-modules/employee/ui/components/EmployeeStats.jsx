import { Activity, BriefcaseBusiness, UserPlus, Users } from "lucide-react";
import EmployeeStatCard from "./EmployeeStatCard";

const EmployeeStats = ({ employees = [] }) => {
  const activeEmployees = employees.filter((emp) => emp?.status === "active");

  const departments = new Set(
    employees.map((emp) => emp?.department).filter(Boolean),
  );

  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <EmployeeStatCard
        title="Total Employees"
        value={employees.length}
        icon={<Users />}
        badge="All"
        tone="primary"
      />

      <EmployeeStatCard
        title="Active Now"
        value={activeEmployees.length}
        icon={<Activity />}
        badge="Live"
        tone="success"
      />

      <EmployeeStatCard
        title="Departments"
        value={departments.size || 0}
        icon={<BriefcaseBusiness />}
        badge="Updated"
        tone="warning"
      />

      <EmployeeStatCard
        title="Current Page"
        value={employees.length}
        icon={<UserPlus />}
        badge="Loaded"
        tone="primary"
      />
    </section>
  );
};

export default EmployeeStats;
