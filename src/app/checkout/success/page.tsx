// src/app/checkout/success/page.tsx
import Link from "next/link";
import { CheckCircle2, Truck, Package, Home } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center">
        
        {/* Icono de confirmación */}
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 p-4 rounded-full">
            <CheckCircle2 size={48} className="text-emerald-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Payment Confirmed!</h1>
        <p className="text-slate-500 mb-8">
          Thank you for your purchase at Aura Boutique. Your order #AX-77281 is being processed.
        </p>

        {/* Sección de "Envío en camino" */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="text-emerald-600" />
            <h3 className="font-bold text-slate-900">Shipping on the way</h3>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Estimated delivery: <span className="font-bold">April 28 - April 30, 2026</span>
          </p>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 w-1/3 h-full rounded-full"></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">Order placed: April 25, 2026</p>
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          <Link href="/">
            <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
              <Package size={18} />
              View Order Details
            </button>
          </Link>
          <Link href="/">
            <button className="w-full flex items-center justify-center gap-2 text-slate-500 py-3 rounded-xl font-medium hover:text-slate-900 transition-all">
              <Home size={18} />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}