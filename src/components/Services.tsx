import { motion, useReducedMotion } from 'framer-motion'
import { Clock, ShoppingBag, Calendar, Swords, Sparkles, Flame, Shield, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  tag: string
  title: string
  desc: string
  bullets: string[]
  accent: 'mint' | 'coral'
  badge: { top: string; highlight: string; bottom: string }
}

const SERVICES: ServiceItem[] = [
  {
    icon: Clock,
    tag: 'Modalidad Principal',
    title: 'ZONA DE JUEGO POR TIEMPO',
    desc: 'Siéntate y juega sin prisas. Tarifa accesible por tiempo de estancia con acceso libre e ilimitado a más de 300 juegos de mesa. Cambia de título cuantas veces quieras y recibe explicación de reglas por nuestro staff.',
    bullets: ['+300 títulos disponibles', 'Mesas amplias con tapete', 'Tutoría de juegos incluida'],
    accent: 'mint',
    badge: { top: 'Desde solo', highlight: '$30 MXN', bottom: 'Acceso por persona' },
  },
  {
    icon: ShoppingBag,
    tag: 'Tienda & Coleccionables',
    title: 'VENTA DE JUEGOS Y TCG',
    desc: 'Lleva la magia a tu casa. Venta de juegos de mesa sellados, cartas sueltas seleccionadas, sobres de expansión, decks armados y accesorios de protección (micas, carpetas, deck boxes) para Magic, Pokémon y más.',
    bullets: ['Sobres y Boosters originales', 'Singles de Magic & Pokémon', 'Preventas de juegos exclusivos'],
    accent: 'coral',
    badge: { top: 'Productos Oficiales', highlight: 'TCG & JUEGOS', bottom: 'Nuevos lanzamientos' },
  },
  {
    icon: Calendar,
    tag: 'Comunidad & Competición',
    title: 'EVENTOS, D&D Y BILLAR',
    desc: 'Noches temáticas de terror, torneos de videojuegos, campañas continuas de Dungeons & Dragons para novatos y veteranos, y mesas de billar para desafiar el pulso entre rondas.',
    bullets: ['Campañas oficiales de D&D', 'Torneos de Billar y TCG', 'Premios en efectivo y vales'],
    accent: 'mint',
    badge: { top: 'Calendario Semanal', highlight: 'TORNEOS', bottom: 'Consulta fechas en Instagram' },
  },
  {
    icon: Swords,
    tag: 'Atracción Exclusiva',
    title: '¡EL DESAFÍO AL STAFF!',
    desc: '¿Crees que nadie puede vencerte? Reta a nuestros representantes (Neelo, Samchompi, Castro01 y TheTastas). Lanza los dados para decidir el juego. Cada victoria te otorga una medalla y llavero coleccionable exclusivo.',
    bullets: ['4 Representantes a vencer', 'Llaveros y medallas físicas', 'Premio mayor por derrotar a los 4'],
    accent: 'coral',
    badge: { top: '¿Aceptas el Reto?', highlight: '4 Llaveros', bottom: '1 por cada staff vencido' },
  },
]

function ServiceCard({ item, reverse }: { item: ServiceItem; reverse: boolean }) {
  const shouldReduce = useReducedMotion()
  const isMint = item.accent === 'mint'

  const borderHover = isMint ? 'hover:border-mint-400/70' : 'hover:border-coral-500/70'
  const glowHover = isMint
    ? 'hover:shadow-[0_16px_40px_rgba(95,227,178,0.12)]'
    : 'hover:shadow-[0_16px_40px_rgba(255,99,71,0.12)]'
  const accentText = isMint ? 'text-mint-400' : 'text-coral-500'
  const accentBg = isMint ? 'bg-mint-400/10 border-mint-400/30' : 'bg-coral-500/10 border-coral-500/30'
  const lineGradient = isMint
    ? 'bg-gradient-to-r from-mint-400 to-transparent'
    : 'bg-gradient-to-l from-coral-500 to-transparent'

  // Asymmetric polygon clip-path (alternating left/right on md+)
  const clipClass = reverse
    ? 'md:[clip-path:polygon(3%_0,100%_0,100%_100%,0_100%)] lg:w-[95%] ml-auto'
    : 'md:[clip-path:polygon(0_0,100%_0,97%_100%,0_100%)] lg:w-[95%] mr-auto'

  const gradientDirection = reverse
    ? 'bg-gradient-to-l from-abyss-900 via-abyss-900 to-abyss-800'
    : 'bg-gradient-to-r from-abyss-900 via-abyss-900 to-abyss-800'

  return (
    <motion.div
      initial={{ opacity: 0, x: shouldReduce ? 0 : reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full ${clipClass}`}
    >
      <div
        className={`relative ${gradientDirection} rounded-3xl p-6 sm:p-10 border-2 border-abyss-700/80 ${borderHover} transition-all duration-300 shadow-xl ${glowHover}`}
      >
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${lineGradient} rounded-t-3xl`} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Main Info */}
          <div className={`md:col-span-8 flex flex-col gap-3 ${reverse ? 'order-1 md:order-2' : ''}`}>
            <div className="flex items-center gap-3">
              <span className={`p-3 rounded-2xl border ${accentBg} ${accentText}`}>
                <item.icon size={28} />
              </span>
              <div>
                <span className={`font-accent font-bold tracking-wider text-xs uppercase ${accentText}`}>
                  {item.tag}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-cream-100 tracking-wide">{item.title}</h3>
              </div>
            </div>

            <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed mt-2">{item.desc}</p>

            <div className="flex flex-wrap gap-2.5 mt-3">
              {item.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 size={14} className={accentText} />
                  {bullet}
                </span>
              ))}
            </div>
          </div>

          {/* Stat / Badge Callout */}
          <div className={`md:col-span-4 flex ${reverse ? 'order-2 md:order-1 md:justify-start' : 'md:justify-end'}`}>
            <div className="w-full md:w-auto bg-abyss-800/90 border border-abyss-700 rounded-2xl p-5 text-center flex flex-col items-center justify-center">
              <span className={`font-accent font-semibold text-xs uppercase ${isMint ? 'text-cream-100/60' : 'text-coral-500'}`}>
                {item.badge.top}
              </span>
              <span className={`font-display text-4xl sm:text-5xl leading-none my-1 ${isMint ? 'text-mint-400' : 'text-cream-100'}`}>
                {item.badge.highlight}
              </span>
              <span className="text-xs text-cream-100/70 font-sans">{item.badge.bottom}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StickerBadge({
  title,
  subtitle,
  pill,
  icon,
  gradient,
  textColor,
  rotateClass,
}: {
  title: string
  subtitle: string
  pill: string
  icon: React.ReactNode
  gradient: string
  textColor: string
  rotateClass: string
}) {
  const shouldReduce = useReducedMotion()

  return (
    <div className="relative z-30 -my-6 sm:-my-8 flex justify-center pointer-events-none">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={shouldReduce ? {} : { scale: 1.1, rotate: 0 }}
        className={`pointer-events-auto cursor-pointer transform ${rotateClass} transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]`}
      >
        <div className={`${gradient} ${textColor} p-1 rounded-2xl border-4 border-white shadow-2xl flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3 select-none`}>
          {icon}
          <div>
            <span className="font-accent font-black tracking-widest text-[11px] sm:text-xs uppercase opacity-90 block">
              {subtitle}
            </span>
            <p className="font-display text-xl sm:text-2xl tracking-wide leading-none">{title}</p>
          </div>
          <span className="hidden sm:inline-block bg-white/20 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-white/30">
            {pill}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-abyss-800 relative overflow-hidden scroll-mt-16">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mint-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-coral-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-accent font-bold tracking-[0.2em] uppercase text-coral-500 text-sm flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-0.5 bg-coral-500" />
            Experiencia Abysmal
            <span className="w-8 h-0.5 bg-coral-500" />
          </span>
          <h2 className="section-heading">NUESTROS SERVICIOS</h2>
          <div className="section-underline" />
          <p className="text-cream-100/70 max-w-2xl mx-auto -mt-10 text-base sm:text-lg">
            Todo lo que necesitas para tu tarde de juegos: mesas libres, biblioteca inagotable, tienda de cartas y retos épicos.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          <ServiceCard item={SERVICES[0]} reverse={false} />

          <StickerBadge
            title="D&D CAMPAIGNS & ROL"
            subtitle="Critical Hit!"
            pill="Dungeon Masters"
            gradient="bg-gradient-to-br from-coral-500 via-red-600 to-amber-500"
            textColor="text-white"
            rotateClass="-rotate-3"
            icon={
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-coral-500 flex items-center justify-center font-display text-2xl font-black shadow-inner shrink-0">
                20
              </div>
            }
          />

          <ServiceCard item={SERVICES[1]} reverse={true} />

          <ServiceCard item={SERVICES[2]} reverse={false} />

          <StickerBadge
            title="TCG & RARE PULLS"
            subtitle="Official Tournaments"
            pill="Magic • Pokémon"
            gradient="bg-gradient-to-br from-mint-400 via-emerald-500 to-teal-700"
            textColor="text-abyss-900"
            rotateClass="rotate-3"
            icon={
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-abyss-900 text-mint-400 flex items-center justify-center shadow-inner shrink-0">
                <Sparkles size={24} />
              </div>
            }
          />

          <ServiceCard item={SERVICES[3]} reverse={true} />
        </div>
      </div>
    </section>
  )
}
