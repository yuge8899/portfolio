import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ ease: 'power3.out' })

    tl.from('.hero-avatar', { opacity: 0, scale: 0.8, duration: 0.6 })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
      .from('.hero-actions', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.hero-scroll', { opacity: 0, duration: 0.8 }, '-=0.3')
  }, { scope: ref })

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center pt-[72px]">
      <div className="text-center px-20">
        {/* Avatar */}
        <div className="hero-avatar relative inline-block mb-8">
          <div className="w-[120px] h-[120px] rounded-full avatar-glow flex items-center justify-center">
            <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-primary to-accent-glow" />
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" />
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-bold gradient-text mb-4">
          你好，我是设计师
        </h1>

        <p className="hero-subtitle text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          UI/UX 设计师 | 专注于创造美观实用的数字体验
        </p>

        <div className="hero-actions flex items-center justify-center gap-4">
          <button className="btn-gradient px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2">
            查看作品
          </button>
          <button className="glass px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/10 transition-colors">
            联系我
          </button>
        </div>

        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-text-secondary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
