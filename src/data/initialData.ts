import { PortfolioItem, CalcService, SpeedConfig, ClientProject, LeadItem } from '../types';

export const USD_TO_NIO = 36.60;
export const WA_PHONE_BABY_JONS = '50587669631';

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'MetroFit Gym Nicaragua',
    category: 'branding',
    categoryLabel: 'Branding & Identidad',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    desc: 'Línea gráfica completa, manual de marca, diseño de uniformes y estrategia de contenido visual para inauguración de sede deportiva premium.',
    client: 'MetroFit Gym S.A.',
    deliverables: ['Manual de Marca PDF (40 págs)', 'Logos Vectoriales (SVG, AI, PNG)', 'Kit de Redes Sociales (15 plantillas)', 'Señalética interior'],
    results: '+320 membresías prevendidas en mes 1',
    year: '2026'
  },
  {
    id: 2,
    title: 'Leggero Sneakers Store',
    category: 'web',
    categoryLabel: 'Web App PWA',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    desc: 'Catálogo digital interactivo e-commerce con checkout directo a WhatsApp, sincronización de stock y panel administrativo para pedidos locales en Managua.',
    client: 'Leggero Shoes Nicaragua',
    deliverables: ['Web App PWA instalable', 'Integración WhatsApp Business API', 'Dashboard de Inventario', 'Pasarela de pagos locales'],
    results: '4.8x aumento en conversión de leads a ventas',
    year: '2026'
  },
  {
    id: 3,
    title: 'Campaña Moda "Urbano 505"',
    category: 'media',
    categoryLabel: 'Audiovisual & Reels',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    desc: 'Dirección creativa y producción audiovisual de 12 Reels virales con modelos y locaciones urbanas para nueva colección de streetwear nicaragüense.',
    client: 'Urbano 505 Apparel',
    deliverables: ['12 Reels en 4K (Edición y Color)', 'Sesión fotográfica de estudio (45 fotos)', 'Audio branding personalizado', 'Estrategia de pauta TikTok/IG'],
    results: '1.4M+ de reproducciones orgánicas en TikTok e IG',
    year: '2026'
  },
  {
    id: 4,
    title: 'Clínica Dental Sonrisas',
    category: 'web',
    categoryLabel: 'Web App Citas',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    desc: 'Plataforma web ágil para agendamiento de consultas odontológicas, recordatorios automatizados y catálogo de tratamientos con testimonios.',
    client: 'Dra. Karen Mendoza',
    deliverables: ['Web Responsive Ultrarrápida', 'Sistema de Agendamiento Online', 'Ficha clínica digital preliminar', 'Google Business Optimization'],
    results: '+65 nuevas citas mensuales agendadas',
    year: '2026'
  },
  {
    id: 5,
    title: 'Barbería & Club El Patrón',
    category: 'branding',
    categoryLabel: 'Branding & Espacio',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    desc: 'Identidad de marca premium vintage-moderna, menú digital de servicios, señalética luminosa y packaging para línea de cera y aceites de barba.',
    client: 'El Patrón Gentlemen Studio',
    deliverables: ['Logotipo principal y monograma', 'Diseño de etiquetas para cosméticos', 'Carta digital interactiva QR', 'Branding de interiores'],
    results: 'Apertura de segunda sucursal en Granada',
    year: '2025'
  },
  {
    id: 6,
    title: 'Café Montaña Matagalpa',
    category: 'media',
    categoryLabel: 'Audiovisual & Packaging',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    desc: 'Documental corto de marca sobre el proceso de cosecha artesanal de café especial en Matagalpa y rediseño de empaques para exportación.',
    client: 'Hacienda El Mirador',
    deliverables: ['Video Hero 4K para ferias internacionales', 'Diseño de bolsas ecológicas con válvula', 'Guion y locución profesional', 'Banco de fotos comerciales'],
    results: 'Contrato cerrado con distribuidores en Costa Rica y Miami',
    year: '2025'
  }
];

export const INITIAL_CALC_SERVICES: CalcService[] = [
  {
    id: 'brand',
    title: 'Identidad de Marca & Manual',
    priceUsd: 250,
    desc: 'Concepto estratégico, logotipo vectorial, paleta de colores, tipografías corporativas y manual de uso.',
    features: ['Logo en AI, SVG, PNG alta resolución', 'Paleta cromática y códigos HEX/CMYK', 'Manual de marca en PDF', 'Plantillas para post y stories'],
    badge: 'Popular'
  },
  {
    id: 'pwa',
    title: 'Web App / Catálogo PWA',
    priceUsd: 350,
    desc: 'Aplicación web optimizada para móvil con catálogo interactivo y checkout directo a tu WhatsApp.',
    features: ['Diseño responsive y ultrarrápido', 'Botón de pedido automatizado a WhatsApp', 'Panel de administración sencillo', 'Dominio y hosting guiado'],
    badge: 'Alta Conversión'
  },
  {
    id: 'reels',
    title: 'Pack Audiovisual (8 Reels)',
    priceUsd: 200,
    desc: 'Producción, guion, grabación y edición vertical cinematográfica de 8 videos cortos para TikTok e Instagram.',
    features: ['Guion con ganchos virales (Hooks)', 'Edición dinámica con subtítulos animados', 'Efectos de sonido y musicalización', 'Entrega en formato 9:16 listo para publicar'],
  },
  {
    id: 'retainer',
    title: 'Retainer Mensual Creativo',
    priceUsd: 150,
    desc: 'Acompañamiento continuo de diseño mensual para negocios que necesitan contenido y ajustes gráficos frecuentes.',
    features: ['12 piezas gráficas mensuales', 'Ajustes prioritarios en 24h', 'Asesoría estratégica semanal por WhatsApp', 'Descuento en proyectos adicionales'],
    badge: 'Recomendado'
  },
  {
    id: 'strategy',
    title: 'Lanzamiento & Campaña Digital',
    priceUsd: 180,
    desc: 'Estrategia de contenido y configuración de campañas publicitarias para lanzamiento de producto o negocio.',
    features: ['Investigación de competencia', 'Estructura de embudo de ventas', 'Copywriting persuasivo para anuncios', 'Segmentación de audiencias Meta Ads']
  }
];

export const SPEED_OPTIONS: SpeedConfig[] = [
  {
    id: 'standard',
    label: 'Estándar',
    timeline: '2 - 3 semanas',
    multiplier: 1.0,
    badge: 'Sin recargo'
  },
  {
    id: 'fast',
    label: 'Prioritario',
    timeline: '7 - 10 días',
    multiplier: 1.20,
    badge: '+20% aceleración'
  },
  {
    id: 'express',
    label: 'Express VIP',
    timeline: '3 - 5 días',
    multiplier: 1.40,
    badge: '+40% entrega rápida'
  }
];

export const INITIAL_PROJECTS: Record<string, ClientProject> = {
  'PRJ-101': {
    id: 'PRJ-101',
    code: 'PRJ-101',
    tag: 'Pro-101: MetroFit Gym',
    title: 'MetroFit Gym — Rediseño de Marca & Contenido',
    clientName: 'MetroFit Gym Nicaragua',
    status: 'En Proceso (Fase 3 de 4)',
    progress: 75,
    totalCost: 650,
    paidAmount: 325,
    pendingAmount: 325,
    startDate: '12 Ago 2026',
    estimatedDelivery: '15 Sep 2026',
    milestones: [
      { id: 'm1', title: 'Briefing estratégico & Moodboard conceptual', done: true, date: '12 Ago 2026', notes: 'Aprobado por junta directiva' },
      { id: 'm2', title: 'Propuestas de Logotipo & Guía cromática', done: true, date: '20 Ago 2026', notes: 'Seleccionada opción 2 con ajustes menores' },
      { id: 'm3', title: 'Diseño de Piezas Sociales & Plantillas Canva/AI', done: true, date: '28 Ago 2026', notes: '15 plantillas listas en bóveda' },
      { id: 'm4', title: 'Entrega final de Bóveda & Manual de Marca', done: false, date: '15 Sep 2026', notes: 'En proceso de diagramación final' }
    ],
    vaultFiles: [
      { id: 'f1', name: 'Manual_de_Marca_MetroFit_2026.pdf', size: '14.2 MB', type: 'pdf', date: '28 Ago' },
      { id: 'f2', name: 'Logotipos_Vectoriales_Master.zip', size: '28.5 MB', type: 'zip', date: '20 Ago' },
      { id: 'f3', name: 'Plantillas_Instagram_Feed_Story.fig', size: '12.0 MB', type: 'figma', date: '28 Ago' }
    ]
  },
  'PRJ-102': {
    id: 'PRJ-102',
    code: 'PRJ-102',
    tag: 'Pro-102: Clínica Sonrisas',
    title: 'Clínica Sonrisas — Desarrollo Web App de Citas',
    clientName: 'Clínica Dental Sonrisas',
    status: 'Fase Inicial (Fase 2 de 4)',
    progress: 35,
    totalCost: 450,
    paidAmount: 225,
    pendingAmount: 225,
    startDate: '01 Sep 2026',
    estimatedDelivery: '25 Sep 2026',
    milestones: [
      { id: 'm1', title: 'Arquitectura de información y catálogo dental', done: true, date: '02 Sep 2026', notes: 'Listado de 8 servicios principales' },
      { id: 'm2', title: 'Prototipo visual interactivo (Figma)', done: true, date: '06 Sep 2026', notes: 'Flujo de cita directo a WhatsApp' },
      { id: 'm3', title: 'Desarrollo web frontend & botones automáticos', done: false, date: '16 Sep 2026', notes: 'En codificación activa' },
      { id: 'm4', title: 'Despliegue en dominio final y pruebas de WhatsApp', done: false, date: '25 Sep 2026', notes: 'Pendiente' }
    ],
    vaultFiles: [
      { id: 'f1', name: 'Estructura_Arquitectura_Sonrisas.pdf', size: '2.1 MB', type: 'pdf', date: '02 Sep' },
      { id: 'f2', name: 'Prototipo_UI_Aprobado.fig', size: '8.4 MB', type: 'figma', date: '06 Sep' }
    ]
  },
  'PRJ-103': {
    id: 'PRJ-103',
    code: 'PRJ-103',
    tag: 'Pro-103: Leggero Sneakers',
    title: 'Leggero Sneakers — Campañas Audiovisuales Drop',
    clientName: 'Leggero Sneakers',
    status: 'Completado & Entregado',
    progress: 100,
    totalCost: 380,
    paidAmount: 380,
    pendingAmount: 0,
    startDate: '15 Ago 2026',
    estimatedDelivery: '01 Sep 2026',
    milestones: [
      { id: 'm1', title: 'Guion de Clips y plan de rodaje unboxing', done: true, date: '15 Ago 2026' },
      { id: 'm2', title: 'Sesión Fotográfica & Rodaje en locación', done: true, date: '22 Ago 2026' },
      { id: 'm3', title: 'Edición y musicalización de 10 Reels', done: true, date: '29 Ago 2026' },
      { id: 'm4', title: 'Entrega en nube 4K y aprobación final', done: true, date: '01 Sep 2026' }
    ],
    vaultFiles: [
      { id: 'f1', name: 'Pack_10_Reels_Leggero_Final_4K.zip', size: '320 MB', type: 'zip', date: '01 Sep' },
      { id: 'f2', name: 'Fotos_Estudio_Comerciales.zip', size: '145 MB', type: 'zip', date: '01 Sep' },
      { id: 'f3', name: 'Reporte_Metricas_Visuales.pdf', size: '3.4 MB', type: 'pdf', date: '02 Sep' }
    ]
  }
};

export const INITIAL_LEADS: LeadItem[] = [
  { id: 1, client: 'RestoBar La Esquina (Granada)', service: 'Branding + Menú Digital QR', budget: 350, phone: '+505 8899 1122', stage: 1, date: 'Hoy' },
  { id: 2, client: 'Boutique D’Ella (Managua)', service: 'Pack 8 Reels de Moda', budget: 200, phone: '+505 8777 3344', stage: 1, date: 'Ayer' },
  { id: 3, client: 'AutoDetailing Pro 505', service: 'Web App PWA Catálogo', budget: 400, phone: '+505 8555 9900', stage: 2, date: '04 Sep' },
  { id: 4, client: 'Dr. Alejandro Rivas Odontología', service: 'Identidad de Marca & Logo', budget: 250, phone: '+505 8222 4455', stage: 2, date: '03 Sep' },
  { id: 5, client: 'MetroFit Gym', service: 'Branding & Social Media', budget: 650, phone: '+505 8333 1100', stage: 3, date: 'Activo' },
  { id: 6, client: 'Clínica Sonrisas', service: 'Web App Citas Médicas', budget: 450, phone: '+505 8444 2211', stage: 3, date: 'Activo' },
  { id: 7, client: 'Leggero Sneakers', service: 'Campaña Video Drop', budget: 380, phone: '+505 8766 9631', stage: 4, date: 'Finalizado' }
];

export const BANK_TRANSFER_INFO = [
  { bank: 'BAC Credomatic Nicaragua', accountUsd: '365-98214-0 (USD)', accountNio: '365-98214-1 (NIO)', beneficiary: 'Baby Jons - Creative Studio' },
  { bank: 'Banco LaFise Bancentro', accountUsd: '109-234567-8 (USD)', accountNio: '109-234567-9 (NIO)', beneficiary: 'Baby Jons - Creative Studio' },
  { bank: 'Billetera Móvil / KASH', accountUsd: '+505 8766 9631', accountNio: 'Transferencia móvil inmediata', beneficiary: 'Baby Jons' }
];
