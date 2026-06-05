import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()
  const navRef = useRef(null)

  useGSAP(() => {
    // Hover effects on nav links
    const links = navRef.current.querySelectorAll('.nav-link')
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { color: '#ffffff', duration: 0.2 })
      })
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { color: 'rgba(255,255,255,0.5)', duration: 0.3 })
      })
    })

    // Hover effect on CTA button
    const cta = navRef.current.querySelector('.nav-cta')
    if (cta) {
      cta.addEventListener('mouseenter', () => {
        gsap.to(cta, { scale: 1.04, duration: 0.2, ease: 'power2.out' })
      })
      cta.addEventListener('mouseleave', () => {
        gsap.to(cta, { scale: 1, duration: 0.3, ease: 'power2.out' })
      })
    }
  }, { scope: navRef })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : ''
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-20 h-[72px] flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          Portfolio
        </a>

        <div className="flex items-center gap-8">
          <a href="#hero" className="nav-link text-text-secondary text-sm">首页</a>
          <a href="#projects" className="nav-link text-text-secondary text-sm">作品</a>
          <a href="#about" className="nav-link text-text-secondary text-sm">关于</a>
          <a href="#contact" className="nav-link text-text-secondary text-sm">联系</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
            aria-label={dark ? '切换浅色模式' : '切换深色模式'}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="nav-cta btn-gradient px-6 py-3 rounded-lg text-sm font-semibold text-white">
            联系我
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
