import { getShopifyProductByHandle, getProductsByCategory } from "@/src/lib/shopify";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "../../../components/AddToCartButton";

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  let product = await getShopifyProductByHandle(handle);

  if (!product) {
    const allProducts = await getProductsByCategory(""); 
    product = allProducts.find((p: any) => p.handle === handle);
  }

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-32 pb-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Grid responsivo: 1 columna en móvil, 12 columnas en escritorio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Imagen: Ocupa todo el ancho en móvil, 5/12 en escritorio */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-50 shadow-lg md:shadow-2xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Información: Ocupa todo el ancho en móvil, 7/12 en escritorio */}
          <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                Aura Exclusive Collection
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                {product.title}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-4xl font-light text-slate-900">${product.price}</span>
              <span className="text-sm font-bold text-slate-400">USD</span>
            </div>

            <div className="prose prose-slate">
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                {product.description || "Una prenda premium diseñada para el estilo y la comodidad en Aura Boutique."}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 w-full">
              {/* Botón adaptado al ancho disponible */}
              <AddToCartButton product={product} />
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-50 p-3 rounded-xl">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  Envío Gratuito
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-50 p-3 rounded-xl">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  Garantía Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}