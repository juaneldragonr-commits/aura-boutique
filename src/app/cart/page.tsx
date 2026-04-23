"use client";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft, ShoppingBag, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, isMounted } = useCart();

  // Evita errores de hidratación al cargar localStorage
  if (!isMounted) return null;

  if (cart.length === 0) {
    return (
      <main className="min-h-[85vh] flex flex-col items-center justify-center p-8 text-center bg-white">
        {/* Icono con fondo café muy suave (stone) */}
        <div className="bg-stone-50 p-8 rounded-full mb-8 border border-stone-100">
          <ShoppingBag size={64} className="text-stone-300" />
        </div>
        
        {/* Título en Negro con acento Verde Esmeralda */}
        <h1 className="text-4xl font-black text-slate-900 mb-3 uppercase tracking-tighter italic">
          Your cart is <span className="text-emerald-600">empty</span>
        </h1>
        <p className="text-stone-500 mb-10 text-lg max-w-md leading-relaxed">
          It looks like you haven't added any items from our premium collection to your selection yet.
        </p>

        {/* Botón en Verde Esmeralda */}
        <Link 
          href="/" 
          className="bg-emerald-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 text-sm"
        >
          Explore Store
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado con tonos café y negro */}
        <div className="flex items-center gap-6 mb-16 border-b border-stone-100 pb-8">
          <Link href="/" className="group p-3 hover:bg-stone-50 rounded-full transition-all border border-stone-100 shadow-sm">
            <ArrowLeft size={24} className="text-stone-600 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              My <span className="text-emerald-600">Selection</span>
            </h1>
            <p className="text-stone-400 font-bold uppercase tracking-widest text-[10px] mt-2">
              {totalItems} Items ready for shipping
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Lista de Productos - Estilo Limpio en Blanco y Café */}
          <div className="lg:col-span-8 space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="group flex flex-col sm:flex-row items-center gap-8 pb-8 border-b border-stone-50 last:border-0 transition-all">
                {/* Imagen con sombra café suave */}
                <div className="relative w-40 h-52 rounded-2xl overflow-hidden bg-stone-50 flex-shrink-0 shadow-sm border border-stone-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between h-full py-2 text-center sm:text-left">
                  <div>
                    <h3 className="font-black text-2xl text-slate-900 uppercase tracking-tight mb-1">{item.title}</h3>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4 italic">Aura Exclusive Line</p>
                    <p className="text-emerald-600 font-black text-2xl">${item.price.toFixed(2)} <span className="text-xs text-stone-300 ml-1 italic font-medium uppercase">USD</span></p>
                  </div>
                  
                  {/* Controles de Cantidad con diseño Minimalista Stone */}
                  <div className="flex items-center justify-center sm:justify-start gap-6 mt-6">
                    <div className="flex items-center bg-stone-50 rounded-full border border-stone-100 p-1 shadow-inner">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-full transition-all text-stone-500 shadow-sm hover:text-emerald-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-5 font-black text-slate-900 text-lg">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-full transition-all text-stone-500 shadow-sm hover:text-emerald-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-stone-300 hover:text-red-500 text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de Compra - Tarjeta en Café muy suave (Stone-50) */}
          <div className="lg:col-span-4">
            <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 sticky top-32 shadow-sm">
              <h2 className="text-xs font-black text-stone-400 uppercase tracking-[0.3em] mb-10 text-center">Order Summary</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between text-stone-500 font-bold uppercase text-[11px] tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-slate-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-stone-500 font-bold uppercase text-[11px] tracking-widest">
                  <span>Premium Shipping</span>
                  <span className="text-emerald-600">Free</span>
                </div>
                
                <div className="pt-8 mt-8 border-t border-stone-200">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] block mb-1">Final Amount</span>
                      <p className="text-4xl font-black text-slate-900 leading-none tracking-tighter">${totalPrice.toFixed(2)}</p>
                    </div>
                    <span className="text-xs font-black text-stone-300 mb-1">USD</span>
                  </div>
                </div>
              </div>

              {/* Botón Final en Verde Aura */}
              <Link 
                href="/checkout" 
                className="block w-full text-center py-6 bg-emerald-600 text-white rounded-full font-black text-sm hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 uppercase tracking-[0.3em] active:scale-95"
              >
                Secure Checkout
              </Link>
              
              <p className="mt-8 text-center text-[9px] text-stone-400 uppercase tracking-[0.2em] font-bold italic">
                Aura Premium Experience &copy; 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}