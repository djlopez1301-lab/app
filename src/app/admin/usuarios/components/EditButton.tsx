'use client'

import { useState } from 'react'
import EditUserModal from './EditUserModal'

type UserProps = {
  id: string;
  name: string;
  role: string;
}

export default function EditButton({ user }: { user: UserProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="text-brand-primary hover:text-brand-secondary font-medium transition-colors"
      >
        Editar
      </button>
      
      <EditUserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={user}
      />
    </>
  )
}
