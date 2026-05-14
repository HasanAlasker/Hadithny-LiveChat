import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  const { user, loading } = useAuthStore();

  if (loading) return <p></p>;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
}
