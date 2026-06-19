import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import UnauthorizedPage from "../../features/auth/ui/pages/UnauthorizedPage.jsx";

import PublicRoutes from "./ProtectedRoutes/PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import RoleBasedRoutes from "./ProtectedRoutes/RoleBasedRoutes";

import { currentLoggedEmployee } from "../../features/auth/states/auth/authActions";

import { commonRoutes } from "./commonRoutes";
import { adminRoutes } from "./ProtectedRoutes/AdminRoutes";
import { employeeRoutes } from "./ProtectedRoutes/EmployeeRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentLoggedEmployee());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <LoginPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <ProtectedRoutes />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            ...commonRoutes,

            {
              element: <RoleBasedRoutes allowedRoles={["admin"]} />,
              children: adminRoutes,
            },

            {
              element: <RoleBasedRoutes allowedRoles={["employee"]} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },

    {
      path: "/unauthorized",
      element: <UnauthorizedPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;