import { SearchX } from "lucide-react";
import Link from "next/link";

export default function NoResults({ query }: { query: string }) {
  return (
    <div className="bg-white min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center animate-in fade-in zoom-in duration-500">
      {/* Subtle icon in light gray */}
      <div className="bg-slate-50 p-6 rounded-full mb-6">
        <SearchX size={48} className="text-slate-300" />
      </div>

      {/* Main heading (Black) */}
      <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
        NO RESULTS FOUND
      </h2>
      
      {/* Subtext with the query in green */}
      <p className="text-slate-600 max-w-sm mb-8">
        We couldn't find anything for <span className="font-bold text-emerald-600">"{query}"</span>.
      </p>

      {/* Button redirecting to /collections */}
      <Link 
        href="/collections" 
        className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors border-2 border-slate-900 hover:border-emerald-600"
      >
        Explore collections
      </Link>
    </div>
  );
}