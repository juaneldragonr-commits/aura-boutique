export default function PolicyPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-left">
        
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: April 24, 2026</p>

        {/* Contenido - Color de texto oscuro para legibilidad */}
        <div className="space-y-8 text-slate-700">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the Aura Boutique website, you accept and agree to be bound by these Terms of Service.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of the Site</h2>
            <p className="leading-relaxed">
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content present on this site, including images, designs, and text, is the property of Aura Boutique and is protected by copyright laws.
            </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}