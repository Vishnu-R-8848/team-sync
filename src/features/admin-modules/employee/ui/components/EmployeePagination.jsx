import { ChevronLeft, ChevronRight } from "lucide-react";
import EmployeeButton from "./EmployeeButton";

const EmployeePagination = ({ pagination = {}, onPageChange = () => {} }) => {
  const page = pagination?.page || pagination?.currentPage || 1;
  const totalPages = pagination?.totalPages || pagination?.pages || 1;
  const total = pagination?.total || pagination?.totalEmployees || 0;
  const limit = pagination?.limit || 20;

  const start = total === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className="flex flex-col gap-4 border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-[var(--text-secondary)]">
          Showing{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {start}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {end}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {total}
          </span>{" "}
          employees
        </p>

        <p className="mt-1 text-xs text-[var(--text-secondary)]">
          Page{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {page}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            {totalPages}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <EmployeeButton
          variant="secondary"
          disabled={isFirstPage}
          handleClick={() => onPageChange(page - 1)}
          icon={<ChevronLeft size={18} />}
          className="min-w-[120px]"
        >
          Previous
        </EmployeeButton>

        <EmployeeButton
          variant="primary"
          disabled={isLastPage}
          handleClick={() => onPageChange(page + 1)}
          icon={<ChevronRight size={18} />}
          className="min-w-[120px]"
        >
          Next
        </EmployeeButton>
      </div>
    </div>
  );
};

export default EmployeePagination;