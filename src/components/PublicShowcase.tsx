import React, { useState } from 'react';
import { PortfolioItem, PortfolioCategory } from '../types';
import { INITIAL_PORTFOLIO, WA_PHONE_BABY_JONS } from '../data/initialData';
import { Sparkles, Calculator, FolderOpen, ArrowRight, X, CheckCircle2, TrendingUp, Radio } from 'lucide-react';

interface PublicShowcaseProps {
  onOpenCalculator: () => void;
  onOpenPortal: () => void;
}

export const PublicShowcase: React.FC<PublicShowcaseProps> = ({
  onOpenCalculator,
  onOpenPortal
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? INITIAL_PORTFOLIO
    : INITIAL_PORTFOLIO.filter(item => item.category === activeCategory);

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
              <span>CREATIVE DIRECTION & VISUAL STRATEGY • NICARAGUA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
              Transformo marcas e ideas en{' '}
              <span className="gradient-text italic">Experiencias Digitales de Alto Valor</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Desarrollo de identidad visual premium, producción audiovisual de alta conversión (Reels/TikTok), aplicaciones web y sistemas a la medida para negocios en Nicaragua y Latinoamérica.
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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
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

      {/* Filterable Portfolio Showcase */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2 uppercase tracking-tight">
              <span>Trabajos Destacados</span>
              <span className="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30 font-semibold">
                Casos de Éxito
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Explora proyectos reales desarrollados para marcas de alto impacto en Nicaragua y la región.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              id="cat-all"
              className={`px-4 py-2 rounded-xl font-bold transition whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              Todos ({INITIAL_PORTFOLIO.length})
            </button>
            <button
              onClick={() => setActiveCategory('branding')}
              id="cat-branding"
              className={`px-4 py-2 rounded-xl font-bold transition whitespace-nowrap ${
                activeCategory === 'branding'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              Branding & Identidad
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              id="cat-web"
              className={`px-4 py-2 rounded-xl font-bold transition whitespace-nowrap ${
                activeCategory === 'web'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              Web Apps / PWA
            </button>
            <button
              onClick={() => setActiveCategory('media')}
              id="cat-media"
              className={`px-4 py-2 rounded-xl font-bold transition whitespace-nowrap ${
                activeCategory === 'media'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              Audiovisual & Reels
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden glow-card-hover flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="relative h-48 bg-slate-950 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {item.categoryLabel}
                </span>
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-slate-300 font-semibold text-[10px] px-2 py-0.5 rounded-md border border-slate-700">
                  {item.year}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-indigo-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  {item.results && (
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="font-semibold">{item.results}</span>
                    </div>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedItem(item)}
                    id={`btn-view-details-${item.id}`}
                    className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-1 transition"
                  >
                    <span>Ver Ficha Completa</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={onOpenPortal}
                    className="text-slate-400 hover:text-white text-[11px] flex items-center gap-1"
                    title="Ver cómo se entregan los proyectos en el Portal"
                  >
                    <FolderOpen className="w-3 h-3 text-slate-400" />
                    <span>Ver Proceso</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden relative space-y-4 max-h-[90vh] flex flex-col">
            
            {/* Header Image */}
            <div className="relative h-52 bg-slate-950 shrink-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white p-2 rounded-full transition border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedItem.categoryLabel}
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 overflow-y-auto">
              <div>
                <h3 className="text-xl font-extrabold text-white">{selectedItem.title}</h3>
                <p className="text-xs text-indigo-400 font-semibold mt-0.5">Cliente: {selectedItem.client} • {selectedItem.year}</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedItem.desc}</p>
              </div>

              {selectedItem.results && (
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Impacto comercial:</strong> {selectedItem.results}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">Entregables Desarrollados:</h4>
                <div className="space-y-2">
                  {selectedItem.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenCalculator();
                  }}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 px-4 rounded-xl transition flex-1 text-center"
                >
                  Cotizar Proyecto Similar
                </button>

                <a
                  href={`https://wa.me/${WA_PHONE_BABY_JONS}?text=Hola%20Baby%20Jons!%20Me%20interes%C3%B3%20mucho%20el%20proyecto%20de%20${encodeURIComponent(selectedItem.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-xl transition flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
