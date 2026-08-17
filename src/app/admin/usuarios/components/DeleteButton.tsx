'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteEmployee } from '../actions'
import { motion, AnimatePresence } from 'framer-motion'

export default function DeleteButton({ id, name }: { id: string, name: string }) {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleDelete() {
    setLoading(true)
    setError(null)
    const result = await deleteEmployee(id)
    if (result.error) {
      setError(result.error)
      setLoading(false)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-red-500 hover:text-red-700 font-medium transition-colors p-1"
        title="Eliminar usuario"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-secondary/80 backdrop-blur-sm"
              onClick={() => !loading && setIsOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-white rounded-2xl shadow-apple-lg w-full max-w-sm overflow-hidden relative z-10"
            >
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4 text-red-600">
                  <Trash2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eliminar Usuario</h3>
                <p className="text-sm text-gray-500 mb-6">
                  ¿Estás seguro que deseas eliminar permanentemente a <strong>{name}</strong>? Esta acción no se puede deshacer.
                </p>

                {error && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium border border-red-100 text-left">
                    {error}
                  </div>
                )}

                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsOpen(false)} 
                    disabled={loading}
                    className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors disabled:opacity-50"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleDelete}
                    disabled={loading} 
                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors disabled:opacity-70"
                  >
                    {loading ? 'Eliminando...' : 'Sí, eliminar'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
