"use client";

import { useState } from "react";
import { User, Package, Settings, LogOut, Edit3, Save, X, Mail } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'settings'>('orders');
  
  // Estado para el formulario de edición
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Juan David",
    email: "juan@example.com",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aquí puedes añadir tu lógica para llamar a tu backend
    console.log("Datos guardados:", formData);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar de Perfil */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-slate-100 p-4 rounded-full mb-4">
                <User size={48} className="text-slate-600" />
              </div>
              <h2 className="font-bold text-slate-900">{formData.name}</h2>
              <p className="text-slate-500 text-sm">{formData.email}</p>
            </div>
            
            <nav className="space-y-2">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'orders' ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-50 text-slate-700'}`}
              >
                Orders
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${activeTab === 'settings' ? 'bg-slate-100 text-slate-900' : 'hover:bg-slate-50 text-slate-700'}`}
              >
                <Settings size={16} /> Settings
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 font-medium flex items-center gap-2 mt-4">
                <LogOut size={16} /> Logout
              </button>
            </nav>
          </div>

          {/* Área de Contenido Principal */}
          <div className="md:col-span-2">
            {activeTab === 'orders' ? (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="text-emerald-600" />
                  <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
                </div>
                <p className="text-slate-500">You haven't placed any orders yet.</p>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-slate-900">
                    {isEditing ? "Edit Profile" : "Personal Information"}
                  </h2>
                  <button
                    onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                    className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] hover:text-emerald-700 transition-colors"
                  >
                    {isEditing ? <><Save size={16} /> Save</> : <><Edit3 size={16} /> Edit</>}
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <User size={18} className="text-slate-400" />
                        <span className="text-slate-900 font-semibold">{formData.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Email Address</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Mail size={18} className="text-slate-400" />
                        <span className="text-slate-900 font-semibold">{formData.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <button
                    onClick={() => setIsEditing(false)}
                    className="mt-6 flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    <X size={14} /> Cancel
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}