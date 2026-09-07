import React, { useState } from 'react';
import { SpeedOption } from '../types';
import { INITIAL_CALC_SERVICES, SPEED_OPTIONS, USD_TO_NIO, WA_PHONE_BABY_JONS } from '../data/initialData';
import { Coins, Check, MessageSquare, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuoteCalculator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['brand']);
  const [selectedSpeed, setSelectedSpeed] = useState<SpeedOption>('standard');
  const [customProjectName, setCustomProjectName] = useState<string>('');

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const selectedSpeedConfig = SPEED_OPTIONS.find(s => s.id === selectedSpeed) || SPEED_OPTIONS[0];

  const subtotalUsd = selectedServices.reduce((acc, id) => {
    const srv = INITIAL_CALC_SERVICES.find(s => s.id === id);
    return acc + (srv ? srv.priceUsd : 0);
  }, 0);

  const speedSurchargeUsd = Math.round(subtotalUsd * (selectedSpeedConfig.multiplier - 1));
  const totalUsd = subtotalUsd + speedSurchargeUsd;
  const totalNio = Math.round(totalUsd * USD_TO_NIO);

  // 50% deposit and 50% final
  const depositUsd = Math.round(totalUsd * 0.5);
  const depositNio = Math.round(depositUsd * USD_TO_NIO);

  const handleSendWhatsApp = () => {
    if (selectedServices.length === 0) return;

    // Trigger confetti
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback if confetti fails in iframe
    }

    const serviceNames = selectedServices
      .map(id => INITIAL_CALC_SERVICES.find(s => s.id === id)?.title)
      .filter(Boolean)
      .join('\n• ');

    const message = `Hola Baby Jons! 👋 Vi tu portafolio y calculé mi proyecto en tu cotizador:\n\n` +
      (customProjectName ? `🏷️ *Proyecto / Marca:* ${customProjectName}\n` : '') +
      `📌 *Servicios Seleccionados:*\n• ${serviceNames}\n\n` +
      `⚡ *Tiempo de Entrega:* ${selectedSpeedConfig.label} (${selectedSpeedConfig.timeline})\n` +
      `💰 *Presupuesto Estimado:* $${totalUsd} USD (~C$ ${totalNio.toLocaleString()} NIO)\n` +
      `💳 *Anticipo sugerido (50%):* $${depositUsd} USD (~C$ ${depositNio.toLocaleString()} NIO)\n\n` +
      `¿Podemos coordinar una llamada o reunión para revisar detalles y fecha de inicio?`;

    const url = `https://wa.me/${WA_PHONE_BABY_JONS}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="calculator-section" className="bg-[#101726] rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8 relative overflow-hidden glow-card">
      {/* Glow highlight */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20 mb-3">
          <Coins className="w-3.5 h-3.5" />
          <span>ESTIMADOR DE PROYECTO INTERACTIVO • NICARAGUA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
          Calcula tu Inversión en Segundos
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Elige los módulos estratégicos que tu marca necesita hoy. Los valores se expresan en Dólares ($USD) y Córdobas (C$ NIO).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Services & Speed selection */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Optional Project Name input */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              Nombre de tu Marca o Negocio (Opcional):
            </label>
            <input
              type="text"
              value={customProjectName}
              onChange={(e) => setCustomProjectName(e.target.value)}
              placeholder="Ej: Café El Mirador / Boutique Ross / Dr. Smith"
              className="w-full bg-slate-900 border border-slate-700 text-white text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-indigo-500 transition placeholder:text-slate-600"
            />
          </div>

          {/* 1. Services selection */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
              1. Selecciona los Servicios requeridos:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INITIAL_CALC_SERVICES.map(srv => {
                const isSelected = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    id={`calc-srv-${srv.id}`}
                    onClick={() => toggleService(srv.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-950/30 shadow-lg shadow-indigo-950/40'
                        : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white leading-tight">
                          {srv.title}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs shrink-0 ${
                            isSelected
                              ? 'bg-indigo-600 border-indigo-500 text-white'
                              : 'border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>

                      {srv.badge && (
                        <span className="inline-block bg-indigo-500/20 text-indigo-300 text-[9px] font-bold px-2 py-0.5 rounded-full border border-indigo-500/30">
                          {srv.badge}
                        </span>
                      )}

                      <p className="text-[11px] text-slate-400 leading-normal">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-baseline justify-between">
                      <span className="text-xs font-black text-amber-400">
                        ${srv.priceUsd} USD
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold">
                        ~C$ {(srv.priceUsd * USD_TO_NIO).toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Timeline speed options */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
              2. Plazo y Velocidad de Entrega:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {SPEED_OPTIONS.map(speed => {
                const isSelected = selectedSpeed === speed.id;
                return (
                  <button
                    key={speed.id}
                    type="button"
                    id={`speed-btn-${speed.id}`}
                    onClick={() => setSelectedSpeed(speed.id)}
                    className={`p-3 rounded-xl text-center transition border cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600/25 border-2 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span className="block text-xs font-bold text-white">{speed.label}</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">{speed.timeline}</span>
                    <span className={`inline-block text-[9px] font-semibold mt-1 px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-indigo-500/30 text-indigo-300' : 'bg-slate-900 text-slate-500'
                    }`}>
                      {speed.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Live Quote Summary Box (Sticky) */}
        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6 lg:sticky lg:top-28">
          
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Resumen de Cotización
              </h3>
              <p className="text-[11px] text-slate-400">Presupuesto inicial estimado</p>
            </div>
            <span className="bg-indigo-500/20 text-indigo-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-indigo-500/30">
              {selectedServices.length} {selectedServices.length === 1 ? 'Servicio' : 'Servicios'}
            </span>
          </div>

          {/* Itemized List */}
          <div className="space-y-2 text-xs max-h-52 overflow-y-auto pr-1">
            {selectedServices.length === 0 ? (
              <p className="text-slate-500 text-center py-6">
                Selecciona al menos un servicio para visualizar el desglose.
              </p>
            ) : (
              selectedServices.map(id => {
                const srv = INITIAL_CALC_SERVICES.find(s => s.id === id);
                if (!srv) return null;
                return (
                  <div key={srv.id} className="flex justify-between items-center text-slate-300 py-1 border-b border-slate-900">
                    <span className="truncate pr-2">• {srv.title}</span>
                    <span className="font-bold text-white shrink-0">${srv.priceUsd} USD</span>
                  </div>
                );
              })
            )}

            {speedSurchargeUsd > 0 && (
              <div className="flex justify-between items-center text-amber-400 font-semibold pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Aceleración {selectedSpeedConfig.label} ({selectedSpeedConfig.badge})</span>
                </span>
                <span>+${speedSurchargeUsd} USD</span>
              </div>
            )}
          </div>

          {/* Total Box */}
          <div className="border-t border-slate-800 pt-4 space-y-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Total Estimado USD:
              </span>
              <span className="text-3xl font-black text-amber-400">
                ${totalUsd.toLocaleString()} <span className="text-xs font-semibold text-slate-400">USD</span>
              </span>
            </div>

            <div className="flex justify-between items-baseline text-xs border-t border-slate-800/80 pt-2">
              <span className="text-slate-400">Equivalente Córdobas:</span>
              <span className="font-bold text-slate-200">
                C$ {totalNio.toLocaleString()} NIO
              </span>
            </div>

            <div className="flex justify-between items-baseline text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anticipo 50% para inicio:</span>
              </span>
              <span className="font-bold text-emerald-400">
                ${depositUsd} USD (C$ {depositNio.toLocaleString()})
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleSendWhatsApp}
            disabled={selectedServices.length === 0}
            id="btn-send-calc-whatsapp"
            className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white font-black text-xs sm:text-sm py-4 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Enviar Cotización a WhatsApp Directo</span>
          </button>

          <div className="space-y-1 text-center">
            <p className="text-[10px] text-slate-400">
              Se enviará el desglose formal al WhatsApp personal de Baby Jons (+505 8766 9631) para agendar fecha de entrega.
            </p>
            <p className="text-[9px] text-slate-500">
              Tasa oficial de referencia: $1 USD = C$ 36.60 NIO • Managua, Nicaragua
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
