import React from 'react';
import { ActiveView } from '../types';
import { Globe, UserCheck, LayoutDashboard, MessageSquare } from 'lucide-react';
import { WA_PHONE_BABY_JONS } from '../data/initialData';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => setActiveView('public')}
            id="brand-logo-btn"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-indigo-500/40 bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-950/60 group-hover:border-indigo-400 transition">
                <img 
                  src="/baby-jons-portrait.jpg" 
                  alt="Baby Jons" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to text initials if image is not loaded
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="font-extrabold tracking-tighter text-sm">BJ</span>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse" title="Disponible para proyectos"></span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition">
                  BABY JONS
                </span>
                <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
                  PRO OS
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Creative Director & Visual Strategist • Nicaragua
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveView('public')}
              id="nav-btn-public"
              className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 ${
                activeView === 'public'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Portafolio & Cotizador</span>
            </button>

            <button
              onClick={() => setActiveView('portal')}
              id="nav-btn-portal"
              className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 ${
                activeView === 'portal'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Portal Clientes</span>
            </button>

            <button
              onClick={() => setActiveView('admin')}
              id="nav-btn-admin"
              className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 ${
                activeView === 'admin'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard Baby Jons</span>
            </button>
          </nav>

          {/* Action WhatsApp Button */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WA_PHONE_BABY_JONS}?text=Hola%20Baby%20Jons!%20Me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20para%20un%20proyecto%20creativo.`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">WhatsApp Directo</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden border-t border-slate-800/80 py-2.5 gap-1 justify-around text-xs">
          <button
            onClick={() => setActiveView('public')}
            id="mobile-nav-public"
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition ${
              activeView === 'public' ? 'text-indigo-400 font-bold bg-indigo-950/40' : 'text-slate-400'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span className="text-[10px]">Portafolio</span>
          </button>
          <button
            onClick={() => setActiveView('portal')}
            id="mobile-nav-portal"
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition ${
              activeView === 'portal' ? 'text-indigo-400 font-bold bg-indigo-950/40' : 'text-slate-400'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span className="text-[10px]">Portal Cliente</span>
          </button>
          <button
            onClick={() => setActiveView('admin')}
            id="mobile-nav-admin"
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition ${
              activeView === 'admin' ? 'text-indigo-400 font-bold bg-indigo-950/40' : 'text-slate-400'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-[10px]">Dashboard</span>
          </button>
        </div>
      </div>
    </header>
  );
};
