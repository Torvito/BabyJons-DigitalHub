import React from 'react';
import { WA_PHONE_BABY_JONS } from '../data/initialData';
import { MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-10 text-xs text-slate-500 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-extrabold text-xs">
              BJ
            </div>
            <div>
              <p className="font-extrabold text-slate-300 tracking-tight">
                BABY JONS — DIGITAL HUB & CLIENT OPERATING SYSTEM
              </p>
              <p className="text-[11px] text-slate-500 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-indigo-400 inline" />
                <span>Managua • Matagalpa • San Juan del Sur • Nicaragua & LATAM</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${WA_PHONE_BABY_JONS}?text=Hola%20Baby%20Jons!%20Te%20contacto%20desde%20tu%20sitio%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: +505 8766 9631</span>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} Baby Jons. Todos los derechos reservados.</p>
          <p>Estrategia visual y producción digital de alto impacto para negocios.</p>
        </div>
      </div>
    </footer>
  );
};
