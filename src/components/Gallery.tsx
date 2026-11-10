import { motion, useReducedMotion } from 'framer-motion'

interface GalleryItem {
  id: string
  url: string
  title: string
  category: string
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&q=80&auto=format&fit=crop',
    title: 'Noche de Estrategia',
    category: 'Juegos de Mesa',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&q=80&auto=format&fit=crop',
    title: 'Mesas de Billar',
    category: 'Torneos',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80&auto=format&fit=crop',
    title: 'Campañas de Rol & D&D',
    category: 'Eventos',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80&auto=format&fit=crop',
    title: 'TCG & Coleccionables',
    category: 'Tienda',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80&auto=format&fit=crop',
    title: 'Snacks & Cafetería',
    category: 'Food & Drinks',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80&auto=format&fit=crop',
    title: 'Biblioteca de Juegos',
    category: 'Zona Libre',
  },
]

export default function Gallery() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="galeria" className="py-24 bg-abyss-800 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">GALERÍA DEL ABISMO</h2>
        <div className="section-underline" />
        <p className="text-center text-cream-100/70 max-w-xl mx-auto -mt-10 mb-14 text-sm sm:text-base">
          Un vistazo a nuestras noches de juego, torneos épicos y el ambiente que nos convierte en tu segundo hogar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: shouldReduce ? 0 : index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl bg-abyss-900 border border-abyss-700 aspect-4/3 shadow-lg"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Caption: always visible on touchscreens, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-900/95 via-abyss-900/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                <span className="text-coral-500 font-accent font-bold tracking-widest uppercase text-xs">{item.category}</span>
                <h3 className="text-cream-100 font-display text-xl sm:text-2xl tracking-wide">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
