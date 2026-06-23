import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees = [] }) => {
  if (!employees.length) {
    return (
      <div className="p-10 text-center">
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          No employees found
        </h3>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Try changing search or filter values.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px]">
        <thead className="bg-[var(--bg-main)]">
          <tr className="text-left">
            <th className="px-6 py-5 text-sm font-bold text-[var(--text-secondary)]">
              Profile
            </th>

            <th className="px-6 py-5 text-sm font-bold text-[var(--text-secondary)]">
              Role
            </th>

            <th className="px-6 py-5 text-sm font-bold text-[var(--text-secondary)]">
              Department
            </th>

            <th className="px-6 py-5 text-sm font-bold text-[var(--text-secondary)]">
              Status
            </th>

            <th className="px-6 py-5 text-sm font-bold text-[var(--text-secondary)]">
              Joined Date
            </th>

            <th className="px-6 py-5 text-sm font-bold text-[var(--text-secondary)]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <EmployeeRow
              key={employee?._id || employee?.email}
              employee={employee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;