"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  // Extraemos totalItems e isMounted del contexto actualizado
  const { totalItems, isMounted } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic group-hover:text-emerald-600 transition-colors">
            Aura<span className="text-emerald-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/collections" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Collections</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all hidden md:block">
            <Search size={20} />
          </button>
          
          <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all hidden md:block">
            <User size={20} />
          </button>

          {/* Cart Icon with Counter */}
          <Link 
            href="/cart" 
            className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all relative group"
          >
            <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
            
            {/* MODIFICACIÓN: Solo mostramos el contador si el componente está montado 
              y hay items. Esto soluciona errores de sincronización.
            */}
            {isMounted && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-black text-slate-900 uppercase tracking-tighter"
          >
            Home
          </Link>
          <Link 
            href="/collections" 
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-black text-slate-900 uppercase tracking-tighter"
          >
            Collections
          </Link>
        </div>
      )}
    </nav>
  );
}