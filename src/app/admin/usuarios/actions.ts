'use server'

import { createAdminClient } from '@/utils/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function getEmployees() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('empleados')
      .select('*')
      .order('created_at', { ascending: false })
      
    if (error) {
      console.error('Error fetching employees:', error)
      return []
    }
    return data
  } catch (e) {
    console.error('Admin client error:', e)
    return []
  }
}

export async function createEmployee(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const role = formData.get('role') as string
    const password = formData.get('password') as string

    const supabase = createAdminClient()

    // 1. Crear el usuario en auth.users
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })

    if (authError) {
      return { error: 'No se pudo crear el usuario: ' + authError.message }
    }

    if (!authData || !authData.user) {
      return { error: 'Error inesperado: Supabase no devolvió los datos del usuario.' }
    }

    // 2. Crear el perfil en la tabla pública empleados
    const { error: dbError } = await supabase
      .from('empleados')
      .insert({
        id: authData.user.id,
        name,
        email,
        role,
        status: 'Activo'
      })

    if (dbError) {
      // Revertir si la tabla falla
      await supabase.auth.admin.deleteUser(authData.user.id)
      return { error: 'Error al guardar el perfil en la base de datos: ' + dbError.message }
    }

    revalidatePath('/admin/usuarios')
    return { success: true }
  } catch (err: any) {
    console.error("Critical error in createEmployee:", err);
    return { error: "Error interno del servidor al crear empleado: " + (err.message || String(err)) }
  }
}

export async function toggleEmployeeStatus(id: string, currentStatus: string) {
  const supabase = createAdminClient()
  const newStatus = currentStatus === 'Activo' ? 'Inactivo' : 'Activo'
  
  const { error } = await supabase
    .from('empleados')
    .update({ status: newStatus })
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/usuarios')
  return { success: true }
}
