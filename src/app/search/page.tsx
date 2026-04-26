"use client";

import { useSearchParams } from "next/navigation";
import NoResults from "../../components/NoResults";

// Allowed categories
const ALLOWED_CATEGORIES = ["pants", "jackets", "dresses", "shirts", "linen"];

// Mock database (Replace this with your actual data fetching)
const ALL_PRODUCTS = [
  { id: 1, name: "Aura Style Item 21", category: "jackets", price: "$27.08", image: "/placeholder.jpg" },
  { id: 2, name: "Aura Style Item 22", category: "dresses", price: "$94.48", image: "/placeholder.jpg" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const isAllowed = ALLOWED_CATEGORIES.includes(product.category.toLowerCase());
    const matchesQuery = product.name.toLowerCase().includes(query);
    return isAllowed && matchesQuery;
  });

  if (filteredProducts.length === 0) {
    return <NoResults query={query} />;
  }

  return (
    <div className="bg-white min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-12">
          Results for "{query}"
        </h1>
        
        {/* Grid layout matching Home page style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group border border-slate-100 rounded-2xl p-4 bg-white hover:shadow-lg transition-all">
              {/* Image Container */}
              <div className="aspect-square bg-slate-100 rounded-xl mb-4 overflow-hidden">
                 {/* Add your <img> tag here */}
              </div>
              
              {/* Product Info */}
              <h3 className="font-bold text-slate-900 text-lg mb-1">{product.name}</h3>
              <p className="text-emerald-600 font-bold text-lg mb-4">{product.price} <span className="text-slate-400 font-normal text-sm">USD</span></p>
              
              {/* Add to Cart Button */}
              <button className="w-full py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}