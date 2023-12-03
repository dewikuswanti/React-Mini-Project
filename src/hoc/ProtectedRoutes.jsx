import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const token = localStorage.getItem("accesstoken");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children || <Outlet />}</>;
}
