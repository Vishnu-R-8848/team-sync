import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  let { employee, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (employee) {
    return <Navigate to="/home" replace={true} />;
  }

  return <Outlet />;
};

export default PublicRoutes;
