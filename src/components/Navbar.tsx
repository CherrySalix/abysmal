import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../tokens'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useScrollSpy()
  const navRef = useRef<HTMLElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
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
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className="navbar-root fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-surface/80 border-b border-abyss-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            className="flex items-center gap-2 group"
            aria-label="Abysmal – inicio"
          >
            <img src="/abysmal-logo.svg" alt="" className="h-8 w-8" />
            <span className="font-display text-2xl text-mint-400 group-hover:text-mint-400/80 transition-colors">
              ABYSMAL
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`font-sans text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-mint-400'
                    : 'text-cream-100/70 hover:text-cream-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
              className="bg-mint-400 text-abyss-900 font-sans font-semibold text-sm px-4 py-2 rounded-full hover:bg-mint-400/90 transition-colors"
            >
              Visítanos
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-cream-100 p-2 rounded-lg hover:bg-abyss-700 transition-colors"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden md:hidden bg-abyss-800/95 backdrop-blur-md border-t border-abyss-700"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`font-sans text-base py-3 px-4 rounded-xl transition-colors ${
                    activeSection === link.href
                      ? 'text-mint-400 bg-abyss-700'
                      : 'text-cream-100/80 hover:text-cream-100 hover:bg-abyss-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
                className="mt-2 bg-mint-400 text-abyss-900 font-sans font-semibold text-center py-3 rounded-full hover:bg-mint-400/90 transition-colors"
              >
                Visítanos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
