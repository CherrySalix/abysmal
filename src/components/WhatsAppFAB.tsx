import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../tokens'

export default function WhatsAppFAB() {
  const shouldReduce = useReducedMotion()

  return (
    <aside aria-label="Contacto directo" className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp para cotizaciones o dudas"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-500/30 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400/40"
        whileHover={shouldReduce ? {} : { scale: 1.08 }}
        whileTap={shouldReduce ? {} : { scale: 0.95 }}
      >
        {/* Subtle breathing ripple */}
        {!shouldReduce && (
          <span
            className="absolute -inset-1 rounded-full bg-green-500/40 animate-ping pointer-events-none"
            style={{ animationDuration: '3s' }}
            aria-hidden="true"
          />
        )}

        <MessageCircle size={28} className="relative z-10" />

        {/* Tooltip on hover for desktop */}
        <span
          role="tooltip"
          className="absolute right-16 bg-abyss-800 text-cream-100 text-xs font-sans font-medium px-3 py-1.5 rounded-lg border border-abyss-700 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block"
        >
          ¡Escríbenos por WhatsApp!
        </span>
      </motion.a>
    </aside>
  )
}
