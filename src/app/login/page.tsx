'use client'

import { useState } from 'react'
import BrandLogo from "@/components/BrandLogo";
import { login } from "./actions";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    
    const result = await login(formData)
    
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-10">
          <BrandLogo className="scale-90" />
        </div>
        
        <div className="bg-white rounded-2xl shadow-apple-lg p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Acceso Administrativo
          </h2>
          
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium border border-red-100">
              {error}
            </div>
          )}
          
          <form action={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input 
                name="email"
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 bg-gray-50"
                placeholder="usuario@wilsonpineda.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input 
                name="password"
                type="password" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 bg-gray-50"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 rounded-xl shadow-apple transition-all duration-300 hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Sistema Interno Protegido &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
