"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLogin } from "../contexts/LoginContext";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRole: 'ADMIN' | 'CLIENT'; // Ajuste conforme seu back-end
}

export function RoleGuard({ children, allowedRole }: RoleGuardProps) {
  const { user, loading } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else if (user.role !== allowedRole) {
        // Se o cargo estiver errado, manda para a tela correta dele
        const target = user.role === 'ADMIN' ? '/admin' : '/client';
        router.replace(target);
        alert("Você não tem permissão para acessar esta página.");
      }
    }
  }, [user, loading, allowedRole, router]);

  if (loading || !user || user.role !== allowedRole) {
    return <div>Carregando...</div>; // Ou um esqueleto de loading
  }

  return <>{children}</>;
}