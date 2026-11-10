import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles, Users, Trophy, Coffee } from 'lucide-react'

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
    <section id="sobre-nosotros" className="py-24 bg-abyss-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-900/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-abyss-800/95 backdrop-blur-md border border-mint-400/30 rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <img src="/abysmal-logo.svg" alt="" className="w-10 h-10" />
              <div>
                <p className="font-display text-lg text-mint-400">ABYSMAL CAFE</p>
                <p className="text-xs text-cream-100/70">Tu refugio gamer en Justo Sierra</p>
              </div>
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
            <span className="font-script text-coral-500 text-2xl mb-2">Nuestra Historia</span>
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

            {/* Mascot Quote Box */}
            <div className="bg-abyss-800/80 border-l-4 border-mint-400 rounded-r-xl p-4 mb-8">
              <p className="font-script text-mint-400 text-xl italic">
                «En el abismo no hay rivales pequeños, solo grandes tiradas de dados esperando suceder.»
              </p>
              <span className="text-xs text-cream-100/50 mt-1 block">— El Staff de Abysmal</span>
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
