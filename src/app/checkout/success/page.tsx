import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-white">
      <div className="bg-emerald-50 p-6 rounded-full mb-8 text-emerald-600 animate-bounce">
        <CheckCircle2 size={64} />
      </div>
      <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Order Confirmed!</h1>
      <p className="text-slate-500 text-xl max-w-lg mb-12">
        Thank you for choosing Aura Boutique. We have received your order and are preparing your items with the utmost care.
      </p>
      <Link 
        href="/" 
        className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl"
      >
        Continue Shopping
      </Link>
    </main>
  );
}