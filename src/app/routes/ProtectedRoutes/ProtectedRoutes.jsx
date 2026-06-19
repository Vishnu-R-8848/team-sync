import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  let { employee, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!employee) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
