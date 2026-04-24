import { getShopifyProducts } from "@/src/lib/shopify";
import ProductCard from "@/src/components/ProductCard";

export default async function Home() {
  const products = await getShopifyProducts();

  // Esto te ayudará a depurar si el array está vacío o mal formado
  console.log("Cantidad de productos recibidos:", products?.length);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 text-center bg-slate-50 border-b border-slate-100">
        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">
          Aura Boutique
        </h1>
      <p className="text-slate-500 text-xl font-medium uppercase tracking-[0.2em]">
      Premium Seasonal Collection
      </p>
          </section>

      {/* Grid de Productos */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products && products.length > 0 ? (
            products
              .filter((product: any) => {
                // Filtro seguro: verifica que image exista, sea un string y no esté vacío
                const hasImage = typeof product?.image === 'string' && product.image.trim() !== "";
                return hasImage;
              })
              .map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
          ) : (
            <p className="col-span-full text-center text-slate-500">
              No products available at the moment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}