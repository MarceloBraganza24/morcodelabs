export const siteConfig = {
  name: "MorCode Labs",
  tagline: "Software moderno para negocios que quieren crecer.",
  description:
    "Desarrollador Full Stack MERN especializado en Next.js, TypeScript, MongoDB y productos SaaS modernos. Desarrollo landing pages, sistemas web, ecommerce, marketplaces y plataformas escalables para negocios reales.",
  email: "morcodelabs@morcodelabs.com",
  whatsapp: "https://wa.me/5492926459172",
  github: "https://github.com/MarceloBraganza24",
  linkedin: "https://www.linkedin.com/in/marcelo-adrián-braganza-907202249",
  domain: "https://morcodelabs.com",
};

export const services = [
  {
    title: "Landing pages modernas",
    description:
      "Webs rápidas, minimalistas y optimizadas para presentar negocios, servicios y captar clientes.",
  },
  {
    title: "Sistemas web a medida",
    description:
      "Paneles administrativos, gestión interna, reservas, turnos, propiedades, clientes y procesos comerciales.",
  },
  {
    title: "Plataformas SaaS",
    description:
      "Productos escalables con autenticación, roles, dashboards, pagos, métricas y arquitectura preparada para crecer.",
  },
  {
    title: "Ecommerce & pagos",
    description:
      "Tiendas online, catálogos, reservas, integraciones con Mercado Pago, Stripe y flujos de compra personalizados.",
  },
  {
    title: "Automatizaciones",
    description:
      "Integraciones con WhatsApp, emails transaccionales, APIs externas y procesos automáticos para ahorrar tiempo.",
  },
  {
    title: "Cloud infrastructure & deployments",
    description:
      "Deploys modernos en Vercel y Google Cloud Platform, manejo de dominios, hosting, infraestructura cloud y optimización de performance para aplicaciones orientadas a producción.",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Mongoose",
  "Express",
  "Tailwind CSS",
  "Auth.js",
  "Mercado Pago",
  "Stripe",
  "Google Cloud Platform",
  "Cloud Run",
  "AWS",
  "Vercel",
  "Domain & Hosting Management",
];

export const selectedWork = [
  {
    title: "ORDENA",
    status: "En producción",
    category: "E-commerce inteligente orientado a conversión",
    images: [
      "/projects/ordena-todo-1.png",
      "/projects/ordena-todo-2.png",
      "/projects/ordena-todo-3.png",
    ],
    url: "https://ordenatodoensulugar.com.ar",
    description:
      "Plataforma de e-commerce moderna enfocada en venta online, automatización de procesos y optimización de conversión, desarrollada bajo una arquitectura escalable y preparada para operar en producción real.",
    longDescription:
      "El sistema ofrece una experiencia de compra rápida, intuitiva y optimizada para mobile y desktop. Incluye carrito avanzado, checkout multi-step, integración con Mercado Pago, cálculo automático de envíos mediante Correo Argentino, sistema de órdenes robusto, emails transaccionales y tracking completo de campañas mediante Meta Pixel + Conversions API. Además, incorpora herramientas enfocadas en aumentar conversión y ticket promedio, como barra de envío gratis, upsells inteligentes, atribución por UTMs, analytics propios y sistemas de fallback para garantizar estabilidad operativa incluso ante fallos externos.",
    metrics: ["Producción real", "Checkout avanzado", "Tracking & analytics"],
    features: [
      "Carrito avanzado y checkout multi-step",
      "Mercado Pago + Correo Argentino",
      "Emails transaccionales con Resend",
      "Meta Pixel + Conversions API",
      "Upsells, UTMs y analytics propios",
    ],
    tags: [
      "Next.js App Router",
      "TypeScript",
      "MongoDB Atlas",
      "Mongoose",
      "Zod",
      "Mercado Pago",
      "Resend",
      "Meta CAPI",
    ],
  },
  {
    title: "Sistema de turnos y gestión multi-profesional",
    status: "Private SaaS build",
    category: "SaaS de gestión multi-rol",
    images: [
      "/projects/turnos-saas-1.png",
      "/projects/turnos-saas-2.png",
      "/projects/turnos-saas-3.png",
    ],
    url: "",
    description:
      "Plataforma SaaS orientada a la gestión de profesionales, categorías y reservas online, pensada para centralizar turnos, disponibilidad y administración desde un único sistema escalable.",
    longDescription:
      "El proyecto está diseñado bajo una arquitectura multi-rol, permitiendo diferentes niveles de acceso para super administradores, profesionales y clientes. Incluye gestión de categorías, disponibilidad horaria, reservas, paneles administrativos, perfiles profesionales y organización por ciudades o rubros. La plataforma fue planteada para automatizar procesos de gestión, reducir fricción en la reserva de turnos y ofrecer una experiencia premium tanto para usuarios finales como para profesionales.",
    metrics: ["Multi-rol", "Reservas online", "Dashboard admin"],
    features: [
      "Gestión de profesionales y categorías",
      "Disponibilidad horaria dinámica",
      "Paneles personalizados por rol",
      "Estados de reservas y clientes",
      "Preparado para WhatsApp y Google Calendar",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Tailwind CSS",
      "SaaS",
      "Multi-tenant",
    ],
  },
  {
    title: "Reservas de inmuebles",
    status: "Under active development",
    category: "Marketplace tipo Airbnb",
    images: [
      "/projects/reservas-inmuebles-1.png",
      "/projects/reservas-inmuebles-2.png",
      "/projects/reservas-inmuebles-3.png",
    ],
    url: "",
    description:
      "Plataforma web tipo marketplace orientada a la gestión de alquileres temporarios, reservas y administración de propiedades desde un entorno moderno y escalable.",
    longDescription:
      "El sistema permite que propietarios administren propiedades, disponibilidad, precios y reservas desde dashboards personalizados, mientras que los huéspedes pueden explorar alojamientos, consultar disponibilidad y gestionar reservas de forma intuitiva. La arquitectura fue diseñada pensando en múltiples roles, escalabilidad y automatización de procesos relacionados a reservas, pagos y comunicación entre usuarios.",
    metrics: ["Marketplace", "Reservas dinámicas", "Pagos integrados"],
    features: [
      "Panel de propietarios y huéspedes",
      "Gestión de propiedades y disponibilidad",
      "Bloqueo de fechas y precios dinámicos",
      "Pagos con Mercado Pago",
      "Mensajería integrada y favoritos",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Mercado Pago",
      "Tailwind CSS",
      "Marketplace",
    ],
  },
  {
    title: "Marketplace de ropa y calzado usado",
    status: "Concept product",
    category: "Marketplace circular",
    images: [
      "/projects/pilchamarket-1.png",
      "/projects/pilchamarket-2.png",
      "/projects/pilchamarket-3.png",
    ],
    url: "",
    description:
      "Marketplace moderno orientado a la compra y venta de ropa y calzado usado, pensado para escalar desde una plataforma simple de publicaciones hasta un ecosistema completo de comercio circular.",
    longDescription:
      "El sistema contempla onboarding guiado, publicaciones, favoritos, filtros dinámicos, búsqueda avanzada, paneles administrativos, métricas, disputas, protección antifraude y gestión de pagos. El enfoque principal es combinar una experiencia de usuario moderna con herramientas de administración robustas, permitiendo que vendedores y compradores operen dentro de una plataforma visualmente atractiva, rápida y preparada para crecimiento real.",
    metrics: ["Social commerce", "Antifraude", "Analytics"],
    features: [
      "Publicaciones con filtros dinámicos",
      "Favoritos y búsqueda avanzada",
      "Pagos integrados",
      "Sistema de disputas",
      "Onboarding, métricas y antifraude",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Auth.js",
      "Mercado Pago",
      "Analytics",
      "Marketplace",
    ],
  },
  {
    title: "AI Product Research Assistant",
    status: "Production-ready",
    category: "AI SaaS product",
    images: [
      "/projects/ai-research-1.png",
      "/projects/ai-research-2.png",
      "/projects/ai-research-3.png",
    ],
    url: "",
    description:
      "Producto SaaS enfocado en investigación y análisis de productos asistido por inteligencia artificial, diseñado para automatizar procesos de búsqueda, evaluación y exploración de oportunidades comerciales.",
    longDescription:
      "La plataforma fue desarrollada con foco en experiencia de usuario moderna, arquitectura escalable y monetización mediante suscripciones. Incluye autenticación, sistema de pagos, lógica de suscripciones, dashboards internos y flujos preparados para producción. El objetivo del producto es asistir usuarios en procesos de investigación de productos mediante herramientas impulsadas por IA, centralizando información relevante dentro de una interfaz rápida, moderna y preparada para escalar.",
    metrics: ["AI-powered", "Subscriptions", "Deploy-ready"],
    features: [
      "Investigación asistida por IA",
      "Sistema de suscripciones",
      "Pagos con Stripe",
      "Control de acceso por plan",
      "Dashboard SaaS preparado para producción",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Auth.js",
      "Tailwind CSS",
      "AI SaaS",
    ],
  },
];

export const projects = selectedWork;

export const processSteps = [
  {
    number: "01",
    title: "Entendemos el negocio",
    description:
      "Primero analizamos el problema real, el objetivo comercial y qué necesita resolver el sistema.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos estructura, funcionalidades, experiencia de usuario, arquitectura y prioridades.",
  },
  {
    number: "03",
    title: "Desarrollamos el producto",
    description:
      "Construimos con tecnologías modernas, código escalable, diseño responsive y foco en performance.",
  },
  {
    number: "04",
    title: "Lanzamos y mejoramos",
    description:
      "Deploy, ajustes finales, monitoreo, mejoras, nuevas funcionalidades y evolución del producto.",
  },
];