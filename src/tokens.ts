// Brand constants — single source of truth for the whole app

export const WHATSAPP_URL = 'https://wa.me/52XXXXXXXXXX'

export const INSTAGRAM_URL = 'https://www.instagram.com/abysmal_games_and_food'
export const FACEBOOK_URL  = 'https://www.facebook.com/share/15wLYnEw3M'

export const NAV_LINKS = [
  { label: 'Servicios',      href: '#servicios' },
  { label: 'Nosotros',       href: '#sobre-nosotros' },
  { label: 'Galería',        href: '#galeria' },
  { label: 'Contacto',       href: '#contacto' },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
