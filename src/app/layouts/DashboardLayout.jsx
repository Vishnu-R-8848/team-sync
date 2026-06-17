import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  let { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return <div>DashboardLayout</div>;
};

export default DashboardLayout;
