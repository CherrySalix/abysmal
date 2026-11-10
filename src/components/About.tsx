import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Users, Trophy, Coffee, Quote } from 'lucide-react'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80&auto=format&fit=crop'

const HIGHLIGHTS = [
  { icon: Sparkles, label: '+300 Juegos', desc: 'Para todos los niveles' },
  { icon: Users, label: 'Comunidad', desc: 'Ambiente seguro y amigable' },
  { icon: Trophy, label: 'Torneos & TCG', desc: 'Premios semanales' },
  { icon: Coffee, label: 'Food & Drinks', desc: 'Café, snacks y botanas' },
]

export default function About() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="sobre-nosotros" className="py-24 bg-abyss-900 relative overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column (badge removed as requested) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square border border-abyss-700 shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="Mesa de juegos en Abysmal Games & Food"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-900/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <span className="font-accent font-bold tracking-widest uppercase text-coral-500 text-sm mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-coral-500" />
              Nuestra Historia
            </span>

            <h2 className="font-display text-5xl sm:text-6xl text-cream-100 leading-tight">
              DESDE LAS PROFUNDIDADES DEL ABISMO
            </h2>
            <div className="w-16 h-1 bg-mint-400 mt-3 mb-6" />

            <p className="text-cream-100/80 text-base sm:text-lg leading-relaxed mb-4">
              Nacimos con una misión simple: crear el punto de encuentro definitivo para quienes buscan
              desconectar de la rutina y sumergirse en historias increíbles. En <span className="text-mint-400 font-semibold">Abysmal</span> no compras solo tiempo de mesa; compras risas, estrategias épicas y rivalidades amistosas que duran toda la vida.
            </p>

            <p className="text-cream-100/70 text-sm sm:text-base leading-relaxed mb-6">
              Ya sea que vengas a dominar una campaña de D&D de 6 horas, abrir sobres de tu TCG favorito, jugar una partida rápida de billar o probar suerte en nuestro legendario <span className="text-coral-500 font-semibold">Desafío al Staff</span>, aquí siempre hay una mesa reservada para ti.
            </p>

            {/* Mascot Quote Box (Modern, clean, legible typography with Outfit font) */}
            <div className="bg-abyss-800/90 border border-abyss-700 border-l-4 border-l-mint-400 rounded-xl p-5 mb-8 relative shadow-lg">
              <Quote className="absolute top-4 right-4 text-mint-400/20" size={32} />
              <p className="font-accent font-semibold text-mint-400 text-lg sm:text-xl leading-snug tracking-wide">
                «En el abismo no hay rivales pequeños, solo grandes tiradas de dados esperando suceder.»
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-mint-400" />
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-cream-100/60">
                  Staff de Abysmal
                </span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-abyss-800 text-mint-400 border border-abyss-700 shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-cream-100">{item.label}</h3>
                    <p className="text-xs text-cream-100/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
