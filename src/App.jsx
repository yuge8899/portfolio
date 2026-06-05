import { useState, useEffect } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Download, ChevronDown } from 'lucide-react'
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
    <div className="relative min-h-screen bg-bg-dark overflow-hidden">
      {/* 动态背景 */}
      <AnimatedBackground scrollY={scrollY} />

      {/* 主内容 */}
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
  )
}

export default App