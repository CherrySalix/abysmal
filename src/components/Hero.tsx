import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '../tokens'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1600&q=80&auto=format&fit=crop'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-abyss-900"
    >
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 select-none pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-abyss-900/60 via-transparent to-abyss-900"
        aria-hidden="true"
      />

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="font-accent font-bold tracking-[0.25em] uppercase text-coral-500 text-sm sm:text-base mb-3 flex items-center gap-2"
        >
          <span className="w-8 h-0.5 bg-coral-500" />
          Games &amp; Food
          <span className="w-8 h-0.5 bg-coral-500" />
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display text-7xl sm:text-[10rem] lg:text-[12rem] text-cream-100 leading-none tracking-tight"
        >
          ABYSMAL
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="w-24 h-1 bg-mint-400 mt-4 mb-6"
        />

        <motion.p
          variants={itemVariants}
          className="font-sans text-lg sm:text-xl text-cream-100/75 max-w-xl leading-relaxed"
        >
          El lugar donde los dados deciden tu destino.
          <br className="hidden sm:block" />
          Paga por tiempo, juega sin límites.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mint-400 text-abyss-900 font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-mint-400/90 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Reserva tu mesa
          </a>
          <a
            href="#servicios"
            className="border border-coral-500 text-coral-500 font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-coral-500/10 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Ver servicios
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll caret */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream-100/40"
        animate={shouldReduce ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}
