import React from "react";
import { Outlet } from "react-router";

import { useEmployee } from "../../hooks/useEmployees";
import EmployeeHeader from "../components/EmployeeHeader";
import EmployeeStats from "../components/EmployeeStats";
import SearchFilterBar from "../components/SearchFilterBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeePagination from "../components/EmployeePagination";

const EmployeePage = () => {
  const {
    employees,
    pagination,
    isPending,
    isFetching,
    filters,
    handleSearchFilters,
    handlePageChange,
  } = useEmployee();

  if (isPending) {
    return (
      <div className="min-h-screen bg-[var(--bg-main)] p-8">
        <div className="space-y-8">
          <div className="h-40 animate-pulse rounded-3xl bg-[var(--bg-surface)]" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-36 animate-pulse rounded-3xl bg-[var(--bg-surface)]"
              />
            ))}
          </div>

          <div className="h-96 animate-pulse rounded-3xl bg-[var(--bg-surface)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-8">
      <div className="mx-auto">
        <Outlet />

        <EmployeeHeader />

        <EmployeeStats employees={employees} />

        <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
          <SearchFilterBar
            filters={filters}
            handleSearchFilters={handleSearchFilters}
          />

          {isFetching && (
            <div className="border-b border-[var(--border-color)] bg-[var(--bg-main)] px-6 py-3 text-sm font-semibold text-[var(--text-secondary)]">
              Loading latest employee data...
            </div>
          )}

          <EmployeeTable employees={employees} />

          <EmployeePagination
            pagination={pagination}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;