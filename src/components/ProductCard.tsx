"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    images?: { nodes: { url: string }[] };
    image?: string;
    priceRange?: {
      minVariantPrice: { amount: string; currencyCode: string };
    };
    price?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);

  // 1. Obtener la URL original del producto
  const originalUrl = product.images?.nodes?.[0]?.url || product.image;

  // 2. Si hay error o no existe URL, usamos LoremFlickr con temática de moda
  // El parámetro lock=${product.id} garantiza que la imagen sea constante para cada producto
  const finalImageUrl = (imgError || !originalUrl) 
    ? `https://loremflickr.com/600/800/fashion,clothing,shirt?lock=${product.id}` 
    : originalUrl;

  const price = product.priceRange 
    ? product.priceRange.minVariantPrice.amount 
    : product.price;

  const currency = product.priceRange?.minVariantPrice.currencyCode || "USD";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
    >
      <Link href={`/product/${product.handle}`} className="flex-grow">
        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 mb-4 relative">
          <Image
            src={finalImageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            // Si la imagen falla (incluso la de LoremFlickr, aunque es improbable), marcamos error
            onError={() => setImgError(true)} 
          />
        </div>
        <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{product.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-emerald-600 font-black text-xl">${price}</p>
          <span className="text-xs font-bold text-slate-400 uppercase">{currency}</span>
        </div>
      </Link>
      
      <button 
        onClick={() => addToCart(product)}
        className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors active:scale-95 transform"
      >
        Add to Cart 
      </button>
    </motion.div>
  );
}