import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-abyss-900">
      <Navbar />
      <main>
        <Hero />
        <section id="servicios" className="min-h-screen bg-abyss-800" />
        <section id="sobre-nosotros" className="min-h-screen" />
        <section id="galeria" className="min-h-screen bg-abyss-800" />
        <section id="contacto" className="min-h-screen" />
      </main>
    </div>
  )
}

export default App
