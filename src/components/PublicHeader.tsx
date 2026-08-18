'use client'

import BrandLogo from "./BrandLogo";
import Link from "next/link";
import { User, LogOut, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { logout } from "@/app/login/actions";

export default function PublicHeader() {
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    async function checkUser() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setIsAuth(true);
          const { data: emp } = await supabase
            .from('empleados')
            .select('role')
            .eq('id', user.id)
            .single();
          if (emp) {
            setRole(emp.role);
          }
        }
      } catch (e) {
        console.error("Error checking header auth state:", e);
      } finally {
        setLoading(false);
      }
    }
    checkUser();
  }, []);

  const isAdmin = role?.toLowerCase() === 'administrador';

  return (
    <header className="relative z-50 w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center scale-75 origin-left">
          <BrandLogo light={false} />
        </div>
        
        <div className="flex items-center gap-3">
          {!loading && isAuth ? (
            <>
              {isAdmin && (
                <Link 
                  href="/admin/usuarios" 
                  className="flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors py-2 px-4 rounded-lg bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/20 shadow-sm"
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span className="hidden sm:inline">Panel de Usuarios</span>
                </Link>
              )}
              
              <form action={logout}>
                <button 
                  type="submit" 
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-2 px-4 rounded-lg hover:bg-red-50 border border-gray-200 shadow-sm"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Cerrar Sesión</span>
                </button>
              </form>
            </>
          ) : !loading ? (
            <Link 
              href="/login" 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-100/50 border border-gray-200 shadow-sm"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Ingresar</span>
            </Link>
          ) : (
            <div className="w-24 h-9 bg-gray-100 animate-pulse rounded-lg"></div>
          )}
        </div>
      </div>
    </header>
  );
}
