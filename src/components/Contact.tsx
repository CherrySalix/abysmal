import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL } from '../tokens'

const SCHEDULE = [
  { days: 'Lunes a Jueves', hours: '14:00 – 22:00 hrs' },
  { days: 'Viernes y Sábados', hours: '12:00 – 00:00 hrs' },
  { days: 'Domingos', hours: '12:00 – 20:00 hrs' },
]

export default function Contact() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="contacto" className="py-24 bg-abyss-900 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">CONTACTO Y UBICACIÓN</h2>
        <div className="section-underline" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="font-accent font-bold tracking-widest uppercase text-coral-500 text-sm flex items-center gap-2">
                <span className="w-6 h-0.5 bg-coral-500" />
                ¿Tienes dudas o quieres apartar mesa?
              </span>
              <h3 className="font-display text-4xl text-cream-100 mt-1">VEN A JUGAR AL ABISMO</h3>
              <p className="text-cream-100/70 text-sm sm:text-base mt-2">
                No necesitas experiencia ni traer tus propios juegos. Nuestro staff te explica las reglas y te recomienda el título perfecto para tu grupo.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-abyss-800 border border-abyss-700">
              <div className="p-3 rounded-lg bg-mint-400/10 text-mint-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-cream-100 text-base">Dirección</h4>
                <p className="text-cream-100/80 text-sm mt-1">Av. Ballena 2-10, Justo Sierra</p>
                <p className="text-cream-100/50 text-xs">Fácil acceso y estacionamiento cercano</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-abyss-800 border border-abyss-700">
              <div className="p-3 rounded-lg bg-coral-500/10 text-coral-500 shrink-0">
                <Clock size={24} />
              </div>
              <div className="w-full">
                <h4 className="font-sans font-semibold text-cream-100 text-base mb-2">Horarios de Apertura</h4>
                <div className="flex flex-col gap-1.5 text-sm">
                  {SCHEDULE.map((item) => (
                    <div key={item.days} className="flex justify-between items-center text-cream-100/75">
                      <span>{item.days}</span>
                      <span className="font-mono text-xs text-mint-400 bg-abyss-900/80 px-2.5 py-0.5 rounded">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons & Socials */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={20} />
                <span>Mandar WhatsApp</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-abyss-800 border border-abyss-700 text-cream-100/70 hover:text-coral-500 hover:border-coral-500/50 transition-colors"
                  aria-label="Perfil de Instagram de Abysmal"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-abyss-800 border border-abyss-700 text-cream-100/70 hover:text-mint-400 hover:border-mint-400/50 transition-colors"
                  aria-label="Página de Facebook de Abysmal"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-abyss-700 bg-abyss-800 shadow-2xl flex flex-col h-full min-h-[380px]"
          >
            <div className="p-4 border-b border-abyss-700 flex items-center justify-between">
              <span className="font-mono text-xs text-mint-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-mint-400 animate-pulse" />
                Mapa Interactivo
              </span>
              <span className="text-xs text-cream-100/50">Av. Ballena, Justo Sierra</span>
            </div>
            <div className="relative w-full flex-1 min-h-[320px]">
              <iframe
                title="Ubicación de Abysmal Games and Food"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.392817290196!2d-89.6200!3d20.9700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU4JzEyLjAiTiA4OcKwMzcnMTIuMCJX!5e0!3m2!1ses-419!2smx!4v1620000000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
