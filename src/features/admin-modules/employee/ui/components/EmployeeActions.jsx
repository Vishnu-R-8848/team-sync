import { useEffect, useRef, useState } from "react";
import { MoreVertical, Pencil, Trash2, UserCheck, UserX } from "lucide-react";

const EmployeeActions = ({ onEdit, onDelete, onInactive, employee }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = employee?.status === "active";

  useEffect(() => {
    const handler = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-muted)] transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
      >
        <MoreVertical size={20} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-2 shadow-xl">
          <button
            type="button"
            onClick={() => {
              onEdit?.();
              setOpen(false);
            }}
            className="flex h-12 w-full items-center gap-3 rounded-xl px-4 text-[var(--text-primary)] transition-all hover:bg-[var(--bg-hover)]"
          >
            <Pencil size={18} />
            Update Employee
          </button>

          <button
            type="button"
            onClick={() => {
              onInactive?.();
              setOpen(false);
            }}
            className="flex h-12 w-full items-center gap-3 rounded-xl px-4 text-orange-500 transition-all hover:bg-[var(--bg-hover)]"
          >
            {isActive ? <UserX size={18} /> : <UserCheck size={18} />}
            {isActive ? "Mark Inactive" : "Mark Active"}
          </button>

          <button
            type="button"
            onClick={() => {
              onDelete?.();
              setOpen(false);
            }}
            className="flex h-12 w-full items-center gap-3 rounded-xl px-4 text-red-500 transition-all hover:bg-red-500/10"
          >
            <Trash2 size={18} />
            Delete Employee
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeActions;