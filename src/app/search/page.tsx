"use client";

import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext"; 
import NoResults from "@/components/NoResults"; 
import Image from "next/image";

// Definición de productos con las rutas corregidas apuntando a la carpeta /public/images/
const ALL_PRODUCTS = [
  { 
    id: 1, 
    name: "Aura Style Item 21", 
    price: "$27.08", 
    category: "jackets", 
    image: "/images/item21.jpg", 
    isReady: true
  },
  { 
    id: 2, 
    name: "Aura Style Item 22", 
    price: "$94.48", 
    category: "dresses", 
    image: "/images/item22.jpg", 
    isReady: true
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const { addToCart } = useCart();

  // Filtrado: solo muestra productos con isReady: true
  const filteredProducts = ALL_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(query) && product.isReady === true
  );

  if (filteredProducts.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-10">
          Results for "{query}"
        </h1>

        <div className="grid grid-grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group border border-slate-100 rounded-2xl p-4 bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image: Ahora apunta a la ruta pública correcta */}
              <div className="aspect-[3/4] bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority 
                />
              </div>

              <h3 className="font-bold text-slate-900 text-lg mb-1">{product.name}</h3>
              <p className="text-emerald-600 font-bold text-lg mb-4">
                {product.price} <span className="text-slate-400 text-sm font-normal">USD</span>
              </p>

              <button 
                onClick={() => addToCart(product)}
                className="w-full py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}