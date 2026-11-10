import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-abyss-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="sobre-nosotros" className="min-h-screen" />
        <section id="galeria" className="min-h-screen bg-abyss-800" />
        <section id="contacto" className="min-h-screen" />
      </main>
    </div>
  )
}

export default App
