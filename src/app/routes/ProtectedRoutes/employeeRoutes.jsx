import AttendancePage from "../../../features/employee-modules/attendance/ui/pages/AttendancePage";
import ProfilePage from "../../../features/employee-modules/profiles/ui/pages/ProfilePage";
import MyTaskPage from "../../../features/employee-modules/my-tasks/ui/pages/MyTaskPage";
export const employeeRoutes = [
  {
    path: "/home/attendance",
    element: <AttendancePage />,
  },
  {
    path: "/home/my-tasks",
    element: <MyTaskPage />,
  },
  {
    path: "/home/profile",
    element: <ProfilePage />,
  },
];
