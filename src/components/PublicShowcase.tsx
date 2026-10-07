import React from 'react';
import { WA_PHONE_BABY_JONS } from '../data/initialData';
import { Sparkles, Calculator, FolderOpen, Radio } from 'lucide-react';
import { PortfolioShowcase } from './PortfolioShowcase';

interface PublicShowcaseProps {
  onOpenCalculator: () => void;
  onOpenPortal: () => void;
}

export const PublicShowcase: React.FC<PublicShowcaseProps> = ({
  onOpenCalculator,
  onOpenPortal
}) => {
  return (
    <div className="space-y-12">
      {/* Hero Banner with Baby Jons Neon Portrait & Value Proposition */}
      <div className="relative bg-gradient-to-b from-slate-900 via-[#0E1524] to-slate-950 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-800 overflow-hidden glow-card">
        {/* Glow ambient background orbs */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CREATIVE DIRECTION & VISUAL STRATEGY • ZARAGOZA, ESPAÑA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
              Transformo marcas e ideas en{' '}
              <span className="gradient-text italic">Experiencias Digitales de Alto Valor</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Desarrollo de identidad visual premium, producción audiovisual de alta conversión (Reels/TikTok), aplicaciones web y sistemas a la medida para negocios en Zaragoza y toda España.
            </p>

            {/* Quick credibility stats */}
            <div className="grid grid-cols-3 gap-3 pt-1 border-t border-slate-800/80">
              <div>
                <span className="text-xl sm:text-2xl font-black text-amber-400 block">100%</span>
                <span className="text-[11px] text-slate-400">Entregas a tiempo</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-indigo-400 block">+50</span>
                <span className="text-[11px] text-slate-400">Marcas asesoradas</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">Directo</span>
                <span className="text-[11px] text-slate-400">Soporte WhatsApp</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenCalculator}
                id="hero-btn-calculator"
                className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-xl shadow-indigo-950 flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Calcular Presupuesto de Proyecto</span>
              </button>

              <button
                onClick={onOpenPortal}
                id="hero-btn-portal"
                className="bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-slate-700 transition flex items-center gap-2 cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-indigo-400" />
                <span>Acceso a Portal de Clientes</span>
              </button>
            </div>
          </div>

          {/* Baby Jons Profile Art Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Outer Neon Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
              
              <div className="relative bg-slate-950 rounded-3xl p-3 border border-indigo-500/40 overflow-hidden shadow-2xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/baby-jons-portrait.jpg"
                    alt="Baby Jons Creative Director"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[25%_30%] group-hover:scale-105 transition duration-700"
                    style={{ objectPosition: '25% 30%' }}
                  />
                  {/* Neon overlay badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-indigo-500/40 flex items-center gap-2">
                    <Radio className="w-3 h-3 text-red-400 animate-ping" />
                    <span className="text-[10px] font-extrabold text-white tracking-wider">BABY JONS STUDIO</span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Baby Jons</h4>
                        <p className="text-[10px] text-slate-400">Director Creativo & Estratega</p>
                      </div>
                      <a
                        href={`https://wa.me/${WA_PHONE_BABY_JONS}?text=Hola%20Baby%20Jons!%20Vi%20tu%20perfil%20en%20el%20sitio%20web.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition flex items-center gap-1"
                      >
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Reusable Filterable Portfolio Showcase */}
      <PortfolioShowcase
        onOpenCalculator={onOpenCalculator}
        onOpenPortal={onOpenPortal}
        showProcessLink={true}
      />
    </div>
  );
};
