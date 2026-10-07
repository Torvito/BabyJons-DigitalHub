import React, { useState, useEffect } from 'react';
import { ActiveView, LeadItem } from './types';
import { INITIAL_LEADS, ADMIN_PIN } from './data/initialData';
import { Navbar } from './components/Navbar';
import { PublicShowcase } from './components/PublicShowcase';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ClientPortal } from './components/ClientPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { Lock, ShieldAlert, ArrowLeft, LogOut, KeyRound } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('public');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);
  
  // Persistent leads state
  const [leads, setLeads] = useState<LeadItem[]>(() => {
    try {
      const saved = localStorage.getItem('bj_leads_pipeline');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_LEADS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('bj_leads_pipeline', JSON.stringify(leads));
    } catch {
      // ignore
    }
  }, [leads]);

  const handleScrollToCalculator = () => {
    if (activeView !== 'public') {
      setActiveView('public');
      setTimeout(() => {
        const el = document.getElementById('calculator-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('calculator-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setIsAdminAuthenticated(true);
      setPinError(null);
      setPinInput('');
    } else {
      setPinError('PIN incorrecto');
      setPinInput('');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setActiveView('public');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {activeView === 'public' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <PublicShowcase
              onOpenCalculator={handleScrollToCalculator}
              onOpenPortal={() => setActiveView('portal')}
            />
            <QuoteCalculator />
          </div>
        )}

        {activeView === 'portal' && (
          <div className="animate-in fade-in duration-300">
            <ClientPortal />
          </div>
        )}

        {activeView === 'admin' && (
          <div className="animate-in fade-in duration-300">
            {!isAdminAuthenticated ? (
              /* PIN Verification Gate */
              <div className="max-w-md mx-auto my-12 p-8 bg-[#101726] rounded-3xl border border-slate-800 shadow-2xl space-y-6 glow-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
                  <Lock className="w-7 h-7" />
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-2xl font-extrabold text-white">
                    Acceso Administrativo
                  </h2>
                  <p className="text-xs text-slate-400">
                    Introduce el código PIN de 4 dígitos para acceder al panel de gestión y pipeline.
                  </p>
                </div>

                <form onSubmit={handlePinSubmit} className="space-y-4">
                  <div className="space-y-2 text-left">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      Código PIN:
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        autoFocus
                        maxLength={6}
                        value={pinInput}
                        onChange={(e) => {
                          setPinInput(e.target.value);
                          if (pinError) setPinError(null);
                        }}
                        placeholder="••••"
                        id="admin-pin-input"
                        className="w-full text-center tracking-[0.6em] text-2xl font-black bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-indigo-500 transition placeholder:text-slate-700"
                      />
                      <KeyRound className="w-4 h-4 text-slate-500 absolute right-3.5 top-4 pointer-events-none" />
                    </div>

                    {pinError && (
                      <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400 font-semibold pt-1">
                        <ShieldAlert className="w-4 h-4" />
                        <span>{pinError}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="btn-submit-pin"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3.5 rounded-xl transition shadow-lg shadow-indigo-950 cursor-pointer"
                  >
                    Desbloquear Panel
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveView('public')}
                    className="w-full text-slate-400 hover:text-white text-xs py-2 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Volver a la web pública</span>
                  </button>
                </form>
              </div>
            ) : (
              /* Authenticated Admin Dashboard */
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-bold">Sesión de Administrador Activa</span>
                    <span className="text-slate-500 hidden sm:inline">• Baby Jons Studio (Zaragoza)</span>
                  </div>

                  <button
                    onClick={handleAdminLogout}
                    id="btn-admin-logout"
                    className="text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 px-3 py-1.5 rounded-xl border border-rose-900/40 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Cerrar Sesión</span>
                  </button>
                </div>

                <AdminDashboard leads={leads} setLeads={setLeads} />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer with discreet Admin trigger */}
      <Footer onNavigateAdmin={() => setActiveView('admin')} />
    </div>
  );
}

