import {
  Building,
  FileText,
  LayoutDashboard,
  List,
  MessageCircle,
  Settings,
  UserPen,
  Users,
  CalendarCheck,
} from "lucide-react";

export const employeeNavigationLinks = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard size={22} />,
  },
  {
    path: "/home/my-tasks",
    title: "My Task",
    icon: <List size={22} />,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: <MessageCircle size={22} />,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    icon: <CalendarCheck size={22} />,
  },
  {
    path: "/home/profile",
    title: "Profile",
    icon: <UserPen size={22} />,
  },
  {
    path: "/home/settings",
    title: "Settings",
    icon: <Settings size={22} />,
  },
];

export const adminNavigationLinks = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard size={22} />,
  },
  {
    path: "/home/tasks",
    title: "Tasks",
    icon: <List size={22} />,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: <MessageCircle size={22} />,
  },
  {
    path: "/home/departments",
    title: "Departments",
    icon: <Building size={22} />,
  },
  {
    path: "/home/employees",
    title: "Employees",
    icon: <Users size={22} />,
  },
  {
    path: "/home/documents",
    title: "Documents",
    icon: <FileText size={22} />,
  },
  {
    path: "/home/settings",
    title: "Settings",
    icon: <Settings size={22} />,
  },
];
