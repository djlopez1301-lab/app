'use client'

import { toggleEmployeeStatus } from '../actions'

export default function ToggleStatusButton({ id, status }: { id: string, status: string }) {
  const isActive = status === 'Activo'
  
  return (
    <button 
      onClick={() => toggleEmployeeStatus(id, status)}
      className={`${isActive ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'} font-medium transition-colors`}
    >
      {isActive ? 'Desactivar' : 'Activar'}
    </button>
  )
}
