import { Check, X, ShieldAlert } from "lucide-react";
import { getEmployees } from "./actions";
import HeaderActions from "./components/HeaderActions";
import ToggleStatusButton from "./components/ToggleStatusButton";
import EditButton from "./components/EditButton";

import { FadeIn } from "@/components/animations/FadeIn";
import { StaggeredTableBody, StaggeredItem } from "@/components/animations/StaggeredList";

export const dynamic = 'force-dynamic'

export default async function UsuariosPage() {
  const USERS = await getEmployees() || [];

  return (
    <div className="max-w-7xl mx-auto w-full">
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Directorio de Empleados</h1>
          <p className="text-white/70 mt-1">Administra los accesos al sistema legislativo.</p>
        </div>
        
        <HeaderActions />
      </FadeIn>
      
      <FadeIn delay={0.1} className="bg-white rounded-2xl shadow-apple-lg border border-gray-100/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-100 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-5">Nombre Completo</th>
                <th className="px-6 py-5">Correo</th>
                <th className="px-6 py-5">Rol</th>
                <th className="px-6 py-5">Estado</th>
                <th className="px-6 py-5 text-right">Acciones</th>
              </tr>
            </thead>
            <StaggeredTableBody className="divide-y divide-gray-50">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {USERS.map((user: any) => (
                <StaggeredItem key={user.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                      {user.role === 'Administrador' && <ShieldAlert className="w-3.5 h-3.5" />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${
                      user.status === 'Activo' 
                        ? 'bg-green-50 text-green-700 border border-green-200/50' 
                        : 'bg-red-50 text-red-700 border border-red-200/50'
                    }`}>
                      {user.status === 'Activo' ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <EditButton user={{ id: user.id, name: user.name, role: user.role }} />
                    <span className="text-gray-300 mx-3">|</span>
                    <ToggleStatusButton id={user.id} status={user.status} />
                  </td>
                </StaggeredItem>
              ))}
            </StaggeredTableBody>
          </table>
        </div>
        
        {USERS.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No hay empleados registrados. Presiona &quot;Registrar Empleado&quot; para comenzar.
          </div>
        )}
      </FadeIn>
    </div>
  );
}
