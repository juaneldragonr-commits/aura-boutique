import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Columna 1: Branding */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-black text-white mb-6 tracking-tighter">
            AURA<span className="text-emerald-500">.</span>
          </h2>
          <p className="max-w-xs text-slate-400 leading-relaxed">
            Elevando tu estilo cotidiano con prendas premium diseñadas para durar. 
            Calidad, confort y elegancia en cada costura.
          </p>
        </div>

        {/* Columna 2: Links Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Tienda</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Todos los productos</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Nueva Colección</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Ayuda</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Envíos y Entregas</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Cambios y Devoluciones</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
        <p>© 2026 Aura Boutique. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors text-emerald-600 font-bold">Hecho por Juan David Dragon</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
          <Link href="#" className="hover:text-white transition-colors">Términos</Link>
        </div>
      </div>
    </footer>
  );
}