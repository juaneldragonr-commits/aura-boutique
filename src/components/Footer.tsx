import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Sección de Marca - Branding en Negro y Verde */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
              Aura<span className="text-emerald-600">.</span>
            </span>
          </Link>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs italic font-medium">
            Elevating your style daily with premium garments designed to last. 
            Quality, comfort and elegance in every stitch.
          </p>
        </div>

        {/* Enlaces de Tienda - Paleta Café (Stone) con Hover Verde */}
        <div>
          <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-8">Store</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/productos" className="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/nueva-coleccion" className="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors">
                New Collection
              </Link>
            </li>
            <li>
              <Link href="/best-sellers" className="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors">
                Best Sellers
              </Link>
            </li>
          </ul>
        </div>

        {/* Sección de Ayuda */}
        <div>
          <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-8">Help</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/envios" className="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors">
                Shipping and Delivery
              </Link>
            </li>
            <li>
              <Link href="/devoluciones" className="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors">
                Exchanges and Returns
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-stone-400 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior - Minimalismo en Blanco y Verde */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-stone-300 font-black uppercase tracking-[0.3em]">
          &copy; 2026 AURA BOUTIQUE. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] bg-emerald-50 px-4 py-1 rounded-full">
            Made by Juan David Rianho
          </span>
          <div className="flex gap-4">
            <Link href="/privacidad" className="text-[10px] text-stone-300 hover:text-slate-900 font-bold uppercase tracking-widest transition-colors">
              Privacy
            </Link>
            <Link href="/terminos" className="text-[10px] text-stone-300 hover:text-slate-900 font-bold uppercase tracking-widest transition-colors">
              Terms 
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}