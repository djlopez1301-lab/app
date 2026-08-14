'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import UserModal from './UserModal'

export default function HeaderActions() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center gap-2 bg-white text-brand-primary hover:bg-gray-50 font-semibold py-2.5 px-5 rounded-xl shadow-apple transition-all duration-300 hover:-translate-y-0.5"
      >
        <Plus className="w-5 h-5" />
        Registrar Empleado
      </button>
      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
