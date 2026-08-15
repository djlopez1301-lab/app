'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { createEmployee } from '../actions'

export default function UserModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    try {
      const res = await createEmployee(formData)
      if (res?.error) {
        setError(res.error)
        setLoading(false)
      } else {
        setLoading(false)
        onClose()
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error del servidor. Por favor revisa que agregaste la llave correctamente en Vercel.";
      setError(errorMessage)
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-secondary/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-apple-lg w-full max-w-md overflow-hidden relative">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-brand-secondary">Registrar Empleado</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form action={handleSubmit} className="p-6 space-y-4 text-left">
          {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input name="name" type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <input name="email" type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña Temporal</label>
            <input name="password" type="password" required minLength={6} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rol en el Sistema</label>
            <select name="role" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none bg-white">
              <option value="Gestor de Ayudas">Gestor de Ayudas</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
          
          <div className="pt-4 flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">Cancelar</button>
            <button type="submit" disabled={loading} className="flex-1 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-medium rounded-xl transition-colors disabled:opacity-70">
              {loading ? 'Guardando...' : 'Guardar Empleado'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
