import { getShopifyProducts } from "@/src/lib/shopify";
import ProductCard from "@/src/components/ProductCard";

export default async function Home() {
  const products = await getShopifyProducts();

  return (
    <main className="min-h-screen bg-slate-50 p-8 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-6xl font-black text-slate-900 mb-4">Aura Boutique</h1>
          <p className="text-slate-500 text-xl">Colección Premium de Temporada</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}