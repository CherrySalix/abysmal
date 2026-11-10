import { motion, useReducedMotion } from 'framer-motion'
import { Clock, ShoppingBag, Calendar, Swords, Sparkles, Flame, Shield, CheckCircle2 } from 'lucide-react'

// Sticker 1: D&D / RPG themed sticker badge
function DnDSticker() {
  const shouldReduce = useReducedMotion()

  return (
    <div className="relative z-30 -my-6 sm:-my-8 flex justify-center pointer-events-none">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={shouldReduce ? {} : { scale: 1.12, rotate: 0 }}
        className="pointer-events-auto cursor-pointer transform -rotate-3 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
      >
        <div className="bg-gradient-to-br from-coral-500 via-red-600 to-amber-500 text-white p-1 rounded-2xl border-4 border-white shadow-2xl flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3 select-none">
          {/* D20 / Dragon Icon */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-coral-500 flex items-center justify-center font-display text-2xl font-black shadow-inner shrink-0">
            20
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <Flame size={14} className="text-amber-200 fill-amber-200" />
              <span className="font-accent font-black tracking-widest text-[11px] sm:text-xs uppercase text-amber-100">
                Critical Hit!
              </span>
            </div>
            <p className="font-display text-xl sm:text-2xl tracking-wide leading-none text-white drop-shadow">
              D&amp;D CAMPAIGNS &amp; ROL
            </p>
          </div>
          <span className="hidden sm:inline-block bg-white/20 text-white font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-white/30">
            Dungeon Masters
          </span>
        </div>
      </motion.div>
    </div>
  )
}

// Sticker 2: TCG / Trading Card Game themed sticker badge
function TcgSticker() {
  const shouldReduce = useReducedMotion()

  return (
    <div className="relative z-30 -my-6 sm:-my-8 flex justify-center pointer-events-none">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        whileHover={shouldReduce ? {} : { scale: 1.12, rotate: 0 }}
        className="pointer-events-auto cursor-pointer transform rotate-3 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
      >
        <div className="bg-gradient-to-br from-mint-400 via-emerald-500 to-teal-700 text-abyss-900 p-1 rounded-2xl border-4 border-white shadow-2xl flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3 select-none">
          {/* TCG Cards Icon */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-abyss-900 text-mint-400 flex items-center justify-center shadow-inner shrink-0">
            <Sparkles size={24} className="animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-abyss-900/80 fill-abyss-900/80" />
              <span className="font-accent font-black tracking-widest text-[11px] sm:text-xs uppercase text-abyss-900">
                Official Tournaments
              </span>
            </div>
            <p className="font-display text-xl sm:text-2xl tracking-wide leading-none text-abyss-900 font-black">
              TCG &amp; RARE PULLS
            </p>
          </div>
          <span className="hidden sm:inline-block bg-abyss-900 text-mint-400 font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-abyss-900/30">
            Magic • Pokémon
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="servicios" className="py-24 bg-abyss-800 relative overflow-hidden scroll-mt-16">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-mint-400/5 rounded-full blur-3xl pointer-events-none" />
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

        {/* Polygons Container with Intercalated Cards */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* =========================================================================
              CARD 1: Zona de Juego (Izquierda a Derecha)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full lg:w-[95%] mr-auto group"
          >
            <div className="relative bg-gradient-to-r from-abyss-900 via-abyss-900 to-abyss-800 rounded-3xl p-6 sm:p-10 border-2 border-abyss-700/80 hover:border-mint-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_16px_40px_rgba(95,227,178,0.12)] md:[clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]">
              {/* Subtle accent highlight line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-mint-400 to-transparent rounded-t-3xl" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left icon & tags */}
                <div className="md:col-span-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-mint-400/10 text-mint-400 border border-mint-400/30">
                      <Clock size={28} />
                    </span>
                    <div>
                      <span className="font-accent font-bold tracking-wider text-xs uppercase text-mint-400">
                        Modalidad Principal
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl text-cream-100 tracking-wide">
                        ZONA DE JUEGO POR TIEMPO
                      </h3>
                    </div>
                  </div>

                  <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed mt-2">
                    Siéntate y juega sin prisas. Pagas una tarifa accesible por tiempo de estancia y tienes acceso libre
                    e ilimitado a nuestra biblioteca de más de 300 juegos de mesa. Cambia de juego cuantas veces quieras y
                    recibe explicación de reglas por parte de nuestro staff.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-mint-400" />
                      +300 títulos disponibles
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-mint-400" />
                      Mesas amplias con tapete
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-mint-400" />
                      Tutoría de juegos incluida
                    </span>
                  </div>
                </div>

                {/* Right callout badge */}
                <div className="md:col-span-4 flex md:justify-end">
                  <div className="w-full md:w-auto bg-abyss-800/90 border border-abyss-700 rounded-2xl p-5 text-center flex flex-col items-center justify-center">
                    <span className="font-accent font-semibold text-xs text-cream-100/60 uppercase">Desde solo</span>
                    <span className="font-display text-4xl sm:text-5xl text-mint-400 leading-none my-1">$30 MXN</span>
                    <span className="text-xs text-cream-100/70 font-sans">Acceso por persona</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              STICKER 1 (En medio de la 1ª y la 2ª card): D&D / ROL
              ========================================================================= */}
          <DnDSticker />

          {/* =========================================================================
              CARD 2: Tienda & TCG (Derecha a Izquierda - Intercalada)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full lg:w-[95%] ml-auto group"
          >
            <div className="relative bg-gradient-to-l from-abyss-900 via-abyss-900 to-abyss-800 rounded-3xl p-6 sm:p-10 border-2 border-abyss-700/80 hover:border-coral-500/70 transition-all duration-300 shadow-xl hover:shadow-[0_16px_40px_rgba(255,99,71,0.12)] md:[clip-path:polygon(3%_0,100%_0,100%_100%,0_100%)]">
              {/* Coral accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-coral-500 to-transparent rounded-t-3xl" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Callout Badge */}
                <div className="md:col-span-4 order-2 md:order-1 flex md:justify-start">
                  <div className="w-full md:w-auto bg-abyss-800/90 border border-abyss-700 rounded-2xl p-5 text-center flex flex-col items-center justify-center">
                    <span className="font-accent font-semibold text-xs text-coral-500 uppercase">Productos Oficiales</span>
                    <span className="font-display text-3xl sm:text-4xl text-cream-100 leading-none my-1">TCG &amp; JUEGOS</span>
                    <span className="text-xs text-cream-100/70 font-sans">Nuevos lanzamientos</span>
                  </div>
                </div>

                {/* Right content */}
                <div className="md:col-span-8 order-1 md:order-2 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-coral-500/10 text-coral-500 border border-coral-500/30">
                      <ShoppingBag size={28} />
                    </span>
                    <div>
                      <span className="font-accent font-bold tracking-wider text-xs uppercase text-coral-500">
                        Tienda &amp; Coleccionables
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl text-cream-100 tracking-wide">
                        VENTA DE JUEGOS Y TCG
                      </h3>
                    </div>
                  </div>

                  <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed mt-2">
                    Lleva la magia a tu casa. Contamos con venta de juegos de mesa sellados, cartas sueltas seleccionadas,
                    sobres de expansión, decks armados y accesorios de protección (micas, carpetas, deck boxes) para Magic: The
                    Gathering, Pokémon TCG y más.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-coral-500" />
                      Sobres y Boosters originales
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-coral-500" />
                      Singles de Magic &amp; Pokémon
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-coral-500" />
                      Preventas de juegos exclusivos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              CARD 3: Eventos, Rol y Billar (Izquierda a Derecha)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full lg:w-[95%] mr-auto group"
          >
            <div className="relative bg-gradient-to-r from-abyss-900 via-abyss-900 to-abyss-800 rounded-3xl p-6 sm:p-10 border-2 border-abyss-700/80 hover:border-mint-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_16px_40px_rgba(95,227,178,0.12)] md:[clip-path:polygon(0_0,100%_0,97%_100%,0_100%)]">
              {/* Mint accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-mint-400 to-transparent rounded-t-3xl" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left content */}
                <div className="md:col-span-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-mint-400/10 text-mint-400 border border-mint-400/30">
                      <Calendar size={28} />
                    </span>
                    <div>
                      <span className="font-accent font-bold tracking-wider text-xs uppercase text-mint-400">
                        Comunidad &amp; Competición
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl text-cream-100 tracking-wide">
                        EVENTOS, D&amp;D Y BILLAR
                      </h3>
                    </div>
                  </div>

                  <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed mt-2">
                    En Abysmal siempre hay algo ocurriendo: noches temáticas de terror, torneos de League of Legends y
                    videojuegos, campañas continuas de Dungeons &amp; Dragons para novatos y veteranos, y mesas de billar para
                    desafiar el pulso entre rondas.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-mint-400" />
                      Campañas oficiales de D&amp;D
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-mint-400" />
                      Torneos de Billar y TCG
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-mint-400" />
                      Premios en efectivo y vales
                    </span>
                  </div>
                </div>

                {/* Right callout */}
                <div className="md:col-span-4 flex md:justify-end">
                  <div className="w-full md:w-auto bg-abyss-800/90 border border-abyss-700 rounded-2xl p-5 text-center flex flex-col items-center justify-center">
                    <span className="font-accent font-semibold text-xs text-mint-400 uppercase">Calendario Semanal</span>
                    <span className="font-display text-3xl sm:text-4xl text-cream-100 leading-none my-1">TORNEOS</span>
                    <span className="text-xs text-cream-100/70 font-sans">Consulta fechas en Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              STICKER 2 (En medio de la 3ª y la 4ª card): TCG / COLLECTIBLES
              ========================================================================= */}
          <TcgSticker />

          {/* =========================================================================
              CARD 4: Desafío al Staff (Derecha a Izquierda - Intercalada)
              ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full lg:w-[95%] ml-auto group"
          >
            <div className="relative bg-gradient-to-l from-abyss-900 via-abyss-900 to-abyss-800 rounded-3xl p-6 sm:p-10 border-2 border-abyss-700/80 hover:border-coral-500/70 transition-all duration-300 shadow-xl hover:shadow-[0_16px_40px_rgba(255,99,71,0.12)] md:[clip-path:polygon(3%_0,100%_0,100%_100%,0_100%)]">
              {/* Flame accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-l from-coral-500 to-transparent rounded-t-3xl" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Callout Badge */}
                <div className="md:col-span-4 order-2 md:order-1 flex md:justify-start">
                  <div className="w-full md:w-auto bg-abyss-800/90 border border-coral-500/30 rounded-2xl p-5 text-center flex flex-col items-center justify-center">
                    <span className="font-accent font-semibold text-xs text-coral-500 uppercase">¿Aceptas el Reto?</span>
                    <span className="font-display text-4xl sm:text-5xl text-coral-500 leading-none my-1">4 Llaveros</span>
                    <span className="text-xs text-cream-100/70 font-sans">1 por cada staff vencido</span>
                  </div>
                </div>

                {/* Right content */}
                <div className="md:col-span-8 order-1 md:order-2 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-3 rounded-2xl bg-coral-500/10 text-coral-500 border border-coral-500/30">
                      <Swords size={28} />
                    </span>
                    <div>
                      <span className="font-accent font-bold tracking-wider text-xs uppercase text-coral-500">
                        Atracción Exclusiva
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl text-cream-100 tracking-wide">
                        ¡EL DESAFÍO AL STAFF!
                      </h3>
                    </div>
                  </div>

                  <p className="text-cream-100/75 text-sm sm:text-base leading-relaxed mt-2">
                    ¿Te crees el mejor jugador de la sala? Pide retar a uno de nuestros 4 representantes de Abysmal
                    (<strong className="text-coral-500">Neelo, Samchompi, Castro01 y TheTastas</strong>). Lanza los dados
                    para decidir el juego. Cada victoria te otorga una medalla y un llavero coleccionable exclusivo. ¡Gana a los 4
                    y obtén la gloria máxima!
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-coral-500" />
                      4 Representantes a vencer
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-coral-500" />
                      Llaveros y medallas físicas
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-cream-100/90 bg-abyss-800 border border-abyss-700 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={14} className="text-coral-500" />
                      Premio mayor por derrotar a los 4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
