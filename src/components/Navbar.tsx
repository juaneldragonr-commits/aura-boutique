"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const { totalItems, isMounted } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push("/collections");
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-full"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsSearchOpen(false);
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic group-hover:text-emerald-600 transition-colors">
              Aura<span className="text-emerald-600">.</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/collections" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Collections</Link>
        </div>

        {/* Right: Search Bar and Icons */}
        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="flex items-center animate-in fade-in slide-in-from-right-4 duration-300">
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-40 md:w-48 bg-white border border-slate-200 rounded-full py-2 pl-4 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                className="ml-2 p-2 text-slate-600 hover:text-slate-900"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 animate-in fade-in duration-300">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all"
              >
                <Search size={20} />
              </button>
              
              <Link href="/profile" className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all hidden md:block">
                <User size={20} />
              </Link>

              <Link 
                href="/cart" 
                className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all relative group"
              >
                <ShoppingBag size={22} />
                {isMounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in duration-300">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 uppercase">Home</Link>
          <Link href="/collections" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 uppercase">Collections</Link>
          <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 uppercase">Profile</Link>
        </div>
      )}
    </nav>
  );
}