import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { ReactNode } from 'react';

export default function RequireAuth({ children, role }: { children: ReactNode; role?: string }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  if (role && (user?.role || 'admin') !== role) return <Navigate to="/" replace />;
  return children;
}
