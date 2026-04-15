'use client';

import React from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAdd = () => {
    // Aquí irá luego la lógica de tu context de carrito
    console.log("Añadido al carrito:", product.title);
    alert(`${product.title} se ha añadido al carrito.`);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-xl 
                 hover:bg-emerald-600 transition-all duration-300 transform active:scale-95
                 shadow-[0_20px_50px_rgba(0,0,0,0.2)] uppercase tracking-widest"
    >
      Añadir al carrito
    </button>
  );
}