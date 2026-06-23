import DepartmentPage from "../../../features/admin-modules/departments/ui/pages/DepartmentPage";
import DocumentPage from "../../../features/admin-modules/documents/ui/pages/DocumentPage";
import TaskPage from "../../../features/admin-modules/tasks/ui/pages/TaskPage";
import EmployeePage from "../../../features/admin-modules/employee/ui/pages/EmployeePage";
import AddEmployeePage from "../../../features/admin-modules/employee/ui/pages/AddEmployeePage";

export const adminRoutes = [
  {
    path: "/home/departments",
    element: <DepartmentPage />,
  },
  {
    path: "/home/documents",
    element: <DocumentPage />,
  },
  {
    path: "/home/tasks",
    element: <TaskPage />,
  },
  {
    path: "/home/employees",
    element: <EmployeePage />,
  },
  {
    path: "/home/add-employee",
    element: <AddEmployeePage />,
  }
];
