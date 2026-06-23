import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import EmployeeButton from "./EmployeeButton";

const FormActions = ({ isPending }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse gap-4 border-t border-[var(--border-color)] pt-8 sm:flex-row sm:items-center sm:justify-end">
      <EmployeeButton
        variant="secondary"
        handleClick={() => navigate("/home/employees")}
        className="min-w-[140px]"
      >
        Cancel
      </EmployeeButton>

      <EmployeeButton
        type="submit"
        disabled={isPending}
        icon={isPending ? null : <Plus size={18} />}
        className="min-w-[190px]"
      >
        {isPending ? "Creating..." : "Create Employee"}
      </EmployeeButton>
    </div>
  );
};

export default FormActions;
