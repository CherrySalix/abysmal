import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-abyss-900">
      <Navbar />
      <main>
        {/* Sections replaced progressively */}
        <section id="inicio" className="min-h-screen flex items-center justify-center">
          <p className="text-mint-400 font-display text-7xl">ABYSMAL</p>
        </section>
        <section id="servicios" className="min-h-screen bg-abyss-800" />
        <section id="sobre-nosotros" className="min-h-screen" />
        <section id="galeria" className="min-h-screen bg-abyss-800" />
        <section id="contacto" className="min-h-screen" />
      </main>
    </div>
  )
}

export default App
