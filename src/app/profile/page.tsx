"use client";

import { User, Package, Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
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
              <h2 className="font-bold text-slate-900">Juan David</h2>
              <p className="text-slate-500 text-sm">juan@example.com</p>
            </div>
            
            <nav className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">Orders</button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">Addresses</button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-2">
                <Settings size={16} /> Settings
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 font-medium flex items-center gap-2 mt-4">
                <LogOut size={16} /> Logout
              </button>
            </nav>
          </div>

          {/* Área de Contenido Principal */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Package className="text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
              </div>
              <p className="text-slate-500">You haven't placed any orders yet.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}