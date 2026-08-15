'use client'

import { useState } from 'react'
import BrandLogo from "@/components/BrandLogo";
import { resetPassword } from "./actions";

export default function RecuperarPage() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    setSuccess(false)
    
    const result = await resetPassword(formData)
    
    if (result?.error) {
      setError(result.error)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-10">
          <BrandLogo className="scale-90" />
        </div>
        
        <div className="bg-white rounded-2xl shadow-apple-lg p-8 sm:p-10 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Recuperar Contraseña
          </h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
            Te enviaremos un enlace seguro a tu correo para que puedas crear una nueva contraseña.
          </p>
          
          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          {success ? (
            <div className="text-center space-y-6">
              <div className="bg-green-50 text-green-700 px-4 py-6 rounded-xl text-sm font-medium border border-green-100">
                ¡Enlace enviado! Revisa tu bandeja de entrada (y la carpeta de spam) para continuar.
              </div>
              <a href="/login" className="inline-block text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors">
                Volver al inicio de sesión
              </a>
            </div>
          ) : (
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
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 rounded-xl shadow-apple transition-all duration-300 hover:-translate-y-0.5 mt-2 disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Enviar Enlace'
                )}
              </button>

              <div className="text-center pt-2">
                <a href="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  Cancelar y volver
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
