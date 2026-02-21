"use client";

import React, { useState } from 'react';
import { TrendingUp, AlertCircle, ExternalLink, RefreshCw, ShoppingCart, DollarSign } from 'lucide-react';

const MOCK_OPPORTUNITIES = [
  {
    id: 1,
    product: "LEGO Star Wars Millennium Falcon (Müller)",
    localPrice: 149.99,
    globalPrice: 195.00,
    margin: 45.01,
    roi: 30,
    location: "Gallery Samobor",
    status: "High Margin",
    category: "Lego"
  },
  {
    id: 2,
    product: "Optimum Nutrition Whey 2kg (Müller)",
    localPrice: 59.99,
    globalPrice: 78.50,
    margin: 18.51,
    roi: 31,
    location: "Müller Samobor",
    status: "In Stock",
    category: "Supplements"
  },
  {
    id: 3,
    product: "Sony WH-1000XM5 (Special Offer)",
    localPrice: 289.00,
    globalPrice: 345.00,
    margin: 56.00,
    roi: 19,
    location: "Kaufland Samobor",
    status: "Limited Time",
    category: "Tech"
  }
];

export default function ArbitrageDashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black italic bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent tracking-tighter">
            LUNA ARBITRAGE
          </h1>
          <p className="text-slate-500 mt-2 font-medium tracking-widest uppercase text-xs">
            Local Samobor → Global Market Monitor
          </p>
        </div>
        <button 
          className="bg-slate-900 border border-slate-800 p-3 rounded-2xl hover:border-sky-500/50 transition-all text-sky-400 active:scale-95"
          onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); }}
        >
          <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
        </button>
      </header>

      {/* Stats Summary */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-xl">
          <div className="flex items-center gap-3 text-sky-400 mb-4">
            <TrendingUp size={20} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Avg. Margin</span>
          </div>
          <p className="text-4xl font-black">26.5%</p>
        </div>
        <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-xl text-emerald-400">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart size={20} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Opportunities</span>
          </div>
          <p className="text-4xl font-black text-slate-200">12</p>
        </div>
        <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-xl text-amber-400">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign size={20} />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Projected Monthly Profit</span>
          </div>
          <p className="text-4xl font-black text-slate-200">€1.2k+</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Live Signals <span className="bg-sky-500/10 text-sky-400 text-[10px] px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_OPPORTUNITIES.map((opt) => (
            <div key={opt.id} className="group relative bg-slate-900/40 border border-white/10 rounded-[2rem] p-6 hover:border-sky-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] overflow-hidden">
              {/* Category Badge */}
              <div className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
                {opt.category}
              </div>

              <h3 className="text-lg font-bold pr-12 mb-4 leading-tight group-hover:text-sky-400 transition-colors">
                {opt.product}
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Local Price</p>
                    <p className="text-xl font-black tracking-tight">€{opt.localPrice.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Global Price</p>
                    <p className="text-xl font-black tracking-tight text-slate-400">€{opt.globalPrice.toFixed(2)}</p>
                  </div>
                </div>

                <div className="bg-slate-950/50 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-emerald-500/70 mb-0.5">Potential Profit</p>
                    <p className="text-2xl font-black text-emerald-400">+€{opt.margin.toFixed(2)}</p>
                  </div>
                  <div className="bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    <p className="text-emerald-500 font-black text-sm">{opt.roi}% ROI</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-slate-500">
                    <AlertCircle size={14} />
                    <span className="text-xs font-medium">{opt.location}</span>
                  </div>
                  <a href="#" className="text-sky-500 hover:text-sky-400 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        body {
          background-image: radial-gradient(circle at top right, rgba(14, 165, 233, 0.05), transparent 400px),
                            radial-gradient(circle at bottom left, rgba(79, 70, 229, 0.05), transparent 400px);
        }
      `}</style>
    </div>
  );
}
