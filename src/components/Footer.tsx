import { ArrowUp, Instagram, Facebook } from 'lucide-react'
import { INSTAGRAM_URL, FACEBOOK_URL } from '../tokens'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-abyss-900 border-t border-abyss-700/80 pt-12 pb-24 sm:pb-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <img src="/abysmal-logo.svg" alt="" className="w-8 h-8" />
            <div>
              <span className="font-display text-2xl text-mint-400 tracking-wider">ABYSMAL</span>
              <p className="text-xs text-cream-100/60 font-sans">Games and Food • Ludoteca &amp; Cafetería</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-cream-100/40 text-center order-3 md:order-2">
            © {new Date().getFullYear()} Abysmal Games and Food. Todos los derechos reservados.
          </p>

          {/* Socials & Back to Top with 44px touch targets */}
          <div className="flex items-center gap-2 order-2 md:order-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center text-cream-100/60 hover:text-coral-500 hover:bg-abyss-800 transition-colors"
              aria-label="Instagram de Abysmal"
            >
              <Instagram size={20} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center text-cream-100/60 hover:text-mint-400 hover:bg-abyss-800 transition-colors"
              aria-label="Facebook de Abysmal"
            >
              <Facebook size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-abyss-800 border border-abyss-700 flex items-center justify-center text-cream-100/60 hover:text-cream-100 hover:bg-abyss-700 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
