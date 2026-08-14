'use client'

import BrandLogo from "./BrandLogo";
import { LogOut } from "lucide-react";
import { logout } from "@/app/login/actions";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center scale-75 origin-left">
          <BrandLogo light={false} />
        </div>
        
        <form action={logout}>
          <button type="submit" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-100/50">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>
        </form>
      </div>
    </header>
  );
}
