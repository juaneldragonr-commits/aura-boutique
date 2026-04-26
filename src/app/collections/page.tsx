import Link from "next/link";
import { MOCK_PRODUCTS } from "../../lib/mock-products";

export default function CollectionsPage() {
  // Extraemos las categorías únicas de tus productos y creamos una estructura para la UI
  const categories = Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category))).map(
    (category) => ({
      id: category,
      name: category,
      // Tomamos la imagen del primer producto que encontremos en esa categoría
      image: MOCK_PRODUCTS.find((p) => p.category === category)?.image || "/placeholder.jpg",
    })
  );

  return (
    <main className="min-h-screen bg-white p-8 lg:p-20">
      <div className="max-w-7xl mx-auto pt-10">
        <header className="mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
            Collections
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Explore our curated selection
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/collections/${category.id}`}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-10">
                <span className="text-emerald-400 text-sm font-bold uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Discover
                </span>
                <h2 className="text-4xl font-black text-white tracking-tight leading-none uppercase capitalize">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}