import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-abyss-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <section id="galeria" className="min-h-screen bg-abyss-800" />
        <section id="contacto" className="min-h-screen" />
      </main>
    </div>
  )
}

export default App
