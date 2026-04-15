"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/src/context/CartContext";

// Actualizamos la interfaz para que acepte ambos formatos de datos
interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    images?: { nodes: { url: string }[] }; // Opcional para Shopify MOCK
    image?: string; // Opcional para API Platzi
    priceRange?: {
      minVariantPrice: { amount: string; currencyCode: string };
    };
    price?: number; // Para API Platzi
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  // Lógica segura para obtener la imagen
  const imageUrl = product.images?.nodes?.[0]?.url || product.image || (Array.isArray(product.images) ? product.images[0] : "");

  // Lógica segura para obtener el precio
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
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
              Sin imagen
            </div>
          )}
        </div>
        <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{product.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-emerald-600 font-black text-xl">
            ${price}
          </p>
          <span className="text-xs font-bold text-slate-400 uppercase">
            {currency}
          </span>
        </div>
      </Link>
      
      <button 
        onClick={() => addToCart(product)}
        className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors active:scale-95 transform"
      >
        Añadir al carrito
      </button>
    </motion.div>
  );
}