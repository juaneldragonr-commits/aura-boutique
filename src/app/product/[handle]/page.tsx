"use client";
import { getShopifyProductByHandle } from "@/src/lib/shopify";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "@/src/context/CartContext";
import { use } from "react"; // Necesario para manejar params en Client Components de Next 15

export default function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = use(params);
  const { addToCart } = useCart();
  
  // En un proyecto real aquí usarías un hook de carga, 
  // pero como nuestros datos son locales en shopify.ts, esto funcionará:
  const product = use(getShopifyProductByHandle(handle) as any);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white p-8 lg:p-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
          <Image
            src={product.images.nodes[0]?.url}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">
            Nueva Colección
          </span>
          <h1 className="text-5xl font-black text-slate-900 mb-6">{product.title}</h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            {product.description}
          </p>
          
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-4xl font-black text-slate-900">
              ${product.priceRange.minVariantPrice.amount}
            </span>
            <span className="text-slate-400 font-bold uppercase">
              {product.priceRange.minVariantPrice.currencyCode}
            </span>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl hover:bg-emerald-600 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
          >
            Añadir al Carrito
          </button>

          <div className="mt-10 border-t border-slate-100 pt-10 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Envío Gratis</h4>
              <p className="text-sm text-slate-500">En pedidos superiores a $100</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Devoluciones</h4>
              <p className="text-sm text-slate-500">30 días de garantía</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}