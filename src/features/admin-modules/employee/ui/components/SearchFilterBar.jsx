import { ChevronDown, Search } from "lucide-react";

const SearchFilterBar = ({ filters = {}, handleSearchFilters = () => {} }) => {
  return (
    <div className="border-b border-[var(--border-color)] bg-[var(--bg-surface)] p-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-extrabold text-[var(--text-primary)]">
            Employee List
          </h2>

          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Search, filter, and manage employee records.
          </p>
        </div>

        <div className="relative w-full max-w-[420px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />

          <input
            type="text"
            placeholder="Filter by name or keyword..."
            value={filters.search || ""}
            onChange={(e) => handleSearchFilters("search", e.target.value)}
            className="h-14 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] pl-12 pr-4 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <div className="relative">
          <select
            value={filters.role || ""}
            onChange={(e) => handleSearchFilters("role", e.target.value)}
            className="h-14 min-w-[220px] appearance-none rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 pr-12 text-[var(--text-primary)] outline-none"
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />
        </div>

        <div className="relative">
          <select
            value={filters.department || ""}
            onChange={(e) =>
              handleSearchFilters("department", e.target.value)
            }
            className="h-14 min-w-[240px] appearance-none rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 pr-12 text-[var(--text-primary)] outline-none"
          >
            <option value="">All Departments</option>
            <option value="common">Common</option>
            <option value="developer">Developer</option>
            <option value="administrative">Administrative</option>
            <option value="security">Security</option>
            <option value="management">Management</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />
        </div>

        <div className="relative">
          <select
            value={filters.status || ""}
            onChange={(e) => handleSearchFilters("status", e.target.value)}
            className="h-14 min-w-[220px] appearance-none rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 pr-12 text-[var(--text-primary)] outline-none"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;