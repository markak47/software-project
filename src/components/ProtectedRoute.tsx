// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles: string[];
}) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;

  return children;
}
