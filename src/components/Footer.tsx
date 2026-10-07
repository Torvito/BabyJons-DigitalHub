import React, { useState } from 'react';
import { WA_PHONE_BABY_JONS } from '../data/initialData';
import { MessageSquare, MapPin, ShieldCheck, Lock, X } from 'lucide-react';

interface FooterProps {
  onNavigateAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateAdmin }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);

  return (
    <>
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
                  <span>Zaragoza • Aragón • España</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WA_PHONE_BABY_JONS}?text=Hola%20Baby%20Jons!%20Te%20contacto%20desde%20tu%20sitio%20web.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: +34 631 920 479</span>
              </a>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
            <p>© {new Date().getFullYear()} Baby Jons. Todos los derechos reservados. Zaragoza, España.</p>
            
            {/* Discrete Footer Links */}
            <div className="flex items-center gap-4 text-slate-500">
              <button
                onClick={() => setShowPrivacyModal(true)}
                id="footer-privacy-btn"
                className="hover:text-slate-300 transition underline underline-offset-2 cursor-pointer"
              >
                Política de Privacidad
              </button>

              <span>•</span>

              <button
                onClick={onNavigateAdmin}
                id="footer-admin-btn"
                className="hover:text-indigo-400 text-slate-600 transition flex items-center gap-1 cursor-pointer"
                title="Acceso restringido para administración"
              >
                <Lock className="w-3 h-3" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-xl rounded-3xl shadow-2xl p-6 sm:p-8 relative space-y-4 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Aviso Legal y Privacidad</span>
            </div>

            <h3 className="text-xl font-extrabold text-white">
              Política de Privacidad (RGPD)
            </h3>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                En cumplimiento del Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica de Protección de Datos de España, le informamos sobre el tratamiento de sus datos personales:
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <p><strong>• Responsable del Tratamiento:</strong> Baby Jons Studio (Zaragoza, España).</p>
                <p><strong>• Finalidad:</strong> Atención a solicitudes de presupuesto, gestión y entrega de proyectos digitales acordados y comunicación operativa a través de WhatsApp o correo electrónico.</p>
                <p><strong>• Base Legal:</strong> Consentimiento inequívoco del usuario al enviar mensajes o calcular propuestas, y relación precontractual o contractual derivada del servicio solicitado.</p>
                <p><strong>• Conservación:</strong> Los datos se conservarán mientras dure la relación profesional o durante los plazos legalmente exigidos para responsabilidades tributarias en España.</p>
                <p><strong>• Cesión a Terceros:</strong> No se cederán datos personales a terceros, salvo obligación legal.</p>
                <p><strong>• Derechos:</strong> Puede ejercer sus derechos de acceso, rectificación, supresión y limitación escribiendo directamente a nuestro canal oficial de WhatsApp (+34 631 920 479).</p>
              </div>

              <p className="text-[11px] text-slate-400">
                Al utilizar nuestros estimadores y canales de contacto, usted acepta el tratamiento de sus datos para los fines exclusivamente descritos.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 rounded-xl transition cursor-pointer"
              >
                Entendido y de Acuerdo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
