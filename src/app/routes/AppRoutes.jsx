import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },  {
      path: "/register",
      element: <RegisterPage />,
    },  {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
