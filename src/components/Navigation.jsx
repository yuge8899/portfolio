import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : ''
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-20 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold gradient-text">
          Portfolio
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <a href="#hero" className="text-text-secondary hover:text-white transition-colors text-sm">
            首页
          </a>
          <a href="#projects" className="text-text-secondary hover:text-white transition-colors text-sm">
            作品
          </a>
          <a href="#about" className="text-text-secondary hover:text-white transition-colors text-sm">
            关于
          </a>
          <a href="#contact" className="text-text-secondary hover:text-white transition-colors text-sm">
            联系
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
            aria-label={dark ? '切换浅色模式' : '切换深色模式'}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA Button */}
          <button className="btn-gradient px-6 py-3 rounded-lg text-sm font-semibold text-white">
            联系我
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation