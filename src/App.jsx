import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import AnimatedBackground from './components/AnimatedBackground'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bg-dark dark:bg-bg-dark light:bg-white overflow-hidden transition-colors duration-300">
        <AnimatedBackground scrollY={scrollY} />
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <ScrollReveal><About /></ScrollReveal>
          <ScrollReveal><Projects /></ScrollReveal>
          <ScrollReveal><Skills /></ScrollReveal>
          <ScrollReveal><Contact /></ScrollReveal>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App