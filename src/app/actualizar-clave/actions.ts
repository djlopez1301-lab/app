'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function updatePassword(formData: FormData) {
  try {
    const password = formData.get('password') as string
    const supabase = createClient()

    // Supabase auth.updateUser() permite actualizar la contraseña si el usuario está autenticado.
    // El enlace de correo (a través del callback) ya inició una sesión autenticada.
    const { error } = await supabase.auth.updateUser({
      password: password
    })

    if (error) {
      return { error: 'Error al actualizar la contraseña: ' + error.message }
    }

  } catch {
    return { error: 'Ocurrió un error inesperado.' }
  }

  redirect('/admin/usuarios')
}
