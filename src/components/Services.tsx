import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, ShoppingBag, Calendar, Swords } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'

interface ServiceCard {
  Icon: LucideIcon
  title: string
  desc: string
  accent: 'mint' | 'coral'
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    Icon: Clock,
    title: 'Zona de Juego',
    desc: 'Paga por tiempo y juega lo que quieras de nuestra biblioteca de más de 300 títulos. ¡Sin restricciones!',
    accent: 'mint',
  },
  {
    Icon: ShoppingBag,
    title: 'Tienda',
    desc: 'Compra juegos de mesa y TCG. Cartas sueltas, sobres, decks armados y torneos de Magic, Pokémon y más.',
    accent: 'coral',
  },
  {
    Icon: Calendar,
    title: 'Eventos',
    desc: 'Torneos, noches temáticas, campañas de D&D, billar competitivo y sesiones de juegos de rol cada semana.',
    accent: 'mint',
  },
  {
    Icon: Swords,
    title: 'Desafío al Staff',
    desc: '¿Te atreves? Reta a nuestros empleados en su juego favorito. Derrota a más y gana mejores premios.',
    accent: 'coral',
  },
]

function Card({ card, index }: { card: ServiceCard; index: number }) {
  const shouldReduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: shouldReduce ? 0 : index * 0.1, ease: 'easeOut' }}
      whileHover={shouldReduce ? {} : { y: -8 }}
      className="bg-abyss-900 rounded-2xl p-8 border border-abyss-700 cursor-default group transition-shadow hover:shadow-[0_20px_40px_rgba(95,227,178,0.1)]"
    >
      <div
        className={`inline-flex p-3 rounded-xl mb-4 ${
          card.accent === 'mint'
            ? 'bg-mint-400/10 text-mint-400'
            : 'bg-coral-500/10 text-coral-500'
        }`}
      >
        <card.Icon size={32} />
      </div>
      <h3 className="font-display text-2xl text-cream-100 mb-3">{card.title}</h3>
      <p className="font-sans text-sm text-cream-100/60 leading-relaxed">{card.desc}</p>
      <div
        className={`mt-6 h-0.5 w-0 group-hover:w-12 transition-all duration-300 ${
          card.accent === 'mint' ? 'bg-mint-400' : 'bg-coral-500'
        }`}
      />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-abyss-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">NUESTROS SERVICIOS</h2>
        <div className="section-underline" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CARDS.map((card, i) => (
            <Card key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
