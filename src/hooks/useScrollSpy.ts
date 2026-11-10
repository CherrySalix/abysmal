import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../tokens'

export function useScrollSpy(): string {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: '-20% 0px -60% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeSection
}
