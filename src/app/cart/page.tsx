"use client";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, totalItems } = useCart();

  // Calcular el precio total de todos los productos
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-slate-100 p-6 rounded-full mb-6">
          <ShoppingBag size={48} className="text-slate-400" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Tu carrito está vacío</h1>
        <p className="text-slate-500 mb-8 text-lg">Parece que aún no has añadido nada a tu colección.</p>
        <Link 
          href="/" 
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all"
        >
          Explorar Tienda
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8 lg:p-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="p-2 hover:bg-white rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-4xl font-black text-slate-900">Tu Carrito ({totalItems})</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Lista de Productos */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
                <div className="relative w-24 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                  <p className="text-emerald-600 font-bold">${item.price.toFixed(2)} USD</p>
                  <p className="text-sm text-slate-400 mt-1 font-medium text-uppercase">Cantidad: {item.quantity}</p>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Resumen de Compra */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl h-fit sticky top-28">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Resumen</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Envío</span>
                <span className="text-emerald-600 font-bold italic">Gratis</span>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-between">
                <span className="text-xl font-black text-slate-900">Total</span>
                <span className="text-xl font-black text-slate-900">${totalPrice.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Tarea Actualizada: Link al Checkout Success */}
            <Link 
              href="/checkout/success" 
              className="block w-full text-center py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-emerald-600 transition-all shadow-lg"
            >
              Finalizar Compra
            </Link>
            
            <p className="text-center text-xs text-slate-400 mt-4 uppercase tracking-widest font-bold">
              Pago Seguro Garantizado
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}