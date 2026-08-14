import { Plus, Check, X, ShieldAlert } from "lucide-react";

// Mock data (Listo para conectar con Supabase Auth/DB)
const USERS = [
  { id: 1, name: "Carlos Martínez", email: "cmartinez@wilsonpineda.com", role: "Administrador", status: "Activo" },
  { id: 2, name: "Laura Gómez", email: "lgomez@wilsonpineda.com", role: "Gestor de Ayudas", status: "Inactivo" },
  { id: 3, name: "Mario Cerna", email: "mcerna@wilsonpineda.com", role: "Gestor de Ayudas", status: "Activo" },
];

export default function UsuariosPage() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Directorio de Empleados</h1>
          <p className="text-white/70 mt-1">Administra los accesos al sistema legislativo.</p>
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-white text-brand-primary hover:bg-gray-50 font-semibold py-2.5 px-5 rounded-xl shadow-apple transition-all duration-300 hover:-translate-y-0.5">
          <Plus className="w-5 h-5" />
          Registrar Empleado
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-apple-lg border border-gray-100/50 overflow-hidden">
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
            <tbody className="divide-y divide-gray-50">
              {USERS.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
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
                    <button className="text-brand-primary hover:text-brand-secondary font-medium transition-colors">
                      Editar
                    </button>
                    <span className="text-gray-300 mx-3">|</span>
                    <button className={`${user.status === 'Activo' ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'} font-medium transition-colors`}>
                      {user.status === 'Activo' ? 'Desactivar' : 'Activar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
