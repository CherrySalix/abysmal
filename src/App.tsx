import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  return (
    <div className="min-h-screen bg-abyss-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App
