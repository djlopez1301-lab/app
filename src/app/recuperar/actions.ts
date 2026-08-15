'use server'

import { createClient } from '@/utils/supabase/server'

export async function resetPassword(formData: FormData) {
  try {
    const email = formData.get('email') as string
    const supabase = createClient()

    // Enviar correo de recuperación. Redirigirá a /auth/callback primero para establecer sesión SSR, 
    // y luego a /actualizar-clave
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/callback?next=/actualizar-clave`,
    })

    if (error) {
      return { error: 'Error al enviar el correo: ' + error.message }
    }

    return { success: true }
  } catch {
    return { error: 'Ocurrió un error inesperado al intentar enviar el correo de recuperación.' }
  }
}
