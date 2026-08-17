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
  } catch (err) {
    console.error("Critical error in createEmployee:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return { error: "Error interno del servidor al crear empleado: " + errorMessage }
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

export async function updateEmployee(formData: FormData) {
  try {
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const role = formData.get('role') as string

    const supabase = createAdminClient()

    const { error: dbError } = await supabase
      .from('empleados')
      .update({ name, role })
      .eq('id', id)

    if (dbError) {
      return { error: 'Error al actualizar el perfil en la base de datos: ' + dbError.message }
    }

    revalidatePath('/admin/usuarios')
    return { success: true }
  } catch (err) {
    console.error("Critical error in updateEmployee:", err);
    return { error: "Error interno del servidor al actualizar empleado." }
  }
}

export async function deleteEmployee(id: string) {
  try {
    const supabase = createAdminClient()

    // Eliminar de Supabase Auth (esto eliminará automáticamente de public.empleados por ON DELETE CASCADE)
    const { error: authError } = await supabase.auth.admin.deleteUser(id)

    if (authError) {
      return { error: 'Error al eliminar el usuario: ' + authError.message }
    }

    revalidatePath('/admin/usuarios')
    return { success: true }
  } catch (err) {
    console.error("Critical error in deleteEmployee:", err);
    return { error: "Error interno del servidor al eliminar empleado." }
  }
}
