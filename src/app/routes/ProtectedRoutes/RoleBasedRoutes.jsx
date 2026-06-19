import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const RoleBasedRoutes = ({ allowedRoles }) => {
  let { employee } = useSelector((store) => store.auth);

  if (!allowedRoles.includes(employee?.role)) {
    return <Navigate to={"/unauthorized"} />;
  }

  return <Outlet />;
};

export default RoleBasedRoutes;
