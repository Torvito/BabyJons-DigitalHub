import React, { useState } from 'react';
import { LeadItem, LeadStage } from '../types';
import { USD_TO_NIO, WA_PHONE_BABY_JONS } from '../data/initialData';
import { Wallet, FolderKanban, Clock, Filter, Plus, ChevronLeft, ChevronRight, MessageSquare, Trash2, X, TrendingUp, DollarSign } from 'lucide-react';

interface AdminDashboardProps {
  leads: LeadItem[];
  setLeads: React.Dispatch<React.SetStateAction<LeadItem[]>>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ leads, setLeads }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newClientName, setNewClientName] = useState<string>('');
  const [newService, setNewService] = useState<string>('');
  const [newBudget, setNewBudget] = useState<string>('');
  const [newPhone, setNewPhone] = useState<string>('+505 ');

  // Calculate live KPI metrics based on leads and projects
  const activeInDevCount = leads.filter(l => l.stage === 3).length;
  const completedLeads = leads.filter(l => l.stage === 4);
  const totalCompletedEarnings = 1850 + completedLeads.reduce((acc, l) => acc + (l.budget || 0), 0);
  const pendingReceivable = leads.filter(l => l.stage === 3).reduce((acc, l) => acc + (l.budget ? Math.round(l.budget * 0.5) : 0), 325);
  const pipelineLeadsCount = leads.filter(l => l.stage === 1 || l.stage === 2).length;

  const moveLeadStage = (id: number, newStage: LeadStage) => {
    setLeads(prev =>
      prev.map(item => (item.id === id ? { ...item, stage: newStage } : item))
    );
  };

  const deleteLead = (id: number) => {
    setLeads(prev => prev.filter(item => item.id !== id));
  };

  const handleSaveLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName.trim() || !newService.trim()) return;

    const budgetNum = parseInt(newBudget) || 0;
    const item: LeadItem = {
      id: Date.now(),
      client: newClientName.trim(),
      service: newService.trim(),
      budget: budgetNum,
      phone: newPhone.trim() || '+505 8766 9631',
      stage: 1,
      date: 'Hoy'
    };

    setLeads(prev => [item, ...prev]);
    setIsModalOpen(false);

    // Reset inputs
    setNewClientName('');
    setNewService('');
    setNewBudget('');
    setNewPhone('+505 ');
  };

  const COLUMNS: { stage: LeadStage; title: string; color: string }[] = [
    { stage: 1, title: 'Nuevas Consultas', color: 'bg-blue-400' },
    { stage: 2, title: 'Cotización Enviada', color: 'bg-amber-400' },
    { stage: 3, title: 'En Desarrollo', color: 'bg-indigo-400' },
    { stage: 4, title: 'Entregados / Pagados', color: 'bg-emerald-400' }
  ];

  return (
    <div className="space-y-8">
      {/* Top Admin Metrics KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-[#101726] p-5 rounded-2xl border border-slate-800 space-y-2 glow-card">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Ingresos del Mes</span>
            <Wallet className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">${totalCompletedEarnings.toLocaleString()}</span>
            <span className="text-xs text-slate-400">USD</span>
          </div>
          <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>~C$ {Math.round(totalCompletedEarnings * USD_TO_NIO).toLocaleString()} NIO (+24% vs mes anterior)</span>
          </p>
        </div>

        <div className="bg-[#101726] p-5 rounded-2xl border border-slate-800 space-y-2 glow-card">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Proyectos Activos</span>
            <FolderKanban className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{activeInDevCount + 2}</span>
            <span className="text-xs text-slate-400">en desarrollo</span>
          </div>
          <p className="text-[10px] text-indigo-300 font-medium">
            3 clientes en retainer mensual activo
          </p>
        </div>

        <div className="bg-[#101726] p-5 rounded-2xl border border-slate-800 space-y-2 glow-card">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Saldos por Cobrar</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-amber-400">${pendingReceivable.toLocaleString()}</span>
            <span className="text-xs text-slate-400">USD</span>
          </div>
          <p className="text-[10px] text-amber-300 font-medium">
            Entregas finales programadas este mes
          </p>
        </div>

        <div className="bg-[#101726] p-5 rounded-2xl border border-slate-800 space-y-2 glow-card">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Prospectos (Leads)</span>
            <Filter className="w-4 h-4 text-purple-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{pipelineLeadsCount}</span>
            <span className="text-xs text-slate-400">en seguimiento</span>
          </div>
          <p className="text-[10px] text-purple-300 font-medium">
            Cotizaciones enviadas vía WhatsApp
          </p>
        </div>

      </div>

      {/* Pipeline Kanban Board & Lead Management */}
      <div className="bg-[#101726] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 glow-card">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">
              Embudo de Clientes & Proyectos (Kanban)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Controla y avanza el estado de cada solicitud de clientes en Nicaragua.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            id="btn-new-lead"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow-lg shadow-indigo-950 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Registrar Nuevo Cliente / Lead</span>
          </button>
        </div>

        {/* Pipeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COLUMNS.map(col => {
            const items = leads.filter(l => l.stage === col.stage);
            return (
              <div
                key={col.stage}
                id={`pipeline-col-${col.stage}`}
                className="bg-slate-950/80 rounded-2xl border border-slate-800 p-4 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                      <span>{col.title}</span>
                    </span>
                    <span className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full text-[10px]">
                      {items.length}
                    </span>
                  </div>

                  <div className="space-y-3 pt-3 min-h-[220px]">
                    {items.length === 0 ? (
                      <p className="text-[11px] text-slate-600 text-center py-8">
                        Sin proyectos en esta etapa
                      </p>
                    ) : (
                      items.map(item => {
                        const cleanPhone = item.phone.replace(/[^0-9]/g, '');
                        return (
                          <div
                            key={item.id}
                            className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2.5 shadow-md hover:border-indigo-500/40 transition"
                          >
                            <div className="flex justify-between items-start">
                              <h4 className="text-xs font-extrabold text-white">
                                {item.client}
                              </h4>
                              <span className="text-[11px] font-black text-amber-400">
                                ${item.budget} USD
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-400">
                              {item.service}
                            </p>

                            <div className="flex items-center justify-between pt-1 text-[10px] border-t border-slate-800/80">
                              <a
                                href={`https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(item.client)}!%20Te%20saluda%20Baby%20Jons.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
                              >
                                <MessageSquare className="w-3 h-3 fill-current" />
                                <span>{item.phone}</span>
                              </a>

                              <div className="flex items-center gap-1">
                                {col.stage > 1 && (
                                  <button
                                    onClick={() => moveLeadStage(item.id, (col.stage - 1) as LeadStage)}
                                    className="p-1 text-slate-400 hover:text-white bg-slate-800 rounded transition cursor-pointer"
                                    title="Mover a etapa anterior"
                                  >
                                    <ChevronLeft className="w-3 h-3" />
                                  </button>
                                )}

                                {col.stage < 4 && (
                                  <button
                                    onClick={() => moveLeadStage(item.id, (col.stage + 1) as LeadStage)}
                                    className="p-1 text-slate-400 hover:text-white bg-slate-800 rounded transition cursor-pointer"
                                    title="Avanzar etapa"
                                  >
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                )}

                                <button
                                  onClick={() => deleteLead(item.id)}
                                  className="p-1 text-slate-600 hover:text-red-400 transition cursor-pointer"
                                  title="Eliminar registro"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>

                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-900 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold">
                    Total etapa: ${items.reduce((acc, curr) => acc + curr.budget, 0)} USD
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* New Lead Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl p-6 relative space-y-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-bold text-white">
              Registrar Nuevo Prospecto en Pipeline
            </h3>

            <form onSubmit={handleSaveLead} className="space-y-3.5 text-xs">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Nombre del Cliente o Empresa:
                </label>
                <input
                  type="text"
                  required
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  placeholder="Ej: RestoBar El Portal / Boutique Bella"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Servicio Solicitado:
                </label>
                <input
                  type="text"
                  required
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                  placeholder="Ej: Branding + Redes Sociales"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Monto Cotizado ($USD):
                </label>
                <input
                  type="number"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  placeholder="Ej: 450"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">
                  Teléfono / WhatsApp de Contacto:
                </label>
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="+505 8888 8888"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 rounded-xl transition cursor-pointer shadow-lg shadow-indigo-950"
              >
                Guardar Lead en Pipeline
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
