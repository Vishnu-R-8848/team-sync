import { useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../../apis/employeeApis";
import EmployeeStatusBadge from "./EmployeeStatusBadge";
import EmployeeActions from "./EmployeeActions";

const EmployeeRow = ({ employee }) => {
  const queryClient = useQueryClient();

  const name = employee?.name || "Employee";
  const email = employee?.email || "No email";
  const role = employee?.role || "employee";
  const department = employee?.department || "common";
  const status = employee?.status || "inactive";

  const avatar =
    employee?.avatar ||
    "https://ui-avatars.com/api/?name=" + encodeURIComponent(name);

  const joinedDate = employee?.createdAt
    ? new Date(employee.createdAt).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not available";

  const handleStatusToggle = async () => {
    try {
      const nextStatus = status === "active" ? "inactive" : "active";

      await updateEmployee(employee?._id, {
        status: nextStatus,
      });

      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });

      alert("Employee status updated");
    } catch (error) {
      console.log("employee status update failed", error);
      alert("Failed to update employee status");
    }
  };

  return (
    <tr className="border-b border-[var(--border-color)] transition last:border-b-0 hover:bg-[var(--bg-hover)]">
      <td className="px-6 py-6">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="h-14 w-14 rounded-2xl object-cover"
          />

          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold capitalize text-[var(--text-primary)]">
              {name}
            </h3>

            <p className="truncate text-sm text-[var(--text-secondary)]">
              {email}
            </p>
          </div>
        </div>
      </td>

      <td className="px-6">
        <span className="rounded-xl bg-[var(--bg-main)] px-4 py-2 text-sm font-semibold capitalize text-[var(--text-primary)]">
          {role}
        </span>
      </td>

      <td className="px-6 text-sm font-semibold capitalize text-[var(--text-primary)]">
        {department}
      </td>

      <td className="px-6">
        <EmployeeStatusBadge status={status} />
      </td>

      <td className="px-6 text-sm text-[var(--text-secondary)]">
        {joinedDate}
      </td>

      <td className="px-6">
        <EmployeeActions
          employee={employee}
          onEdit={() => console.log("Edit", employee)}
          onDelete={() => console.log("Delete", employee)}
          onInactive={handleStatusToggle}
        />
      </td>
    </tr>
  );
};

export default EmployeeRow;