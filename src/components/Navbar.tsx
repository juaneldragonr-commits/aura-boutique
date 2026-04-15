"use client";
import Link from "next/link";
import { ShoppingBag, Search, User } from "lucide-react";
import { useCart } from "@/src/context/CartContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Lado Izquierdo: Menú simple */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
          <Link href="/" className="hover:text-black transition-colors">Inicio</Link>
          
          {/* CAMBIO REALIZADO: Vinculamos a la ruta de colecciones */}
          <Link href="/collections" className="hover:text-black transition-colors">
            Colecciones
          </Link>
        </div>

        {/* Centro: Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-black tracking-tighter text-slate-900">
            AURA<span className="text-emerald-600">.</span>
          </h1>
        </Link>

        {/* Lado Derecho: Iconos y Carrito */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <Search size={20} className="text-slate-700" />
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-full transition-colors hidden sm:block">
            <User size={20} className="text-slate-700" />
          </button>
          
          <Link href="/cart" className="relative p-2 hover:bg-slate-50 rounded-full transition-colors">
            <ShoppingBag size={20} className="text-slate-700" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}