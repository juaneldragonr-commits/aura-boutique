"use client";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, ShoppingBag, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

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
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg"
        >
          Explorar Tienda
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Tu Carrito ({totalItems})</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Lista de Productos */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition-all hover:shadow-md">
                <div className="relative w-32 h-40 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-inner">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-black text-xl text-slate-900 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-emerald-600 font-bold text-lg mb-4">${item.price.toFixed(2)} USD</p>
                  
                  {/* Controles de Cantidad */}
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center border border-slate-200 rounded-xl p-1 bg-slate-50">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-white rounded-lg transition-colors text-slate-600"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-bold text-slate-900 w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-white rounded-lg transition-colors text-slate-600"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-4 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all group"
                >
                  <Trash2 size={24} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Resumen de Compra */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest">Resumen</h2>
            
            <div className="space-y-4 mb-10">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Subtotal</span>
                <span className="text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Envío Estimado</span>
                <span className="text-emerald-600 font-bold">Gratis</span>
              </div>
              <div className="border-t border-slate-100 pt-6 flex justify-between items-end">
                <div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Total a pagar</span>
                  <p className="text-3xl font-black text-slate-900 leading-none">${totalPrice.toFixed(2)}</p>
                </div>
                <span className="text-xs font-bold text-slate-400 pb-1">USD</span>
              </div>
            </div>

            <Link 
              href="/checkout/success" 
              className="block w-full text-center py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.1)] uppercase tracking-widest active:scale-95"
            >
              Finalizar Compra
            </Link>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
              <div className="h-[1px] w-8 bg-slate-100"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Aura Secure Checkout</p>
              <div className="h-[1px] w-8 bg-slate-100"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}