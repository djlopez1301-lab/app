'use client'

import BrandLogo from "./BrandLogo";
import Link from "next/link";
import { User } from "lucide-react";

export default function PublicHeader() {
  return (
    <header className="relative z-50 w-full bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center scale-75 origin-left">
          <BrandLogo light={false} />
        </div>
        
        <div>
          <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-100/50 border border-gray-200 shadow-sm">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Ingresar</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
