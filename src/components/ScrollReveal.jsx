import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ScrollReveal = ({ children, className = '' }) => {
  const ref = useRef(null)

  useGSAP(() => {
    if (!ref.current) return
    const el = ref.current

    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <div ref={ref} className={className} style={{ opacity: 0, willChange: 'transform, opacity' }}>
      {children}
    </div>
  )
}

export default ScrollReveal
