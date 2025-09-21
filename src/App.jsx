import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Programs />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App