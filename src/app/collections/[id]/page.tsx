import { getProductsByCategory } from "@/src/lib/shopify";
import ProductCard from "@/src/components/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function CategoryPage({ params }: { params: { id: string } }) {
  // Obtenemos los productos usando el ID de la URL
  const products = await getProductsByCategory(params.id);

  return (
    <main className="min-h-screen bg-slate-50 p-8 lg:p-20">
      <div className="max-w-7xl mx-auto">
        {/* Botón para volver */}
        <div className="flex items-center gap-4 mb-12">
          <Link 
            href="/collections" 
            className="p-3 bg-white hover:bg-slate-100 rounded-full shadow-sm transition-all border border-slate-200"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </Link>
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Colección</span>
            <h1 className="text-4xl font-black text-slate-900 leading-none">Resultados</h1>
          </div>
        </div>

        {/* Listado de Productos Filtrados */}
        {products.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-300">
            <p className="text-slate-400 text-xl font-medium">No encontramos productos en esta categoría.</p>
            <Link href="/collections" className="text-emerald-600 font-bold mt-4 inline-block hover:underline">
              Ver otras colecciones
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}