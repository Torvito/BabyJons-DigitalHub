import React, { useState } from 'react';
import { ClientProject } from '../types';
import { INITIAL_PROJECTS, USD_TO_NIO, WA_PHONE_BABY_JONS, BANK_TRANSFER_INFO } from '../data/initialData';
import { Lock, CheckCircle2, Circle, FileText, Download, DollarSign, MessageSquare, Building2, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface ClientPortalProps {
  projects?: Record<string, ClientProject>;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ projects = INITIAL_PROJECTS }) => {
  const projectKeys = Object.keys(projects);
  const [selectedKey, setSelectedKey] = useState<string>(projectKeys[0] || 'PRJ-101');
  const [showBankInfo, setShowBankInfo] = useState<boolean>(false);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const currentProject = projects[selectedKey] || projects['PRJ-101'];

  const handleDownload = (fileName: string) => {
    setDownloadToast(`Iniciando descarga segura de: ${fileName}`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 4000);
  };

  const totalNio = Math.round(currentProject.totalCost * USD_TO_NIO);
  const paidNio = Math.round(currentProject.paidAmount * USD_TO_NIO);
  const pendingNio = Math.round(currentProject.pendingAmount * USD_TO_NIO);

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-indigo-400/30 animate-bounce">
          <Download className="w-4 h-4" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Client Portal Header */}
      <div className="bg-[#101726] rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 glow-card">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20 mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>PORTAL PRIVADO DE PROYECTO • BABY JONS CLIENT OS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estado de Entregables & Avance
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Consulta el progreso de producción, fechas de hito y descarga archivos finales de tu marca.
          </p>
        </div>

        {/* Project Selector */}
        <div className="w-full sm:w-auto space-y-1">
          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            Seleccionar Proyecto Activo:
          </label>
          <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            id="client-portal-selector"
            className="bg-slate-900 text-white text-xs font-bold border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 w-full sm:w-72 cursor-pointer shadow-md"
          >
            {projectKeys.map(key => (
              <option key={key} value={key}>
                {projects[key]?.tag || key}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid: Progress & Files + Financials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Progress Tracker & Milestones */}
        <div className="lg:col-span-8 bg-[#101726] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 glow-card">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
                {currentProject.tag}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {currentProject.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Cliente: <span className="text-slate-200 font-semibold">{currentProject.clientName}</span> • Inicio: {currentProject.startDate}
              </p>
            </div>

            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border w-fit ${
              currentProject.progress === 100
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
            }`}>
              {currentProject.status}
            </span>
          </div>

          {/* Progress Bar Visual */}
          <div className="space-y-2 bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400">Avance General del Proyecto:</span>
              <span className="text-indigo-400">{currentProject.progress}% Completado</span>
            </div>
            
            <div className="w-full bg-slate-900 rounded-full h-3.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${currentProject.progress}%` }}
              />
            </div>

            <div className="flex justify-between text-[11px] text-slate-500 pt-1">
              <span>Entrega estimada: {currentProject.estimatedDelivery}</span>
              <span>{currentProject.milestones.filter(m => m.done).length} de {currentProject.milestones.length} fases listas</span>
            </div>
          </div>

          {/* Milestones List */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Hitos y Fases de Trabajo:</span>
            </h4>

            <div className="space-y-3">
              {currentProject.milestones.map((m, index) => (
                <div
                  key={m.id || index}
                  className={`p-4 rounded-2xl border transition ${
                    m.done
                      ? 'bg-indigo-950/20 border-indigo-900/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {m.done ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <span className={`text-xs font-semibold block ${m.done ? 'text-white' : 'text-slate-400'}`}>
                          {m.title}
                        </span>
                        {m.notes && (
                          <p className="text-[11px] text-slate-500">
                            {m.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold shrink-0 px-2.5 py-1 rounded-md ${
                      m.done
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-slate-900 text-slate-500 border border-slate-800'
                    }`}>
                      {m.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: File Vault & Financial Balance */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* File Vault */}
          <div className="bg-[#101726] rounded-3xl border border-slate-800 p-6 space-y-4 glow-card">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Bóveda de Archivos</span>
              </h4>
              <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded-full border border-slate-800">
                {currentProject.vaultFiles.length} archivos
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Descarga los recursos entregados en alta resolución y formatos editables.
            </p>

            <div className="space-y-2.5">
              {currentProject.vaultFiles.map(file => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800/90 hover:border-indigo-500/40 transition group"
                >
                  <div className="flex items-center gap-2.5 truncate pr-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-medium text-white truncate group-hover:text-indigo-300 transition">
                        {file.name}
                      </p>
                      <span className="text-[10px] text-slate-500">
                        {file.size} • {file.date}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(file.name)}
                    className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-indigo-600 rounded-lg transition shrink-0"
                    title="Descargar archivo"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Balance Card */}
          <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 space-y-4 glow-card">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Estado Financiero</span>
              </h4>
              <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Nicaragua
              </span>
            </div>

            <div className="space-y-2.5 border-b border-slate-800 pb-4 text-xs">
              <div className="flex justify-between items-baseline">
                <span className="text-slate-400">Monto Total Acuerdo:</span>
                <div className="text-right">
                  <span className="font-extrabold text-white text-sm">${currentProject.totalCost} USD</span>
                  <span className="block text-[10px] text-slate-500">~C$ {totalNio.toLocaleString()} NIO</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-slate-400">Depósito Pagado:</span>
                <div className="text-right">
                  <span className="font-extrabold text-emerald-400 text-sm">${currentProject.paidAmount} USD</span>
                  <span className="block text-[10px] text-emerald-500/80">~C$ {paidNio.toLocaleString()} NIO</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1 border-t border-slate-900">
                <span className="text-slate-300 font-bold">Saldo Pendiente Final:</span>
                <div className="text-right">
                  <span className="font-black text-amber-400 text-base">${currentProject.pendingAmount} USD</span>
                  <span className="block text-[10px] text-amber-500/80 font-bold">~C$ {pendingNio.toLocaleString()} NIO</span>
                </div>
              </div>
            </div>

            {/* Toggle Bank Account Details */}
            <button
              onClick={() => setShowBankInfo(!showBankInfo)}
              className="w-full text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>{showBankInfo ? 'Ocultar Cuentas Bancarias' : 'Ver Cuentas Bancarias (BAC / Lafise / Kash)'}</span>
            </button>

            {/* Nicaraguan Bank Accounts Details Dropdown */}
            {showBankInfo && (
              <div className="space-y-3 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-[11px]">
                <p className="text-slate-300 font-bold border-b border-slate-800 pb-1.5">
                  Cuentas directas en Nicaragua:
                </p>
                {BANK_TRANSFER_INFO.map((b, i) => (
                  <div key={i} className="space-y-0.5 border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                    <span className="text-indigo-300 font-bold block">{b.bank}</span>
                    <span className="text-slate-400 block">USD: <strong className="text-white font-mono">{b.accountUsd}</strong></span>
                    {b.accountNio && <span className="text-slate-400 block">NIO: <strong className="text-slate-200 font-mono">{b.accountNio}</strong></span>}
                    <span className="text-[10px] text-slate-500 block">Titular: {b.beneficiary}</span>
                  </div>
                ))}
              </div>
            )}

            {/* WhatsApp Payment button */}
            <a
              href={`https://wa.me/${WA_PHONE_BABY_JONS}?text=Hola%20Baby%20Jons!%20Deseo%20coordinar%20el%20pago%20o%20reportar%20transferencia%20del%20proyecto%20${encodeURIComponent(currentProject.tag)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Reportar Transferencia / Coordinar Pago</span>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};
