import { useState, useEffect } from 'react';
import { ActiveView, LeadItem } from './types';
import { INITIAL_LEADS } from './data/initialData';
import { Navbar } from './components/Navbar';
import { PublicShowcase } from './components/PublicShowcase';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ClientPortal } from './components/ClientPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('public');
  
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
            <AdminDashboard leads={leads} setLeads={setLeads} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
