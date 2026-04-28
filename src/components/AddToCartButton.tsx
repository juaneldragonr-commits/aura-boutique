'use client';

import React from 'react';
import { useCart } from '@/context/CartContext'; // Importamos el hook del contexto

interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
  handle?: string; // Añadido opcional para compatibilidad
}

export default function AddToCartButton({ product }: { product: any }) {
  // Extraemos la función addToCart del contexto global
  const { addToCart } = useCart();

  const handleAdd = () => {
    // 1. Ejecutamos la lógica global para actualizar el carrito y localStorage
    addToCart(product);

    // 2. Mantenemos el log para confirmar que el evento se dispara
    console.log("Enviando al contexto global:", product.title);
    
    // Opcional: Puedes quitar el alert para que la experiencia sea más fluida
    // alert(`${product.title} se ha añadido al carrito.`);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-xl 
                 hover:bg-emerald-600 transition-all duration-300 transform active:scale-95
                 shadow-[0_20px_50px_rgba(0,0,0,0.2)] uppercase tracking-widest"
    >
      Add to Cart
    </button>
  );
}