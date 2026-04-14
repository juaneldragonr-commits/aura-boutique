"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/src/context/CartContext"; // Importamos el hook

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    images: {
      nodes: { url: string }[];
    };
    priceRange: {
      minVariantPrice: { amount: string; currencyCode: string };
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart(); // Extraemos la función

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
            src={product.images.nodes[0]?.url}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{product.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-emerald-600 font-black text-xl">
            ${product.priceRange.minVariantPrice.amount}
          </p>
          <span className="text-xs font-bold text-slate-400 uppercase">
            {product.priceRange.minVariantPrice.currencyCode}
          </span>
        </div>
      </Link>
      
      {/* Botón conectado al carrito */}
      <button 
        onClick={() => addToCart(product)}
        className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors active:scale-95 transform"
      >
        Añadir al carrito
      </button>
    </motion.div>
  );
}