import { useEffect, useRef, useState } from 'react'

const ScrollReveal = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
      style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
