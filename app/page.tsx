"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, AlertCircle, ExternalLink, RefreshCw, ShoppingCart, DollarSign, Zap, Ghost, Radio, Layers } from 'lucide-react';

const MOCK_OPPORTUNITIES = [
  {
    id: 1,
    product: "LEGO Millennium Falcon",
    localPrice: 149.99,
    globalPrice: 195.00,
    margin: 45.01,
    roi: 30,
    location: "Gallery Samobor",
    status: "Strong Buy",
    category: "Lego",
    timestamp: "2m ago"
  },
  {
    id: 2,
    product: "Optimum Whey 2kg",
    localPrice: 59.99,
    globalPrice: 78.50,
    margin: 18.51,
    roi: 31,
    location: "Müller Samobor",
    status: "In Stock",
    category: "Supplements",
    timestamp: "14m ago"
  },
  {
    id: 3,
    product: "Sony WH-1000XM5",
    localPrice: 289.00,
    globalPrice: 345.00,
    margin: 56.00,
    roi: 19,
    location: "Kaufland Samobor",
    status: "Monitor",
    category: "Tech",
    timestamp: "1h ago"
  }
];

export default function ArbitrageDashboard() {
  const [loading, setLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-sky-500/30 overflow-x-hidden">
      {/* Dynamic Factor X: Interactive Neural Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.15) 0%, transparent 40%)`
        }}
      />
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
        {/* Navigation / Top Bar */}
        <nav className="flex justify-between items-center mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.6)]">
                <Zap size={20} className="text-black fill-current" />
             </div>
             <div>
                <h1 className="text-2xl font-black tracking-tighter leading-none">LUNA.CORE</h1>
                <p className="text-[10px] text-sky-500 font-bold uppercase tracking-[0.3em]">Arbitrage Engine v1.0</p>
             </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-4 text-[10px] font-black tracking-widest text-slate-500">
               <span className="flex items-center gap-1.5"><Radio size={12} className="text-emerald-500" /> SYSTEM ONLINE</span>
               <span className="flex items-center gap-1.5"><Layers size={12} /> BATCH: 0x82F</span>
            </div>
            <button 
              className="group bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all active:scale-90"
              onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1000); }}
            >
              <RefreshCw size={18} className={`${loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`} />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mb-20">
            <h2 className="text-7xl md:text-8xl font-black italic tracking-tighter mb-4 animate-in fade-in slide-in-from-left-8 duration-700">
                MONEY <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>ANOMALIES.</span>
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-sky-500 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter italic">Samobor Segment</div>
                <div className="text-slate-500 text-sm font-medium tracking-tight">Watching 14,202 SKUs across 5 sectors</div>
            </div>
        </section>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Big Signals */}
            <div className="lg:col-span-8 space-y-8">
                {MOCK_OPPORTUNITIES.map((opt, i) => (
                    <div 
                        key={opt.id} 
                        className="group relative bg-[#0a0a0a] border border-white/[0.05] rounded-[2.5rem] p-8 hover:bg-[#0f0f0f] transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-center"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        {/* Factor X: Abstract Background Shapes */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sky-500/5 blur-[80px] group-hover:bg-indigo-500/10 transition-colors" />
                        
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-sky-500 text-[10px] font-black uppercase tracking-widest">{opt.category}</span>
                                <span className="w-1 h-1 bg-white/20 rounded-full" />
                                <span className="text-slate-500 text-[10px] font-bold uppercase">{opt.timestamp}</span>
                            </div>
                            <h3 className="text-3xl font-black tracking-tight leading-none mb-6 group-hover:translate-x-2 transition-transform duration-500 italic">
                                {opt.product}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-400">
                                <AlertCircle size={14} className="text-sky-500" />
                                <span className="text-xs font-semibold uppercase tracking-wider">{opt.location}</span>
                            </div>
                        </div>

                        <div className="w-full md:w-auto flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Buy</p>
                                <p className="text-2xl font-black tracking-tighter">€{opt.localPrice.toFixed(0)}</p>
                            </div>
                            <div className="h-10 w-px bg-white/5" />
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-500 uppercase mb-2">ROI</p>
                                <p className="text-4xl font-black text-emerald-400 tracking-tighter">+{opt.roi}%</p>
                            </div>
                            <button className="bg-white text-black p-4 rounded-3xl hover:bg-sky-400 transition-colors">
                                <ExternalLink size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Column: System Intel */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-sky-500 rounded-[2.5rem] p-8 text-black">
                    <h4 className="text-sm font-black uppercase tracking-widest mb-6">Market Health</h4>
                    <p className="text-5xl font-black italic tracking-tighter mb-8 italic leading-none">OPTIMAL CONDITIONS</p>
                    <div className="space-y-4">
                        <div className="flex justify-between text-xs font-black border-b border-black/10 pb-2">
                            <span>MÜLLER SYNC</span>
                            <span>98%</span>
                        </div>
                        <div className="flex justify-between text-xs font-black border-b border-black/10 pb-2">
                            <span>LIDL DEALS</span>
                            <span>ACTIVE</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/[0.05] rounded-[2.5rem] p-8">
                     <Ghost size={40} className="text-slate-800 mb-6" />
                     <h4 className="text-xl font-bold mb-2 tracking-tight">LUNA'S EYE</h4>
                     <p className="text-sm text-slate-500 leading-relaxed italic">
                        "I'm currently identifying a price discrepancy in the baby care category. Awaiting local confirmation."
                     </p>
                </div>
            </div>
        </div>
      </main>

      <style jsx global>{`
        .stroke-text {
            color: transparent;
            -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
