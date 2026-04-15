import { getShopifyProducts } from "@/src/lib/shopify";
import ProductCard from "@/src/components/ProductCard";

export default async function Home() {
  const products = await getShopifyProducts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Refinada */}
      <section className="py-20 px-8 text-center bg-slate-50 border-b border-slate-100">
        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">
          Aura Boutique
        </h1>
        <p className="text-slate-500 text-xl font-medium uppercase tracking-[0.2em]">
          Colección Premium de Temporada
        </p>
      </section>

      {/* Grid de Productos */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}