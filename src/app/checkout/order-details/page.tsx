"use client";

import { ChevronLeft, Package, CheckCircle, Truck } from "lucide-react";
import Link from "next/link";

export default function OrderDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/checkout" className="flex items-center text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Checkout
        </Link>

        {/* Cabecera de éxito */}
        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl mb-8 flex flex-col items-center text-center">
          <div className="bg-emerald-100 p-3 rounded-full mb-4">
            <CheckCircle className="text-emerald-600 w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Order Confirmed!</h1>
          <p className="text-slate-600 mt-2">Thank you for your purchase. Your order #77281 is being processed.</p>
        </div>

        {/* Detalles del Pedido */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Package className="text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Product A</span>
              <span className="font-semibold text-slate-900">$150.00</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Product B</span>
              <span className="font-semibold text-slate-900">$205.85</span>
            </div>
            <div className="flex justify-between py-4 text-xl font-bold text-slate-900">
              <span>Total Paid</span>
              <span>$355.85</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3 text-slate-900">
              <Truck className="text-emerald-600" />
              <div>
                <p className="font-bold">Shipping to:</p>
                <p className="text-slate-600 text-sm">Calle 123 #45-67, Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}