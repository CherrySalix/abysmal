import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../tokens'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useScrollSpy()
  const navRef = useRef<HTMLElement>(null)

  // Close on outside click or Escape key
  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('touchstart', handleOutside)
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Close on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      const yOffset = -70 // Navbar height offset
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav
      ref={navRef}
      className="navbar-root fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-abyss-900/90 border-b border-abyss-700/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Abysmal – volver al inicio"
          >
            <img src="/abysmal-logo.svg" alt="" className="h-8 w-8 transition-transform group-hover:scale-105" />
            <span className="font-display text-2xl text-mint-400 tracking-wider group-hover:text-mint-400/90 transition-colors">
              ABYSMAL
            </span>
          </a>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.href
                    ? 'text-mint-400 font-semibold'
                    : 'text-cream-100/70 hover:text-cream-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-mint-400 text-abyss-900 font-sans font-semibold text-sm px-5 py-2 rounded-full hover:bg-mint-400/90 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-mint-400/10"
            >
              Visítanos
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden text-cream-100 p-2.5 rounded-xl bg-abyss-800/80 border border-abyss-700 hover:bg-abyss-700 focus:outline-none focus:ring-2 focus:ring-mint-400/50 transition-colors active:scale-95"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isOpen ? <X size={22} className="text-mint-400" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile expandable drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            id="mobile-nav-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden md:hidden bg-abyss-900/98 backdrop-blur-xl border-t border-abyss-700 shadow-2xl"
          >
            <div className="px-4 py-5 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left font-sans text-base py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors cursor-pointer ${
                    activeSection === link.href
                      ? 'text-mint-400 bg-abyss-800 font-semibold border-l-4 border-mint-400'
                      : 'text-cream-100/80 hover:text-cream-100 hover:bg-abyss-800/60 active:bg-abyss-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="text-cream-100/40" />
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNavClick('#contacto')}
                className="mt-3 w-full bg-mint-400 text-abyss-900 font-sans font-semibold text-center py-3.5 rounded-full hover:bg-mint-400/90 transition-all active:scale-98 shadow-lg shadow-mint-400/20"
              >
                Visítanos en Justo Sierra
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
